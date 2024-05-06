import React from 'react'
import contact from "/public/imgs/contact.png"


export const Contact = () => {
    return (
        <div className='container py-[70px] flex  gap-[150px] items-center'>
            <div>
                <img data-aos-duration="1000" data-aos="flip-left" className='border-2 border-black shadow-custom object-cover rounded-full  w-[400px] h-[400px]' src={contact} alt="img" />
            </div>
            <div className='flex gap-5'>
                <div>
                    <p data-aos-duration="500" data-aos="fade-left" className='text-2xl font-semibold pt-1 mb-2 text-blue-900'>Number1:</p>
                    <p data-aos-duration="1000" data-aos="fade-left" className='text-2xl font-semibold mb-2 pt-1 text-blue-900'>Number2:</p>
                    <p data-aos-duration="1500" data-aos="fade-left"  className='text-2xl font-semibold mb-2 pt-1 text-blue-900'>Gmail:</p>
                    <p data-aos-duration="2000" data-aos="fade-left"  className='text-2xl font-semibold mb-2 pt-1 text-blue-900'>Telegram:</p>
                    <p data-aos-duration="2500" data-aos="fade-left"  className='text-2xl font-semibold pt-1 text-blue-900'>Instagram:</p>
                </div>
                <div>
                    <h2 data-aos-duration="500" data-aos="fade-left" className='text-3xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>+998-33-373-90-09;</h2>
                    <h2 data-aos-duration="1000" data-aos="fade-left"  className='text-3xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>+998-90-232-87-15;</h2>
                    <h2 data-aos-duration="1500" data-aos="fade-left"  className='text-3xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>redmax.formal@gmail.com</h2>
                    <h2 data-aos-duration="2000" data-aos="fade-left"  className='text-3xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>@zok1rov_016</h2>
                    <h2 data-aos-duration="2500" data-aos="fade-left"  className='text-3xl font-medium bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent pb-2'>@vokhidovich.a</h2>
                </div>
            </div>
        </div>
    )
}
