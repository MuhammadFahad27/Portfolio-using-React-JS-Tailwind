import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

const Homepage = () => {
    const [animation, setanimation] = useState("");
    const [animation2, setanimation2] = useState("");
    
  
    useEffect(() => {
        setanimation2("scale-in");
    }, []);

    useEffect(() => {
        setanimation("slide-in-left");
    }, []);
    
    return (
        <div  className={`bg-zinc-900 h-auto mt-16  overflow-hidden shrink-0 grow-0 
         `}>
            <div className="mt-20 lg:flex justify-evenly shrink-0 grow-0 ml-[10px] items-center">
                <div className={`text-white text-6xl font-semibold
                    xs:text-4xl
                    xsm:text-4xl
                    sm:text-4xl text-center
                    lg:text-5xl
                    shrink-0 grow-0 
                   `}>
                    <h1 className={`${animation}`}>Hi There !</h1>
                    <h1 className={`${animation}`}>I'm a Computer &</h1>
                    <h1 className={`${animation}`}><span className="text-purple-500">Frontend</span> Engineer</h1>

                    <div className="mt-4">
                        <button className={`text-sm italic bg-red-600 rounded-xl px-10 py-2
                        hover:bg-transparent hover:border-2 mr-10
                        hover:-translate-y-1 duration-300
                        `}>Hire Me</button>
                        <button onClick={() => {
                            window.open("https://drive.google.com/file/d/1e4V6Uz7HH0XXybSytReDJzNU0YD5aDcI/view?usp=sharing")
                        }}
                        className={`text-sm italic rounded-xl px-4 py-2 border-2 
                        `}>Download Cv</button>
                    </div>
                </div>

                <div>
                    <div id="home_image" className={`rounded-full border-2 border-yellow-100 w-[250px] h-[250px] 
                    xs:w-[180px] xs:h-[180px] xsm:w-[210px] xsm:h-[210px] sm:w-[250px] sm:h-[250px]
                    sm:ml-[186px] sm:mt-10
                    md:ml-[240px]
                    lg:mt-[-20px]
                    shrink-0
                     ${animation2} 
                    xs:ml-[20%] xs:transform xs:-translate-x-[50%] xs:mt-[5%] 
                    xsm:ml-[20%] xsm:transform xsm:-translate-x-[50%] xsm:mt-[5%]
                    sml:ml-[20%] sml:transform sml:-translate-x-[50%] sml:mt-[5%]`}>
                    </div>
                </div>
            </div>

            <div className="ml-10">
                <ul className="flex flex-col space-y-4 xs:space-y-2">
                    <li className="text-blue-300 text-2xl"><a href="https://www.linkedin.com/in/muhammad-fahad-ashraf-20963a286"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className="text-2xl text-white"><a href="https://github.com/MuhammadFahad27"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                    <li className="text-red-400 text-2xl"><a href="mailto:muhammadfahadkamboh3@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li className="text-green-500 text-2xl"><a href="https://wa.me/923233323883"><FontAwesomeIcon icon={faWhatsappSquare} /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Homepage;
