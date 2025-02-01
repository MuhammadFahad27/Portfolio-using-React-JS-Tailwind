import quiz from "../../Images/quiz.png";
import apis from "../../Images/api.png";
import form from "../../Images/form.png";
import { useState,useEffect } from "react";



const Projects = () => {

  
    //   const [project, setproject] = useState("")
      const [project2, setproject2] = useState("")

  
        useEffect(() => {
            
            setproject2("scale-in")
        }, []);

        useEffect(() => {
      
          setproject2("slide-in-left")
        }, []);
          
  return (
    <>
      
      <div className={`lg:flex 
    md:ml-[95px]
    lg:ml-[10px]
    xl:ml-[130px]
    2xl:ml-[250px] 
    
    ${project2}`}>
       
        <div className="bg-zinc-800 w-[280px] rounded-xl 
        sm:ml-[170px] sm:mt-6 
        ">
            <img src={quiz} alt="" className="w-[500px]" />
            <h1 className='text-white'>Quiz App using - JS</h1>
            <div className='text-md mt-2 text-sm '>
                 <p className='text-gray-400'>The App build by using Js using the core</p>
                 <p className='text-gray-400'>Fundamental Topics of Java Script Scpcially</p>
                 <p className='text-gray-400'>Those who starts learning Js and also a </p>
                 <p className='text-gray-400'>beginners so they should try to make it  </p>
                 <p className='text-gray-400'>to grape the fundamental core concepts of </p>
                 <p className='text-gray-400'>Java script like Arrays , Objects , loops , </p>
            </div>
            <div className="">

                <div className='mt-4 mb-3 text-sm '>
                    
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2'>React</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2  '>Tailwind CSS</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Node.js</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Express.js </button>
                 
                </div>
                
                <div className="text-sm">
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4'>JWT</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Passport</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Redux Toolkit</button>
                </div>
               
            </div>
        </div>
        <div className="bg-zinc-800 w-[280px] rounded-xl 
        sm:ml-[170px] sm:mt-6 ">
            <img src={apis} alt="" className="w-[500px]" />
            <h1 className='text-white'>Apis Project - JS</h1>
            <div className='text-md mt-2 text-sm '>
                 <p className='text-gray-400'>The App build by using Js using the core</p>
                 <p className='text-gray-400'>Fundamental Topics of Java Script Scpcially</p>
                 <p className='text-gray-400'>Those who starts learning Js and also a </p>
                 <p className='text-gray-400'>beginners so they should try to make it  </p>
                 <p className='text-gray-400'>to grape the fundamental core concepts of </p>
                 <p className='text-gray-400'>Java script like Apis fetching , Objects , loops  </p>
            </div>
            <div className="">

                <div className='mt-4 mb-3 text-sm '>
                    
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2'>React</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2  '>Tailwind CSS</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Node.js</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Express.js </button>
                 
                </div>
                
                <div className="text-sm">
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4'>JWT</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Passport</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Redux Toolkit</button>
                </div>
               
            </div>
        </div>
    </div>
    <div className={`bg-zinc-800 w-[280px] rounded-xl 
        sm:ml-[170px] sm:mt-6
         md:ml-[260px]
         lg:ml-[400px]
         xl:ml-[530px]
         2xl:ml-[640px] ${project2}`}>
            <img src={form} alt="" className="w-[500px]" />
            <h1 className='text-white'>Apis Project - JS</h1>
            <div className='text-md mt-2 text-sm '>
                 <p className='text-gray-400'>The App build by using Js using the core</p>
                 <p className='text-gray-400'>Fundamental Topics of Java Script Scpcially</p>
                 <p className='text-gray-400'>Those who starts learning Js and also a </p>
                 <p className='text-gray-400'>beginners so they should try to make it  </p>
                 <p className='text-gray-400'>to grape the fundamental core concepts of </p>
                 <p className='text-gray-400'>Java script like Apis fetching , Objects , loops  </p>
            </div>
            <div className="">

                <div className='mt-4 mb-3 text-sm '>
                    
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2'>React</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2  '>Tailwind CSS</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Node.js</button>
                 <button className='text-white bg-purple-500 rounded-md px-1 mr-2 '>Express.js </button>
                 
                </div>
                
                <div className="text-sm">
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4'>JWT</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Passport</button>
                    <button className='text-white bg-purple-500 rounded-md px-1 mr-2 mb-4 '>Redux Toolkit</button>
                </div>
               
            </div>
        </div>
      
    </>
  )
}

export default Projects