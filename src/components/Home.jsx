import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nanditha Prabakar.</h1>
        <h2 className='text-3xl sm:text-6xl py-2 font-bold text-[#8892b0]'>I'm a full stack developer.</h2>
        <p className='text-[#8892b0] py-3 max-w-[700px]'>Software Engineer with 2 years of experience in Java, Spring Boot, and SQL, skilled in building scalable backend systems. Currently expanding expertise in React to enhance full-stack development capabilities.
        </p>
      </div>

    </div>
  )
}

export default Home;