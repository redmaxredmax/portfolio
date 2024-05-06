import React from 'react'
import { CssIcon } from "/public/icons/css-icon"
import { Git } from "/public/icons/git"
import { HtmlIcon } from "/public/icons/html-icon"
import { ReactIcon } from "/public/icons/react-icon"
import { JsIcon } from "/public/icons/js-icon"
import { SassIcon } from "/public/icons/sass-icon"
import { TailwindIcon } from "/public/icons/tailwind-icon"
import { VercelIcon } from "/public/icons/vercel-icon"
import { VsCode } from "/public/icons/vsCode"
import { Projects } from '../../components/projects'
import { projectsData } from '../../data'
import { Link } from 'react-router-dom'
import typescript from "/public/icons/typescript.svg"

export const Home = () => {
    return (
        <div className='container pb-[150px]'>
            <section className='projects'>
                <div className='pt-[70px]'>
                    <div className='text-center'>
                        <h2 className='text-primary font-bold text-4xl mb-2'>
                            Project
                        </h2>
                        <p className='text-text_link text-2xl'>
                            Projects I have built
                        </p>
                    </div>
                    <ul className='flex gap-10 justify-center mt-10'>
                        {projectsData.map((item) =>
                            <div key={item.id}>
                                <Projects {...item} />
                            </div>
                        )}
                    </ul>
                </div>
            </section>
            <section className='technologies'>
                <div className='text-center pt-[50px]'>
                    <h2 className='text-[#42446E] font-bold text-3xl'>My Tech Stack</h2>
                    <p className='text-text_link text-xl'>Technologies I’ve been working with recently</p>
                    <ul className='grid grid-cols-5 justify-center  gap-5 pt-[50px]'>
                        <li data-aos-duration="1000" data-aos="fade-left" className='ml-[80px] flex flex-col items-start w-[130px]'>
                            <VsCode />
                            <h3 className='text-base font-medium  mt-2'>Vs Studio Code</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-left" className='ml-[80px] flex flex-col w-[120px]'>
                            <HtmlIcon />
                            <h3 className='text-base font-medium  mt-2'>HTML</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-right" className='ml-[80px] flex flex-col w-[120px]'>
                            <CssIcon />
                            <h3 className='text-base font-medium  mt-2'>CSS</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-right" className='ml-[80px] flex flex-col w-[120px]'>
                            <JsIcon />
                            <h3 className='text-base font-medium  mt-2'>JavaScript</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-left" className='ml-[80px] flex flex-col w-[120px]'>
                            <SassIcon />
                            <h3 className='text-base font-medium  mt-2'>SASS</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-right" className='ml-[80px] flex flex-col w-[120px]'>
                            <TailwindIcon />
                            <h3 className='text-base font-medium  mt-2'>Tailwind CSS</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-right" className='ml-[80px] flex flex-col w-[120px]'>
                            <ReactIcon />
                            <h3 className='text-base font-medium  mt-2'>React</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-left" className='ml-[80px] flex flex-col w-[120px]'>
                            <Git />
                            <h3 className='text-base font-medium  mt-2'>GitHub</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-left" className='ml-[80px] flex flex-col w-[120px]'>
                            <VercelIcon />
                            <h3 className='text-base font-medium  mt-2'>Vercel</h3>
                        </li>
                        <li data-aos-duration="1000" data-aos="fade-right" className='ml-[80px] flex flex-col w-[120px]'>
                            <img src={typescript} alt="" />
                            <h3 className='text-base font-medium  mt-2'>Typescript</h3>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
