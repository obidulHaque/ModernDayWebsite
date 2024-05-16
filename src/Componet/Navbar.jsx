import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function Navbar({setBlack}) {
  
  const[isOpen,setOpen]=useState(false);
  const toggole=()=>{
    setOpen(!isOpen);
  } 
  const[dark,setDark]=useState(false);
  const Dark=()=>{
    setDark(!dark);
    setBlack(!dark);
  }
  return (
    <div className=' bg-zinc-900 text-white'>
        <div className='Navbar w-full h-[66px] px-5 flex  items-center justify-between dark:bg-white dark:text-black'>
         <div className=' text-4xl pl-4 '>
             <h1>JOY</h1>
         </div>
         <div className="hidden md:flex gap-6 font-['Neue_Montreal'] font-medium">
            {["Servics","Our work","About us","Insights","Contact us",].map((items,index)=>(
                <a className={`text ${index===4 && "ml-32"} `} key={index}>{items}</a>
            ))}
            <button onClick={Dark} className='border-white border-2 rounded-lg px-4 dark:border-black'>{dark?"Light":"Dark"} </button>
         </div>
         <div className='md:hidden'>
           <button onClick={toggole}>{isOpen ?<IoIosClose /> :<CiMenuFries />} </button>
         </div>
         {isOpen && (
           <div className=' py-10'>
              {["Servics","Our work","About us","Insights","Contact us",].map((items,index)=>(
                <a className={`flex ${index===0 && "mt-24"} `} >{items}</a>
              ))}
              <button onClick={Dark} className='border-white border-2 rounded-lg px-4 dark:border-black'>{dark?"Light":"Dark"} </button>
           </div>
         )}
        </div>
    </div>
  )
}

export default Navbar