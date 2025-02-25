import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap}  from "@fortawesome/free-solid-svg-icons";
import uni from '../Images/duet.jpeg'; // Example for .png file
import college from "../Images/college_image.jpeg"
import { useEffect,useState } from 'react';

const Education = () => {

  const [education, seteducation] = useState("")
  const [education2, seteducation2] = useState("")

  useEffect(() => {
      
    seteducation("scale-in")
  },[]);
  useEffect(() => {
      
    seteducation2("slide-in-left")
  },[]);


  return(
    <>
      <div className=''>
          <div className={`${education}`}>
              <h1 className='text-white mt-[80px] 
              text-center text-3xl
              xl:text-5xl 
             '>Education <FontAwesomeIcon icon={faGraduationCap}  color='gray'/></h1>
          </div>
          <div className={`${education2}`}>
            <div className='bg-zinc-800 
            rounded-2xl h-auto p-1 xsm:ml-7 w-max
            ml-8 mt-6 mb-8
            sm:ml-[140px]
            sm:mt-10
            md:ml-[200px]
            lg:flex
            lg:ml-[170px]
            xl:ml-[340px]
            2xl:ml-[520px]'>

              <img src={uni} alt="not found" className=' rounded-xl sm:ml-16
              mt-4 sm:w-[210px] sm:h-[170px] ml-8 mb-4  
              lg:ml-4
              lg:mt-1'></img>
              <div className='sm:mt-6 sm:p-2 lg:ml-5 lg:text-lg'>
                <h1 className='text-red-400 font-semibold'>Bachelors in Computer Science </h1>
                <h2 className='text-white'>Dawood University of Engeenring & Technology</h2>
                <h3 className='text-purple-400'>2023-present | 3.4 CGPA</h3>
                
              </div>

            </div>

            <div className='bg-zinc-800 w-max
            rounded-2xl h-auto p-2
            ml-10   xsm:ml-8
            sm:ml-[140px]
            sm:mt-10
            md:ml-[200px]
            lg:flex
            lg:ml-[170px]
            xl:ml-[340px]
            2xl:ml-[520px]
            lg:mt-4'>

              <img src={college} alt="not found" className=' rounded-xl sm:ml-16
              mt-4 sm:w-[210px] sm:h-[170px] w-[230px] ml-10 mb-5
              lg:ml-4
              lg:mt-1'></img>
              <div className='sm:mt-6 sm:p-2 lg:ml-5 lg:text-lg'>
                <h1 className='text-red-400 font-semibold'>Pre-Engeenring </h1>
                <h2 className='text-white'>Adamjee Government Science College , Karachi</h2>
                <h3 className='text-purple-400'>2021-2023 | A Grade</h3>
                
              </div>

            </div>

            
          </div>
      </div>
    </>
  )
}
export default Education

