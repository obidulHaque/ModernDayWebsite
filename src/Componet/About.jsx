import React from 'react'

function About() {
  return (
    <div className='w-full h-[50vh] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl lg:h-screen'>
        <div className='text-black text-[4vw] leading-none tracking-tighter py-6 px-6 pt-20 font-serif'>
            <p>JOY is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>
        </div>
        <div className='flex w-full border-t-[1px] border-zinc-900 py-5 px-9 justify-between'>
            <div>            
              <h1 className='text-[3vw]'>Our approach:</h1>
              
              <button className=' bg-zinc-900 rounded-full flex gap-3 justify-center items-center text-white px-2 py-1 hover:bg-white hover:text-black text-[1vw] sm:px-5 sm:py-3'><p className='peer '>READ MORE </p>
                  <div className='peer-hover:bg-black w-3 h-3 bg-zinc-50 rounded-full'></div>
              </button>
              
            </div>
            <div className='w-[30vh] h-[100vh]  sm:h-[50vh] sm:w-1/3 '>
                <img src="Untitled image.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About