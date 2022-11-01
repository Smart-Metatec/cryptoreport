import React, {useState, Dispatch, SetStateAction} from 'react'
import {FaTimes} from "react-icons/fa"
import {useAppDispatch} from "../store/hooks"
import {setPlatform} from "../store/slices/platformSlice"

interface Props {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

const plateformList = [
    {
        name: "Bybit",
        image: "Bybit Logo.png"
    },
    {
        name: "Luno",
        image: "Luno Logo.png"
    }
]

const PlatformModal: React.FC<Props> = ({show, setShow}): JSX.Element => {

    const dispatch = useAppDispatch()

    const setPlatformHandler = (platform: string) => {
        dispatch(setPlatform(platform))
        setShow(false)
    }
    if(!show){
        return <></>
    } 

    return (
        <main className=''>

            <div className='w-screen bg-black opacity-60 h-100v absolute inset-0'></div>

            <section className='relative bg-white w-2/4 m-auto mt-30 rounded-lg'>
                <div className='flex justify-end p-3'>
                    <FaTimes className='text-3xl text-green-500 cursor-pointer' onClick={() => setShow(prevState => !prevState)}/>
                </div>
                <div className='p-4'>
                    {plateformList.map(platform => (
                        <div key={platform.name} className='flex justify-between my-4 border-2 p-3 rounded-lg border-gray-500'>
                            <div className='font-bold'>{platform.name}</div>
                            <img src={`/${platform.image}`} alt="" className='w-20'/>
                            <button 
                                className='bg-green-500 px-3 py-1 rounded text-white font-bold' 
                                onClick={() => setPlatformHandler(platform.name)}
                            >
                                Select
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default PlatformModal