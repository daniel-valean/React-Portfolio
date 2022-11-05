import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Daniel Valean</h1>
        
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover: border-gray-600'>View Work<HiArrowNarrowRight /></button>
            </div>

        </div>


    </div>
  )
}

export default Home