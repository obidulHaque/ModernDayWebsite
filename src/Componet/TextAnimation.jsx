import { motion } from 'framer-motion'
import React from 'react'

function TextAnimation() {
   return (
      <div className='w-full pt-7 pb-5 bg-[#004D43] rounded-tl-md rounded-tr-md lg:rounded-tl-3xl lg:rounded-tr-3xl lg:pt20'>
         <div className='flex w-full border-t-2 border-b-2 border-white-400  overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:'linear',duration:5}} className='text-[20vw] pr-4 text-white font-["Founder_Grotesk_X-cond"] leading-none tracking-tighter'>WE ARE JOY LTD.</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:'linear',duration:5}} className='text-[20vw] pr-4  text-white font-["Founder_Grotesk_X-cond"] leading-none tracking-tighter'>WE ARE JOY LTD.</motion.h1>
         </div>
      </div>
  )
}

export default TextAnimation