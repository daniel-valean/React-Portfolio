import React from 'react'
import wingman from '../assets/projects/wingman.png'
import bootcampfitness from '../assets/projects/bootcampfitness.png'
import onlydevs from '../assets/projects/onlydevs.png'
import cityhouse from '../assets/projects/cityhouse.png'
import azexotic from '../assets/projects/azexotic.png'
import gfc from '../assets/projects/gfc.png'

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-black bg-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline text-white'>Work</p>
            </div>

{/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

{/* project item */}
                <div style={{backgroundImage: `url(${onlydevs})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://the-only-devs.herokuapp.com/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/daniel-valean/OnlyDevs" target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${wingman})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        HTML/CSS w/ API Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://daniel-valean.github.io/Wingman/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/daniel-valean/Wingman" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* project item */}
<div style={{backgroundImage: `url(${bootcampfitness})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Nodejs/Expressjs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://blooming-forest-36438.herokuapp.com/login" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/daniel-valean/bootcamp-fitness" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${cityhouse})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://cityhousetn.com/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/daniel-valean/city-house-tn" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* project item */}
<div style={{backgroundImage: `url(${gfc})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        SaaS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="gfcaz.com" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${azexotic})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Wordpress Application</span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.azexotictransport.com/" target='_blank' rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work