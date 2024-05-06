import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectsData } from '../../data'
import handbook from "/public/imgs/handbook.png"
import finger from "/public/imgs/finger.png"
import sticker from "/public/imgs/true.png"
import git from "/public/icons/git2.svg"
import { useScrollTop } from '../../hooks/useScrollTop'

export const Detail = () => {
    const params = useParams()
    const result = projectsData?.find((item) => item.id == params?.id)
    useScrollTop()

    return (
        <div className='container py-[50px]'>
            <h2 className='text-center text-3xl font-semibold text-primary mb-10'>About <span className='text-blue-600'>"{result?.name}"</span> </h2>
            <div className='flex gap-[100px] pb-[70px]'>
                <div className='mt-10'>
                    <img data-aos-duration="1000" data-aos="flip-left" className=' shadow-custom object-contain rounded-md w-[450px]' src={result?.photo2} alt="img" />
                </div>
                <ul className='w-[600px] '>
                    <li className='border-b-2 pb-3 pl-5'>
                        <h2 className='font-bold text-3xl text-blue-800'>Characteristics</h2>
                    </li>
                    {result?.feature?.map((item) =>
                        <li key={item.features} className='border-b-2 py-3 pl-5'>
                            <h2 className='font-semibold text-blue-900 text-lg '>-{item?.features}</h2>
                        </li>
                    )}
                </ul>
            </div>
            <div className='pb-[50px]'>
                <div className='flex items-center gap-2 py-2'>
                    <img src={sticker} className='w-5' alt="icon" />
                    <p className='font-semibold text-lg text-blue-900'>Project Link to download the "Server" section: </p>
                    <a className='hover:border-blue-800 font-medium text-lg flex gap-1 hover:text-blue-900 border-gray-600 border-b-2' href={result?.server}>
                        Server
                        <img src={git} alt="icon" />
                    </a>
                </div>
                <div className='flex items-center gap-2 py-2'>
                    <img src={sticker} className='w-5' alt="icon" />
                    <p className='font-semibold text-lg text-blue-900'>Project Link to download the "Client" section: </p>
                    <a className='font-medium text-lg flex gap-1 hover:text-blue-900 border-gray-600 hover:border-blue-800 border-b-2' href={result?.git}>
                        Client
                        <img src={git} alt="icon" />
                    </a>

                </div>
            </div>
            <div className=''>
                <div className='flex items-center mb-5 ml-5'>
                    <h2 className='text-3xl font-bold text-blue-800 '>A guide to running the program</h2>
                    <img className='w-10 mt-1' src={handbook} alt="img" />
                </div>
                <ul>
                    {result?.istructions.map((item) =>
                        <li key={item?.instruction} className='flex items-start gap-6 p-3 border-b-2 w-[800px]'>
                            <img className='w-11 pt-1' src={finger} alt="icon" />
                            <h2 className='font-semibold text-lg text-blue-900'>{item?.instruction}</h2>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
