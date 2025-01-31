import React from 'react'
import gridImg1 from  "../assets/grid-image-1.svg"
import gridImg2 from  "../assets/grid-image-2.svg"
import gridImg3 from  "../assets/grid-image-3.svg"
import abstractShape from  "../assets/abstract-shape.svg"
import abstractCircle from  "../assets/abstract-circle.svg"
import abstractSemiCircle from "../assets/abstract-semicircle.svg"
import abstractSemiCircle2 from "../assets/abstract-semicircle2.svg"

const AboutUs = () => {
  return (
    <div className='bg-white relative font-outfit about-us w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-2 justify-center px-4 py-28   ' >



       <div className='basis-1/2 max-w-[650px] min-w-[320px] max-h-[500px] flex items-center justify-center relative '>
       <div class="grid grid-cols-2 gap-2 items-center w-full h-full px-4 py-10  ">
        <div className="max-w-80  max-h-80 row-span-2 object-contain rounded-lg   "> <img src={gridImg1} alt="Event 1"  className='w-full h-full  rounded-lg'   /></div>
        <div className="max-w-72 max-h-70 object-contain rounded-lg  " ><img src={gridImg2} alt="Event 2" className='w-full h-full  rounded-lg' /></div>
        <div className=" max-w-full max-h-40 object-contain rounded-lg  "><img src={gridImg3}  alt="Event 3"   className='w-full h-full  rounded-lg'   /></div> 
            </div>
            <img src={abstractCircle} alt="abstract-circle" className='absolute left-[-5%] bottom-10 z-[-1] h-28 w-28 ' />
            </div>





       <div className='basis-1/2 max-w-[650px] min-w-[320px] px-3 h-auto flex flex-col justify-end items-start text-left z-10 relative  ' >
        <h1 className='text-[#24A556] font-semibold text-3xl lg:text-[58px] mb-3  ' >About US</h1>
        <p className='text-[#3F3F3F] font-medium text-xl  max-w-[330px] md:max-w-[559px] ' >At CodeX-Lab, we transform bold ideas 
            into impactful solutions through cutting-edge
             technology. From empowering artists and revolutionizing
              cross-border transactions to reimagining gamified experiences,
               we build tools that inspire, connect, and drive change. 
               Our mission is to shape the future with innovative, 
               user-focused solutions that empower people and
                transform industries.</p>
                <img src={abstractShape} alt="abstract-shape" className='absolute hidden lg:block right-[15%] top-7 z-[-1] max-h-52 w-48 ' />
       </div>


       
    

       <img src={abstractSemiCircle} alt="shape" className='absolute top-[45%] right-[5%] lg:left-[50%] lg:top-[15%] transform lg:translate-x-[-50%] ' />
       <img src={abstractSemiCircle2} alt="shape" className='absolute top-[15%] left-[10%] lg:left-[20%] lg:top-[18%] transform translate-x-[-50%] ' />
    </div>
  )
}

export default AboutUs