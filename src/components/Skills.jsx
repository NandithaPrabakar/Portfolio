import React from 'react'
import HTML from '../assets/asset_html.PNG';
import CSS from '../assets/asset_css.PNG';
import Git from '../assets/git.jpg';
import ReactImg from '../assets/asset_react.PNG';
import Node from '../assets/asset_nodejs.PNG';
import Java from '../assets/asset_java.PNG';
import MySql from '../assets/asset_mysql.PNG';
import SpringBoot from '../assets/spring-boot.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={Java} alt="Java icon"/>
                    <p className='my-1'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={SpringBoot} alt="SpringBoot icon"/>
                    <p className='my-1'>SPRING BOOT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={MySql} alt="MySql icon"/>
                    <p className='my-1'>MYSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-1'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={Node} alt="Node icon"/>
                    <p className='my-1'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-1'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-1'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale:110 duration-500'>
                    <img className='w-20 py-6 mx-auto' src={Git} alt="git icon"/>
                    <p className='my-1'>GIT</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills;