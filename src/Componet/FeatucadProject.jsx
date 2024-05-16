import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import FeatucadProjectCard2 from './FeatucadProjectCard2';

function FeatucadProject() {
 const cards=[useAnimation(),useAnimation()];
 const handleHover=(index)=>{
   cards[index].start({x:"0"})};
 const handleHoverEnd=(index)=>{
    cards[index].start({x:"110%"})}  
  return (
    <div className=' bg-zinc-900 text-white dark:bg-white dark:text-black'>
        <div className='w-full  text-[5vw] pt-12 px-8 border-b-[1px] border-zinc-400 '>
            <h1>Featured projects</h1>
        </div>
        <div className='block gap-6 w-full py-10 px-10 sm:flex'>
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='relative w-full overflow-hidden sm:w-1/2'>
              <motion.div initial={{x:"110%"}} animate={cards[0]} className='absolute top-1/2 right-0  translate-x-1/2 -translate-y-1/2 text-white text-[6vw]'><h1>FYDE</h1></motion.div>
              <div className='flex  items-center gap-3'>
                 <div className='w-[1vw] h-[1vw] rounded-full bg-white block'></div>
                 <span className=' font-thin'><p>FYDE</p></span>
              </div>
              <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
          </motion.div>
          <FeatucadProjectCard2/>
        </div>
    </div>
  )
}

export default FeatucadProject