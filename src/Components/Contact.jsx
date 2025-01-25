  import React from 'react'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faMessage}  from "@fortawesome/free-solid-svg-icons";
  import { useForm } from "react-hook-form";
  import { useState,useEffect ,useRef} from 'react';

  const Contact = () => {

    const [contact, setcontact] = useState("")
    const [msg,setmsg] = useState("Message me")
    const [inp1 , setinp1 ] = useState("") ;
    const [inp2 , setinp2 ] = useState("") ;
    const [inp3 , setinp3 ] = useState("") ;
    const [inp4 , setinp4 ] = useState("") ;
   

  

    const { register, 
      handleSubmit, 
      watch, 
      formState: { errors , isSubmitting  } } = useForm();
      console.log("initial value : ",isSubmitting)
    
      
      function onsubmit(data){

        console.log(data)
        
       

        
      }

      useEffect(() => {

        if (isSubmitting) {


          console.log("inside if : ",isSubmitting)
          setmsg("Sending......")
        }
        else {

          setmsg("Message Me")
          console.log("inside else : ",isSubmitting)
        

        }
        
      }, [isSubmitting])
      
    
      

  

    
    return (
      <div className='overflow-hidden'>

        <div className=' mt-[83px]'>

            <div className='sm:ml-[190px]
            md:ml-[270px]
            lg:ml-[390px]
            xl:ml-[490px]
            2xl:ml-[650px]'>
              <h1 className='text-white text-4xl'>Let's Connect ! <FontAwesomeIcon icon={faMessage} color='gray' /> </h1>
            </div>

            <div>

                <form onSubmit={handleSubmit(onsubmit)} className={` placeholder:text-white text-white
                outline-none border border-gray-400 ${contact}
                sm:w-[400px] p-4
                sm:ml-[115px]
                md:ml-[220px]
                lg:ml-[340px]
                xl:ml-[440px]
                2xl:ml-[580px]
                mt-8
                text-sm`}>
                  <div className='sm:ml-6 mt-4'>
                  <input type="text"   onChange={(e)=>{setinp1(e.target.value)}}
                  className='mb-4  w-[290px] rounded-md py-1 ' 
                  placeholder='Enter your Name'
                  {...register("name" ,
                    {
                      required:{
                        value:true,
                        message:"Enter Yours name"
                      }
                    }
                  )} />
                  {errors.name && <span className='text-red-600
                  text-md'>{errors.name.message}</span>}
                  <input type="text" onChange={(e)=>{setinp2(e.target.value)}}
                  className='mb-4  mt-1 w-[290px] rounded-md py-1'
                  placeholder='Yours Email'
                  {...register("email" ,
                    {
                      required:{
                        value:true,
                        message :"Email is required"
                      }
                    }
                  )} />
                  {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                  <input type="text"  onChange={(e)=>{setinp3(e.target.value)}}
                  className='mb-3 w-[290px] rounded-md py-1 mt-1'
                  placeholder='Subject for Email'
                  {...register("subject",
                      {
                        required:{
                          value:true,
                          message:"Subject for email is required"
                        }
                      }
                  )} />
                  {errors.subject && <span className='text-red-500 '>{errors.subject.message}</span>}
                  <textarea rows={3}   cols={40} onChange={(e)=>{setinp4(e.target.value)}}
                  className='rounded-md py-1 p-2 mt-1 '
                  placeholder='Enter a detail message'
                  {...register("detail",
                    {
                      required:{
                        value:true,
                        message:"describe what you want to discuss"
                      }
                    }
                  )} ></textarea>
                  {errors.detail && <span className='text-red-500'>{errors.detail.message}</span>}
                  <button type='submit' className='bg-pink-600
                  rounded-md block w-[290px] ml-3
                  mt-1 py-1 mb-2
                  hover:bg-pink-400 hover:text-black
                  '
                    disabled={isSubmitting} >{msg}</button>
                  
                  
                
                  
                  </div>
                  
                </form>

            </div>

        </div>
          
      </div>
    )
  }

  export default Contact