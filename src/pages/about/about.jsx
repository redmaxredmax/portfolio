import React from 'react'
import personal from "/public/imgs/personal.jpg"


export const About = () => {
    return (
        <div className='container pt-[70px] flex  gap-[150px] items-center'>
            <div>
                <img data-aos-duration="1000" data-aos="flip-left" className='border-2 border-black shadow-custom object-cover rounded-full  w-[400px] h-[400px]' src={personal} alt="img" />
            </div>
            <div>
                <div data-aos-duration="500" data-aos="fade-left" className='flex gap-2 '>
                    <span className='text-3xl font-medium pt-1 text-blue-900'>Name:</span>
                    <h2 className='text-4xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'> Zokirov Abdulboriy</h2>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className='flex gap-2 '>
                    <span className='text-2xl font-medium pt-1 text-blue-900'>Age: </span>
                    <h2 className='text-3xl font-medium text-blue-800 pb-2'>18 years old</h2>
                </div>
                <div data-aos-duration="1500" data-aos="fade-left" className='flex gap-2 '>
                    <span className='text-2xl font-medium pt-1 text-blue-900'>Profession: </span>
                    <h2 className='text-3xl font-medium text-blue-800 pb-2'>Frontend Developer</h2>
                </div>
                <div data-aos-duration="1800" data-aos="fade-left" className='flex gap-2 '>
                    <h2 className='text-2xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>Student of "Najot Ta'lim"</h2>
                </div>
            </div>
        </div>
    )
}
