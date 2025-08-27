import './App.css'
import {Loading} from './components/Loading'
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import {Home} from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Project } from './components/sections/Project';
import { Education } from './components/sections/Education';
import "./index.css"
import { Card } from './components/ui/card';
import { Certificate } from './components/sections/Certificate';
import Contact from './components/sections/Contact';


function App() {
  const [isLoaded,setIsLoaded] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  return(
  <>
    {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}{""}
      <div 
      className={`min-h-screen transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-neutral-950 text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <Education/>
        <Project/>
        <Certificate/>
        <Contact/>
        
      </div>
  </>
  ) ;
}

export default App
