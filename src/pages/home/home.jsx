import React from 'react'
import { Projects } from '../../components/projects'
import { projectsData } from '../../data'
import { Banner } from '../../components/slider'

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

                    <Banner />
                </div>
            </section>
        </div>
    )
}
