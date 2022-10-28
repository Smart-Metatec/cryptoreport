import { useState, ChangeEvent } from "react"

import PlatformModal from "../components/PlatformModal"

type File = ChangeEvent<HTMLInputElement>

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)
  const [data, setData] = useState<string>("")

  const processFile = (event: File) => {
    const fileList: FileList | null = event.target.files

    if(!fileList) return

    const file = fileList[0]
    const fileReader = new FileReader()

    fileReader.onload = (e) => {
      const text = e.target?.result
      if(!text) return
      // setData(text)
    }

    fileReader.readAsText(file)

  }

  const processData = () => {

  }


  return (
    <main>
        <div className='flex justify-around pt-10'>
            <button 
              className={`bg-green-500 px-5 py-2 text-white rounded-lg font-bold`}
              onClick={() => setShow((prevState) => !prevState)}
              >
                Select Platform
              </button>
            <input type="file" name="" id="" className='cursor-pointer block' onChange={(e: File) => processFile(e)}/>
        </div>
        <PlatformModal show={show} setShow={setShow}/>
    </main>
  )
}
