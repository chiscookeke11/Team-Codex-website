import React from 'react'
import swirl from "../assets/swirl.svg"
import facebookIcon from  "../assets/facebook-icon.svg"
import instagramIcon from  "../assets/instagram(2).svg"
import xIcon from "../assets/X.svg"
import blur1 from "../assets/blur1.svg"
import blur2 from "../assets/blur2.svg"

const Footer = () => {
  return (
    <div className='footer w-full bg-[#24A556] text-[#FFFFFF] relative px-5 py-5 min-h-[60vh] flex items-center lg:items-end justify-center overflow-hidden ' >
  

        
        
     <div className='w-full flex flex-row items-center justify-evenly mb-[7%] mx-auto lg:mx-7 relative md:flex-nowrap flex-wrap gap-5 ' >
        <p className='basis-1/2 min-w-[330px] max-w-[543px] z-10 text-[17px] font-medium ' >Concept Softworks is a software company,
             we develop custom built software for clients - 
             covering everything from financial institutions & 
             medical companies all the way to tech companies and 
             government organizations.</p>





             <div className='flex basis-1/2 min-w-sm   flex-col items-start gap-4 z-10 ' >
                <ul className='w-full flex flex-row items-center gap-4 flex-wrap  text-base font-semibold ' >
                    <li className='mx-2  cursor-pointer ' >About</li>
                    <li  className='mx-2 cursor-pointer'>Project</li>
                    <li className='mx-2 cursor-pointer'>Service</li>
                    <li className='mx-2 cursor-pointer'>Client</li>
                    <li className='mx-2 cursor-pointer'>Team</li>
                    <li className='mx-2 cursor-pointer'>Blog</li>
                    <li className='mx-2 cursor-pointer'>Contact</li>
                </ul>


               
               <div className='w-full flex flex-row items-center  ' >
                <a href="#" className='mx-3  lg:ml-15 cursor-pointer' > <img src={facebookIcon} alt="facebook" /> </a>
                <a href="#" className='mx-3  cursor-pointer'> <img src={instagramIcon} alt="" /> </a>
                <a href="#" className='mx-3 cursor-pointer'>  <img src={xIcon} alt="" /> </a>
               </div>
             </div>
             

             <img src={blur1}  alt="blur"  className='absolute  top-[50%] left-[30%] transform translate-x-[-50%] translate-y-[-50%]  ' />
             <img src={blur2}  alt="blur"  className='absolute  top-[50%] left-[60%] transform translate-x-[-50%] translate-y-[-50%]  ' />

     </div>





        <img src={swirl} alt="swirl-img" className='absolute top-[15%] left-0  '  />
        <div className='bg-[#60CE70] h-20 w-20 rounded-full absolute bottom-[2%] right-[13%] ' ></div>
    </div>
  )
}

export default Footer