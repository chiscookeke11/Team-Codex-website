import React from 'react'
import grayBg from '../assets/gray-bg.svg'
import curlyShape from '../assets/curlt.svg'

const WhatWeDo = () => {
  return (
    <div className='relative w-full mx-auto max-w-[1320px] h-[451px] bg-[#3F3F3F] rounded-[9px]  ' >

        <div>
            
        </div>




        
        <img src={grayBg} alt="bg" className='absolute top-0 bottom-0 left-[17%] h-full object-cover ' />
        <img src={curlyShape} alt="bg" className='absolute top-5 left-0 lg:w-[189px] w-16 md:w-20  object-cover ' />

        </div>
  )
}

export default WhatWeDo