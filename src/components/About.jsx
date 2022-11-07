import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl font-bold inline border-b-4 border-gray-600'>About</p>
                    <div></div>
                </div>
            </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-5xl font-bold'>
                  <p>Hi I'm Daniel, nice to meet you.</p>
                </div>
                <div className='text-2xl'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corporis 
                  maiores officiis dolorum quas omnis non harum pariatur et aliquam sunt repellendus 
                  nulla quae modi, ullam blanditiis cupiditate rerum nihil.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About