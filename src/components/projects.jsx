import React from 'react'
import git2 from "/public/icons/git2.svg"
import chain from "/public/icons/chain.svg"
import { Link } from 'react-router-dom'

export const Projects = ({ id, name, photo, text, git, live, tech }) => {
    return (
        <div data-aos="flip-left" data-aos-duration="1000" className='w-[500px] rounded-[30px] flex flex-col  justify-between h-[592px] shadow-custom pb-[20px]'>
            <div>
                <Link to={`/${id}`}>
                    <img className='h-[290px] rounded-t-[30px]' src={photo} alt="imgs" />
                </Link>
            </div>
            <div className='p-5'>
                <div className='mb-3'>
                    <Link to={`/${id}`} className='font-semibold hover:text-blue-600 text-2xl text-primary'>{name}</Link>
                </div>
                <p className='text-text_link text-base mb-3'>{text}</p>
                <p className='text-[#42446E] mb-7'><span className='font-medium'>Tech stack:</span> {tech}</p>
                <Link className='bg-blue-600 rounded-lg py-3 text-white font-semibold text-lg px-[177px]  hover:bg-blue-500 ' to={`/${id}`} >Show more...</Link>
            </div>
        </div>
    )
}
