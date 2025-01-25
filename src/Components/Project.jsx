import React from 'react'
import Navbar from './Navbar'
import Projects from './Projects_Components/Projects'


const Project = () => {
  return (
    <div>

      <div className='sm:ml-[250px]
        md:ml-[320px]
        mt-20
        lg:ml-[480px]
        xl:ml-[570px]
        2xl:ml-[720px]'>
            <h1 className='text-4xl text-white font-semibold '>Projects</h1>
      </div>
      <Projects/>
        

      
    </div>
  )
}

export default Project