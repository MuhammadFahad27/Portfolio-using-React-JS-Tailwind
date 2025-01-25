
// import pic from "../Images/fahad.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState ,useEffect ,useDispatch} from "react";
import { useSelector } from "react-redux";
import {darkmode} from "../Features/Darkmode/Dark.jsx"
const Homepage = () => {

  

    const [animation, setanimation] = useState("")
    const [animation2, setanimation2] = useState("")
    let dark = useSelector((state)=> state.dark.value) ;
    console.log(dark)

    useEffect(() => {
         
      setanimation2("scale-in")
     },[]);
    

    useEffect(() => {
      
      setanimation("slide-in-left")
    }, []);
  return (
    <div key={dark} className={`bg-zinc-900 h-auto mt-16  top-0 overflow-hidden shrink-0 grow-0 
     ${dark && "bg-gray-100"}`}>
        <div className="mt-20 lg:flex justify-evenly shrink-0 grow-0 ml-[10px]">
            <div className={`text-white text-6xl font-semibold
              sm:text-4xl text-center
              lg:text-5xl
              shrink-0 grow-0 
              ${dark && "text-black"}`}>

                <h1 className={`${animation} `}>Hi There !</h1>
                <h1 className={`${animation}`}>I'm a Computer &</h1>
                <h1 className={`${animation}`}><span className="text-purple-500">Frontend</span> Engeenier</h1>

                <div className="mt-4"> 


                  <button className={`text-sm italic bg-red-600 rounded-xl px-10 py-2
                  hover:bg-transparent hover:border-2 mr-10
                  hover:-translate-y-1 duration-300
                  ${dark && "hover:border-black"}`}>Hire Me</button>
                  <button onClick={()=>{

                    window.open("https://drive.google.com/file/d/1e4V6Uz7HH0XXybSytReDJzNU0YD5aDcI/view?usp=sharing")
                  }}
                  className={`text-sm italic rounded-xl px-4 py-2 border-2 
                   ${dark && "hover:border-black"}`}>Download Cv</button>


                </div>
            </div>

                <div>
                  <div id="home_image" className={`rounded-full border-2 border-yellow-100 w-[250px] h-[250px] 
                    sm:w-[280px] sm:h-[280px]
                    sm:ml-[186px] sm:mt-10
                    md:ml-[240px]
                    lg:mt-[-20px]
                    shrink-0
                    ${dark && "border-black"} ${animation2}`}>
                  </div>

                </div>
            
            </div>

            <div className="ml-10">
                <ul className="">

                   <li className="text-blue-300 text-2xl"><a href="https://www.linkedin.com/in/muhammad-fahad-ashraf-20963a286"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li className="text-2xl text-white"><a href="https://github.com/MuhammadFahad27"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                  <li className="text-red-400 text-2xl"><a href="mailto:muhammadfahadkamboh3@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                 <li className="text-green-500 text-2xl"><a href="https://wa.me/923233323883"><FontAwesomeIcon icon={faWhatsappSquare} /></a></li>
                </ul>
            </div>
    </div>


  )
}

export default Homepage