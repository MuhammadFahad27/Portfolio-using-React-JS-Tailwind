import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLanguage ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {darkmode} from "../Features/Darkmode/Dark.jsx"

const About = () => {

  let dark = useSelector((state)=> state.dark.value) ;


    const [animate, setanimate] = useState("")

      useEffect(() => {
          
          setanimate("scale-in")
        }, []);

  return (
    <div className={`bg-[#1c1c1c] ${dark ? "bg-gray-50" :"bg-[#1C1C1C]"}
    sm:ml-0
    md:ml-2 
    lg:w-full lg:ml-10 
    xl:ml-0
    2xl:ml-28
  `}>
        <div className='  bg-[#1c1c1c] h-auto '>About

   
        <div className='lg:flex '>
         <div className={`w-[350px] h-[400px] ml-20 rounded-xl mt-28 
          sm:ml-40
          md:ml-[200px]
          xl:mt-20 
          xl:ml-[100px] ${animate}`} id='about_pic'>

        </div>
          <div className={` bg-[#1c1c1c] border border-zinc-800 z-[1000px] ml-20 grow-0 mt-14  xl:mt-20
          xl:ml-36 lg:p-4
          md:ml-0
          sm:ml-0

            ${animate}`}>
            
              <div className='grow-0'>
                 <h1 className='text-gray-100 text-4xl font-semibold ml-14 mt-4'>Muhammad Fahad </h1>
                <h2 className='text-purple-400 text-2xl font-semibold ml-14'>Frontend Engeenier</h2>
              </div>

                <div className='sm:flex justify-between
                sm:justify-start shrink-0 mt-6 ml-20 grow-0 mb-2
                sm:ml-8
                md:ml-16 md:justify-start'>
                      <div className='border rounded-xl  shrink-0 mr-10 intro sm:w-[100px]'>
                          <h1 className='text-purple-400 font-semibold text-xl ml-2 mt-1
                          sm:text-lg'>
                            Location <FontAwesomeIcon icon={faLocationDot} /></h1>
                          <h2 className='text-gray-100 ml-2'>Karachi ,</h2>
                          <h2 className='text-gray-100 ml-2'>Pakistan</h2>
                      </div>
                      <div  className='border rounded-xl  flex-shrink-0 mr-10  intro sm:w-[100px]'>
                        <h1 className='text-purple-400 font-semibold text-xl ml-2  mb-2 mt-1'>
                        Age <FontAwesomeIcon icon={faUser} /></h1>
                        <h2 className='text-gray-100 ml-2'>20</h2>
                      </div>
                      <div  className='border rounded-xl  flex-shrink-0 mr-10 intro sm:w-[100px]'>
                         <h1 className='text-purple-400 font-semibold text-xl ml-2 mt-1
                         sm:text-lg'>
                          Language  <FontAwesomeIcon icon={faLanguage} />
                         </h1>
                         <h2 className='text-gray-100 ml-2 sm:text-sm'>English , Urdu</h2>
                         
                     </div>

                    
                  
                </div>

                <div className='text-white ml-10 mt-2
                sm:ml-6 sm:mt-4  lg:p-4 text-wrap
                md:ml-10 
                xl:ml-0
                overflow-auto
                whitespace-normal
                lg:text-wrap 
                '>

                  <p>I am an undergraduate student pursuing a degree in Computer Science with a  </p>
                  <p>Passion for software development and modern web technologies. . Currently I</p>
                  <p>am working on projects using the MERN stack MongoDB, Express.js, React & </p>
                  <p>and Node.js, enhancing my skills in full-stack development. I am focused on </p>
                  <p>learning how to build dynamic, responsive, and efficient web application. In </p>
                  <p>addition to my academic background, I actively explore new technologies and</p>
                  <p>and frameworks to stay ahead in the fast-evolving tech industry.</p>
                 
                   
                  
                   
                </div>
      </div>

     
</div>
</div>
    </div>
  )
}

export default About