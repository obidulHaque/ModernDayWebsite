import React, { useState, useEffect } from 'react'

function Eyes() {
   
    let [rotated , setRotated]= useState(0);

    useEffect (()=>{
     window.addEventListener('mousemove',(e)=>{
       let MouseX=e.clientX;
       let MouseY=e.clientY;
       let DeltaX=MouseX-window.innerWidth/2;
       let DeltaY=MouseY-window.innerHeight/2;
       var Angel= Math.atan2(DeltaY,DeltaX) * (180/Math.PI);
       setRotated(Angel -180);
     })
   });
    
 
    return (
   <div data-scroll data-scroll-speed=".7" className='overflow-hidden ' >
     <div className='relative w-screen h-[50vh] bg-current bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] lg:h-screen lg:bg-cover'>
       <div className='flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-3 pt-[15vw] sm:justify-center sm:items-center sm:h-[80vh]'>
         <div  className='w-[17vw] h-[17vw] bg-yellow-100 rounded-full flex justify-center items-center'>
           <div className='relative w-[10vw] h-[10vw] bg-black rounded-full flex justify-center items-center'>
              <div style={{transform:`translate(-50%,-50%) rotate(${rotated}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2vw] '>
                 <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
              </div>
           </div>
         </div>
         <div className='w-[17vw] h-[17vw] bg-yellow-100 rounded-full flex justify-center items-center  '>
           <div className='relative w-[10vw] h-[10vw] bg-black rounded-full flex justify-center items-center'>
             <div style={{transform:`translate(-50%,-50%) rotate(${rotated}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2vw] '>
                 <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
             </div>
           </div>
         </div>
       </div>
      </div>
   </div>  
  )
}

export default Eyes