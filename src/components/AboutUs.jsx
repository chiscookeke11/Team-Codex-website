import React from 'react'
import gridImg1 from  "../assets/grid-image-1.svg"
import gridImg2 from  "../assets/grid-image-2.svg"
import gridImg3 from  "../assets/grid-image-3.svg"

const AboutUs = () => {
  return (
    <div className='about-us w-full flex flex-col lg:flex-row items-center lg:items-end gap-5 justify-center px-4 py-3.5   ' >



       <div className='basis-1/2 max-w-[650px] min-w-[320px] h-[500px] flex items-center justify-center '>
       <div class="grid grid-cols-2 gap-2 items-center w-full h-full  ">
                <img src={gridImg1} alt="Event 1" class="w-full h-90 row-span-2 object-cover rounded-lg  " />
                <img src={gridImg2} alt="Event 2" class="w-[90%] h-70 object-cover rounded-lg " />
                <img src={gridImg3} alt="Event 3" class=" w-[100%] h-40 object-cover rounded-lg mr-1.5 " />
            </div>
            </div>





       <div className='basis-1/2 max-w-[650px] min-w-[320px]' >
        <h1 className='text-[#24A556] font-semibold text-3xl lg:text-6xl  ' >About US</h1>
        <p className='text-[#3F3F3F] font-medium text-xl  max-w-[559px] ' >At CodeX-Lab, we transform bold ideas 
            into impactful solutions through cutting-edge
             technology. From empowering artists and revolutionizing
              cross-border transactions to reimagining gamified experiences,
               we build tools that inspire, connect, and drive change. 
               Our mission is to shape the future with innovative, 
               user-focused solutions that empower people and
                transform industries.</p>
       </div>

    </div>
  )
}

export default AboutUs