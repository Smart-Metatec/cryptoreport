import { useState, ChangeEvent, useEffect, useRef } from "react"
import { DisplayNames, TradeHistory, Fields, Directions, bybit } from "../../utils/platforms/bybit"
import PlatformModal from "../../components/PlatformModal"
import { useAppSelector } from "../../store/hooks"
import {RootState} from "../../store/store"
import {IndexStyles} from "./index.styles.tw"
import { Result } from "../../utils/platforms/generic"


type File = ChangeEvent<HTMLInputElement>

const cryptotax: React.FC = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)
    const [header, setHeader] = useState<string[]>([])
    const [data, setData] = useState<string[][]>([])

    const platform: string = useAppSelector((state: RootState) => state.platform)

    const fileRef = useRef<HTMLInputElement>(null)

    const processFile = (event: File) => {
        const fileList: FileList | null = event.target.files

        if(!fileList) return

        const file = fileList[0]
        const fileReader = new FileReader()


        fileReader.onload = (e) => {
            const text = e.target?.result
            if(!text || text instanceof ArrayBuffer) return
            
            processData(text, file.name)
        }

        fileReader.readAsText(file)

    }

    const processData = (result: string, filename: string) => {
        // Assign string[] and string[][] to reuse the variable
        let rows: string[] | Array<string[]> = result.split("\n")
    
        let header = rows.shift()?.split(",")

        if(!header) return
    
        rows = rows.map(row => row.split(","))

        let data: Result | null = null

        switch(platform){
            case 'bybit':
                data = bybit(header, rows, filename)
                console.log("Processing bybit")
                break
            case 'luno':
                console.log("Processing Luno")
                break
            default:
                console.log("No platform selected")
        }
        
        // setData(rows)
        // if(header) setHeader(header)
    }

    const calcValues = () => {
        if(!(header.length && data.length)) return
    
        let balance = 0
        let totalFees = 0
    
        for(let i = 0; i < data.length; i++){
          const orderTypeIndex: number = header.indexOf(Fields.OrderType)
    
          if(data[i][orderTypeIndex] == "--") continue
    
          const fees = parseFloat(data[i][header.indexOf(Fields.FeesPaid)])
          const direction = data[i][header.indexOf(Fields.Direction)]
          const quantity = parseFloat(data[i][header.indexOf(Fields.FilledQty)])
          const price = parseFloat(data[i][header.indexOf(Fields.FilledPrice)])
    
          balance += calcValue(direction, quantity * price)
          totalFees += isNaN(fees) ? 0 : fees
    
        }
    }

    const calcValue = (direction: string, value: number) => {
        if(isNaN(value)) return 0
    
        if(direction === Directions.CloseLong) return value
        else if(direction === Directions.CloseShort) return -value
        else if(direction === Directions.OpenLong) return -value
        else return value
    }

    const chooseFile = () => {
        fileRef.current?.click()
    }

    useEffect(() => {
        calcValues()
    }, [data, header, platform])

    return (
        <IndexStyles>
            <div className='flex justify-around pt-10'>
                <div>
                    <button 
                    className={`bg-green-500 px-5 py-2 text-white rounded-lg font-bold align-middle`}
                    onClick={() => setShow((prevState) => !prevState)}
                    >
                        Select Platform
                    </button>
                    <span className="text-2xl px-5 align-middle">{platform}</span>
                </div>

                <button 
                    className={`bg-green-500 px-5 py-2 text-white rounded-lg font-bold align-middle`}
                    onClick={() => chooseFile()}
                    >
                        Choose File
                </button>
                <input 
                    style={{display: "none"}} 
                    ref={fileRef}  
                    type="file"
                    className='cursor-pointer block' 
                    onChange={(e: File) => processFile(e)}/
                >

            </div>
            <PlatformModal show={show} setShow={setShow}/>

            <section>

               {data.length && <table>
                    <thead className="text-left">
                        <tr>
                            <th>No.</th>
                            {header.map((heading: string, index: number) => {
                                const item: string = header[index]
                                const showColumn: boolean = TradeHistory[item]
                                if(!showColumn) return
                                return (
                                <th key={heading}>{DisplayNames[heading]}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row: string[], index: number) => {
                            const orderTypeIndex: number = header.indexOf(Fields.OrderType)
                            if(row[orderTypeIndex] == "--") return

                            return (
                            <tr key={Math.random()}>
                                <td>{index+1}</td>
                                {row.map((column: string, index: number) => {
                                const item = header[index]
                                const showColumn = TradeHistory[item]
                                if(!showColumn) return
                                return (
                                    <td key={Math.random()}>{column}</td>
                                )}
                                )}
                            </tr>
                            )

                        })}
                    </tbody>
                </table>}
            </section>
        </IndexStyles>
    )
}

export default cryptotax