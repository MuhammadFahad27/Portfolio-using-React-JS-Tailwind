import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav";
import { Link } from "react-router";
import { useState } from "react";

export const Navbar = () => {
  const [side, setside] = useState(false);

  return (
    <>
      <div
        className="w-full bg-black h-[60px] fixed top-0 z-[1000] flex items-center justify-between px-4"
      >
       
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            className="cursor-pointer xs:visible sm:visible sml:visible lg:invisible"
            onClick={() => setside(!side)}
          />
          <img src={logo} alt="Logo" width={40} className="inline" />
        </div>
        {side && <SideNav />}

        
        <div className="hidden sm:hidden lg:flex gap-6 text-purple-400
        xl:mr-[240px] lg:mr-[160px]">
          <Link to="/"> <li className="hover:border-b-2">Home</li> </Link>
          <Link to="/about"> <li className="hover:border-b-2">About</li> </Link>
          <Link to="/education"> <li className="hover:border-b-2">Education</li> </Link>
          <Link to="/projects"> <li className="hover:border-b-2">Projects</li> </Link>
          <Link to="/contact"> <li className="hover:border-b-2">Contact</li> </Link>
        </div>

       
        <div className="mt-2">
          <FontAwesomeIcon icon={faLightbulb} color="white" className="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
