import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full md:h-screen text-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/ca26b307-af82-456e-a7c5-e0f03882ff00' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - nandithap1107@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] my-3 p-2 text-black' type='text' placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] my-3 p-2 text-black' type='text' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] my-3 p-2 text-black' placeholder="Message" name="message"  rows="10"> </textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact;