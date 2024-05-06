import Slider from 'react-slick'
import React, { Component } from "react";
import { CssIcon } from "/public/icons/css-icon"
import { Git } from "/public/icons/git"
import { HtmlIcon } from "/public/icons/html-icon"
import { ReactIcon } from "/public/icons/react-icon"
import { JsIcon } from "/public/icons/js-icon"
import { SassIcon } from "/public/icons/sass-icon"
import { TailwindIcon } from "/public/icons/tailwind-icon"
import { VercelIcon } from "/public/icons/vercel-icon"
import { VsCode } from "/public/icons/vsCode"
import Next from "/public/imgs/next.png"
import typescript from "/public/icons/typescript.svg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", right: "30px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", left: "30px", zIndex: 20 }}
            onClick={onClick}
        />
    );
}


const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToScroll: 2,
    slidesToShow: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

export const Banner = () => {
    return (
        <ul className='pt-[50px]'>
            <Slider  {...settings}>
                <li data-aos-duration="1000" data-aos="fade-left" className='flex flex-col  w-[130px] '>
                    <div className='ml-10'>
                        <VsCode />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>Vs Studio Code</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-left" className='flex flex-col w-[120px]'>
                    <div className='ml-10'>
                        <HtmlIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>HTML</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <CssIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>CSS</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <div className='ml-11'>
                        <JsIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>JavaScript</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-left" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <SassIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>SASS</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <TailwindIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>Tailwind CSS</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <ReactIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>React</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <VercelIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>Vercel</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-left" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <Git />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>GitHub</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-left" className='flex flex-col w-[120px]'>
                    <div className='ml-12'>
                        <SassIcon />
                    </div>
                    <h3 className='text-base font-medium  mt-2'>Vercel</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <img className='ml-10' src={typescript} alt="" />
                    <h3 className='text-base font-medium  mt-2'>Typescript</h3>
                </li>
                <li data-aos-duration="1000" data-aos="fade-right" className='flex flex-col w-[120px]'>
                    <img className='ml-10 w-[125px]' src={Next} alt="" />
                    <h3 className='text-base font-medium  mt-2'>Next</h3>
                </li>

            </Slider>
        </ul>)
}
