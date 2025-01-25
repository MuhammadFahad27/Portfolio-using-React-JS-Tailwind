import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';



const SideNav = () => {

  const [close,setclose] = useState(false)
  return (
    <div className=''>

        <div className={`w-[65%] h-[100%]  top-0 left-0 bg-[#1c1c1c] 
        z-[1000] fixed text-white mt-0  duration-150 
          ${close && "hidden"}
          `}>

          <div className='ml-[340px] mt-6'>
              <FontAwesomeIcon icon={faXmark} className={'text-white cursor-pointer '}
              onClick={()=>{
                setclose(!close) ;
              }}/>
          </div>

          <div className='mt-20'>
            
            <Link to={"/"}> <li href="" className='bg-zinc-700 mb-2 p-2 rounded-lg w-[350px] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>Home</li></Link>
            <Link to={"about"}> <li href="" className='bg-zinc-700 mb-2 p-2 rounded-lg w-[350px] ml-3 cursor-pointer
            hover:bg-zinc-400 hover:text-black'>About</li></Link>
            <Link to={"education"}> <li href="" className='bg-zinc-700 mb-2 p-2 rounded-lg w-[350px] ml-3 cursor-pointer
            hover:bg-zinc-400 hover:text-black'>Education</li></Link>
            <Link to={"projects"}><li href="" className='bg-zinc-700 mb-2 p-2 rounded-lg w-[350px] ml-3 cursor-pointer
            hover:bg-zinc-400 hover:text-black'>Projects</li></Link>
           <Link to={"contact"}> <li href="" className='bg-zinc-700 mb-2 p-2 rounded-lg w-[350px] ml-3 cursor-pointer
            hover:bg-zinc-400 hover:text-black'>Contact</li></Link>
            
          </div>


        </div>

    </div>
  )
}

export default SideNav


