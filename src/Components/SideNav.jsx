import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { useState } from "react";

const SideNav = () => {

  const [close, setclose] = useState(false);

  return (
    <div className=''>
      <div className={`w-full h-full top-0 left-0 bg-[#1c1c1c] 
        z-[1000] fixed text-white mt-0 duration-150 
        ${close && "hidden"}
        xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%]`}>

        <div className='ml-[200px] mt-6'>
            <FontAwesomeIcon 
              icon={faXmark} 
              className='text-white cursor-pointer text-3xl xs:text-2xl smp:text-xl sml:text-lg ml-4 xs:ml-1 xsm:ml-1 smp:ml-1 sml:ml-1 mr-[60px] xs:mr-[40px] xsm:mr-[60px] smp:mr-[60px] sml:mr-[60px]'
              onClick={() => setclose(!close)} 
            />
        </div>

        <div className='mt-20 lg:mr-28'>
          <Link to={"/"}> 
            <li className='bg-zinc-700 mb-2 p-2 rounded-lg xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>
              Home
            </li>
          </Link>
          <Link to={"about"}> 
            <li className='bg-zinc-700 mb-2 p-2 rounded-lg xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>
              About
            </li>
          </Link>
          <Link to={"education"}> 
            <li className='bg-zinc-700 mb-2 p-2 rounded-lg xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>
              Education
            </li>
          </Link>
          <Link to={"projects"}>
            <li className='bg-zinc-700 mb-2 p-2 rounded-lg xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>
              Projects
            </li>
          </Link>
          <Link to={"contact"}> 
            <li className='bg-zinc-700 mb-2 p-2 rounded-lg xs:w-[90%] xsm:w-[80%] smp:w-[70%] sml:w-[65%] ml-3 cursor-pointer hover:bg-zinc-400 hover:text-black'>
              Contact
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
