
import Navbar from "./Components/Navbar"
import { Routes,Route } from "react-router"
import About from "./Components/About.jsx"
import Education from "./Components/Education.jsx"
import Project from "./Components/Project.jsx"
import Contact from "./Components/Contact.jsx"
import Homepage from "./Components/Homepage.jsx"

const App = () => {
  return (
    <div className="bg-zinc-900   ">
      <Navbar/>
     
        <Routes>
           <Route path="/" element={<Homepage/>} />
           <Route path="/about" element={<About/> } />
           <Route path="/education" element={<Education/>} />
           <Route path="/projects" element={<Project/>} />  
           <Route path="/contact" element={<Contact/>} />  
          {/* <Route path="/techstack" element={<TechStack/>}/> */}
          
        </Routes>
    </div>
  )
}

export default App