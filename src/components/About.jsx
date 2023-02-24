import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-white text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#816142]'>About</p>
                    <div></div>
                </div>
            </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold pt-14'>
                  <p>Hi I'm Daniel, nice to meet you.</p>
                </div>
                <div className='text-1xl'>
                  <p>Aspiring Full-Stack Developer skilled in assessing an organization’s needs and creating a remarkable web presence.  Committed to applying coding best practices in scripting languages and multimedia tools.  Adept at prioritizing tasks and working on several projects simultaneously. Experienced in troubleshooting and recommending solutions to mitigate risk. Consistently delivering exceptional work products. Efficiently communicating and collaborating with a creative team and stakeholders. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About