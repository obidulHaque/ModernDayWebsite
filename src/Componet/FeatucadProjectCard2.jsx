import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function FeatucadProjectCard2() {
 
    const cards=[useAnimation(),useAnimation()];
    const handleHover=(index)=>{
      cards[index].start({x:"0"})};
    const handleHoverEnd=(index)=>{
      cards[index].start({x:"-110%"})}

    return (
      <>
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='relative w-full pt-3 overflow-hidden sm:w-1/2 sm:pt-0'>
          <motion.h1 initial={{x:"-110%"}} animate={cards[0]} className='absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 text-white text-[6vw]'>VISE</motion.h1>
          <div className='flex  items-center gap-3'>
             <div className='w-[1vw] h-[1vw] rounded-full bg-white block'></div>
             <span className=' font-thin'><p>VISE</p></span>
          </div>
          <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
        </motion.div>
      </>
  )
}

export default FeatucadProjectCard2