import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl front-bold inline border-b-4 text-white border-gray-600'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - Dannyvalean@gmail.com</p>
                </div>
                <input className='text-white p-2' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            </form>
    </div>
  )
}

export default Contact 