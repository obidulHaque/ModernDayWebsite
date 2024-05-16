import { motion } from 'framer-motion';
import React from 'react'
import { IoMdArrowUp } from "react-icons/io";

function LandingPage() {
    return (
    <div className='w-screen h-[40vh] text-white  bg-zinc-900 lg:h-screen lg:w-screen dark:bg-white dark:text-black'>
        <div className="TextArea mt-20 ml-16 bg-red-400 px-3 py-4  mb-20 mr-10 ">
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((items,index)=>{
                return (
                    <div className='flex'>
                        {index===1 && (
                            <motion.div initial={{width:0}} animate={{width:"12vw"}} transition={{ease:[0, 0.55, 0.45, 1],duration:3,repeat:1}}  className='w-[12vw] h-[7vw] mx-3 my-1  bg-green-400'></motion.div>
                        )}
                        <h1  key={index} className={`${index===1 && "pt-2"} ${index===1 && "lg:pt-4"} text-[7vw] leading-[0.75] tracking-tighter font-['Founders_Grotesk_X-Cond'] text-white`}>{items} </h1>
                    </div>
                )
            })}
        </div>
        <hr />
        <div className=' flex justify-between px-6 pt-4 items-center  text-[1.5vw]'>
            {["For public and private companies","From the first pitch to IPO"].map((items,index)=>(
                <p>{items}</p>
            ))}
            <div className='flex gap-2 items-center'>
                <p className='peer h-fit border-slate-600 border-2 rounded-[20px] px-2 -pb-2 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white'>START THE PROJECT</p>
                <span className='peer-hover:bg-white peer-hover:text-black rotate-45 border-slate-600 border rounded-full p-2 hover:bg-white hover:text-black  dark:peer-hover:bg-black dark:peer-hover:text-white'> <IoMdArrowUp /> </span>
            </div>
        </div>
    </div>
  )
}

export default LandingPage