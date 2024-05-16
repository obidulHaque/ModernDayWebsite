import React, { useState } from 'react'
import LandingPage from './Componet/LandingPage'
import TextAnimation from './Componet/TextAnimation'
import About from './Componet/About'
import Eyes from './Componet/Eyes'
import Navbar from './Componet/Navbar'
import FeatucadProject from './Componet/FeatucadProject'
import Cards from './Componet/Cards'
import Footer from './Componet/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  const [black,setBlack]=useState();

  return (
    <>
      <div className={`${black && "dark"} w-full min-h-screen bg-${black ? "white" :"zinc-900"}`}>
       <Navbar setBlack={setBlack}/>
       <LandingPage/>
       <TextAnimation/>
       <About/>
       <Eyes/>
       <FeatucadProject/>
       <Cards/>
       <Footer/>
      </div>
    </>

  )
}

export default App