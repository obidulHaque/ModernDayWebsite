import React from 'react'

function Cards() {
  return (
    <div className='w-full h-[210vw] bg-zinc-900 dark:bg-white block items-center px-16 mb-4 gap-6 group lg:flex lg:h-screen lg:mb-0'>
       <div className='w-full h-[70vw] bg-[#004D43] rounded-lg relative  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 lg:w-1/2 lg:h-[30vw]'>
         <p className='text-[#CDEA68] text-[4vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>JOY</p>
         <button className='text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-3xl px-3 absolute top-[85%] left-10 text-[1vw] '> &copy;2019-2022</button>
       </div>
       <div className='w-full h-[30vw] block items-center pt-4 gap-6 lg:flex lg:h-1/2 lg:pt-0'>
         <div className='w-full h-[70vw] mb-4 bg-[#004D43] rounded-lg text-white relative group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 lg:w-1/2 lg:h-[30vw] lg:mb-0'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <button className='absolute top-[85%] left-10 border-zinc-400 border-[1px] rounded-3xl px-3 text-[1.1vw] '>RATING 5.0 ON CLUTCH</button>
         </div>
         <div className='w-full h-[70vw] bg-[#004D43] rounded-lg relative text-white group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 lg:w-1/2 lg:h-[30vw]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <img className='rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
            <button className='absolute top-[82%] left-10 border-zinc-400 border-[1px] rounded-3xl px-3 leading-tight tracking-tight text-[1vw] '>BUSINESS BOTCAMP <p>ALUMNI</p></button>
         </div>
       </div>
    </div>
  )
}

export default Cards