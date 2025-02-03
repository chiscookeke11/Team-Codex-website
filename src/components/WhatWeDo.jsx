import React from 'react'
import grayBg from '../assets/gray-bg.svg'
import curlyShape from '../assets/curlt.svg'
import CustomStarIcon from './customStarIcon'

const WhatWeDo = () => {
  
  return (
    <div className=' what-we-do-banner relative w-full mx-auto max-w-[1320px] h-[451px] bg-[#3F3F3F] rounded-[9px] pl-[10%] flex items-center justify-between  ' >

        <div className=' z-10 flex flex-col items-center gap-0.5 justify-center text-[#D7D7D7] font-semibold text-6xl ' >
          <span className='ml-[10px] ' >what we</span>
          <span className='ml-[-30%] ' >can do</span>
          <span className='ml-[-30%] '>for you</span>
        </div>



        <div className=' w-md'>
          <div></div>

          <div className='text-[#6D6D6D] font-normal text-3xl flex flex-col gap-3 cursor-pointer ' >
            <div className=' py-3 border-b border-[#636060] flex items-center justify-between pr-[13%] hover:text-white transition duration-300 ease-in-out group ' >   <h2>Product Design</h2> <CustomStarIcon className="invisible group-hover:visible" /> </div>
            <div className=' py-3 border-b border-[#636060] flex items-center justify-between pr-[13%] hover:text-white transition duration-300 ease-in-out group ' >   <h2>Ideation & Strategy</h2><CustomStarIcon className="invisible group-hover:visible"/> </div>
            <div className=' py-3 border-b border-[#636060] flex items-center justify-between pr-[13%] hover:text-white transition duration-300 ease-in-out group ' >   <h2>Web and Mobile</h2><CustomStarIcon className="invisible group-hover:visible"/> </div>
            <div className=' py-3 border-b border-[#636060] flex items-center justify-between pr-[13%] hover:text-white transition duration-300 ease-in-out group ' >   <h2>Ai and Blockchain integration</h2> <CustomStarIcon className="invisible group-hover:visible"/></div>
         
          </div>

        </div>
           




        
       
        <div className='h-full absolute w-fit  top-0 bottom-0 left-[17%]   ' > <img src={grayBg} alt="bg" className='h-full object-cover z-0  ' /> </div>
        <img src={curlyShape} alt="bg" className='absolute top-5 left-0 lg:w-[189px] w-16 md:w-20  object-cover ' />

        </div>
  )
}

export default WhatWeDo