import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div  className='font-outfit hero w-full h-full min-h-[81vh] flex item-stretch justify-left relative '>
      <Navbar/>
       <div className='overlay h-auto w-[50%] min-w-[340px] max-w-[853px] rounded-tr-[50px] '  > </div>  
       <div className='text absolute top-[50%] left-[7%]  translate-y-[-50%] text-white  '> 
        <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl   ' > Innovating today <span className='text-[#24A556] ' >  {"{ }"}</span> {" "} <br/>
        for a smarter tomorrow</h1>
        </div> 
    </div>
  
  )
}

export default Hero