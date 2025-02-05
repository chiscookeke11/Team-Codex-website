import React from 'react'
import arrow from  "../assets/button-arrow.svg"
import rings from "../assets/rings.svg"
import topTextImg from  "../assets/top-text-img.svg"
import bottomTextImg from  "../assets/bottom-text-img.svg"

const ContactForm = () => {
  return (
    <div className='contact-form w-full max-w-[1600px]  px-[9%] py-[6%] relative ' >
      <form  className='flex flex-col gap-2 items-start ' >
        <h1 className='text-[#24A556] font-semibold text-4xl md:text-6xl mb-1  ' >Contact us!</h1>
        <p className='text-[#3F3F3F] text-base md:text-xl font-normal mb-[1%] ' >What can we do for you?</p>
        


 
        <div className='w-full items-start flex lg:items-center justify-between flex-col lg:flex-row mt-5 gap-6 mb-[2%] ' >

          <div className=' flex flex-col gap-10  w-full max-w-[775px] '  >


          <div className='flex flex-row items-center justify-start flex-wrap   w-full gap-2 ' >
          <button type='button' className='border border-[#D2D2D2] text-base px-5 py-4 rounded-[64px] mx-2 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  ' >Product Design</button>
          <button type='button' className='border border-[#D2D2D2] text-base px-5 py-4 rounded-[64px] mx-2 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  ' >Website Development</button>
          <button type='button' className='border border-[#D2D2D2] text-base px-5 py-4 rounded-[64px] mx-2 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  '>Mobile Apps developmet</button>
        </div>


            <input type="text" placeholder='Name' className='w-full outline-none border-b border-b-[#A09F9F] pl-0 pr-3 py-2  text-[#3F3F3F]  text-xl font-normal  '  />

            <input type="email" name="" id="" placeholder='Email' className='w-full outline-none border-b border-b-[#A09F9F] pl-0 pr-3 py-2  text-[#3F3F3F]  text-xl font-normal  '   />

            <textarea placeholder='Project details'  className='w-full outline-none border-b border-b-[#A09F9F] pl-0 pr-3 py-1  text-[#3F3F3F]  text-xl font-normal  ' />
            <button type="button" className="bg-[#24A556] max-w-[127px] border-b-[2.5px] border-[#3F3F3F] border-r-[2.5px]  rounded-[280px] py-3 px-7 cursor-pointer group transition-all duration-300 ease-in-out " > 
          <img src={arrow} alt="" className="transform group-hover:rotate-[15deg] transition-all duration-300 ease-in-out" />
           </button>
          </div>

          <div>
            <div>
              <h2 className="text-[#898989] texx-lg font-medium " >Phone</h2>
              <h1 className="text-[#3F3F3F] text-lg font-semibold " >+1 (833) 520-3712</h1>
            </div>
            <div>
              <h2 className="text-[#898989] texx-lg font-medium ">Email</h2>
              <h1  className="text-[#3F3F3F] text-lg font-semibold ">Hello@conceptsoftworks.com</h1>
            </div>

          </div>



        </div>
     
      </form>

      <img src={rings} alt='rings' className='absolute bottom-[2%] right-[4%] md:right-[30%] w-18 h-18 md:h-36 md:w-36 object-contain  ' />
      <div className='text-7xl font-normal hidden lg:flex absolute right-0 top-[10%]  flex-col gap-1 items-center justify-center  ' >
        <img src={topTextImg} alt="text" className='object-contain ' />
        <img src={bottomTextImg} alt="text" className='object-contain ' />
      </div>

    </div>
  )
}

export default ContactForm