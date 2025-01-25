import logo from "../Images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav";
import { Link } from "react-router";
import { useState } from "react";





export const Navbar = () => {

  const [side, setside] = useState(false)

    
  return (
   
    <>  

      <div className="w-full bg-black h-[60px] fixed top-0 
      sm:flex 
      justify-around
      z-[1000]
      ">

       

        <div className="mt-2">
        <FontAwesomeIcon icon={faBars} color="white " className="cursor-pointer sm:visible lg:invisible"
        onClick={()=>{
          setside(!side)
        }}/> 
          <img src={logo} alt="" width={40} className="inline"/>
        </div>
        {side && <SideNav/>}
        <div className=" sm:invisible lg:visible gap-6 lg:flex text-purple-400 mt-4">
            <Link to={"/"}>  <li className="  hover:border-b-2 ">Home</li></Link>
            <Link to={"/about"}> <li className="  hover:border-b-2 ">About</li></Link>
            <Link to={"/education"}> <li className="  hover:border-b-2 ">Education</li></Link>
            <Link to={"/projects"}><li className="  hover:border-b-2 ">Projects</li></Link>
            <Link to={"/contact"}><li className="  hover:border-b-2 ">Contact</li></Link>
           
      </div>

      <div className="relative mt-5">

        <FontAwesomeIcon icon={faLightbulb} color="white" className="absolute "/>
        {/* <FontAwesomeIcon icon={faBolt} color="white" className="absolute "/> */}
      </div>
      </div>
    
    </>
  )
}

export default Navbar