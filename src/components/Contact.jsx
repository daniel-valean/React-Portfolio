import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/df14e171-a498-41f8-8d20-96162deb1c43" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-5xl front-bold inline text-black'>Contact</p>
                    <p className='text-black py-4'>Submit the form below or shoot me an email - Dannyvalean@gmail.com</p>
                </div>
                <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-black border-2 border-black hover:border-black hover:bg-[#101010e6] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
    </div>
  )
}

export default Contact 