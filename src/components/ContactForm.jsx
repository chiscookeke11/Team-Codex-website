import React from 'react'
import arrow from  "../assets/button-arrow.svg"

const ContactForm = () => {
  return (
    <div className='contact-form w-full px-5 py-5 ' >
      <form  className='flex flex-col gap-2 items-start ' >
        <h1 className='text-[#24A556] font-semibold text-6xl  ' >Contact us!</h1>
        <p className='text-[#3F3F3F] text-xl font-normal ' >What can we do for you?</p>
        <div className='flex flex-row items-center justify-start w-full gap-2.5 ' >
          <button type='button' className='border border-[#D2D2D2] text-lg px-7 py-4 rounded-[64px] mx-3.5 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  ' >Product Design</button>
          <button type='button' className='border border-[#D2D2D2] text-lg px-7 py-4 rounded-[64px] mx-3.5 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  ' >Website Development</button>
          <button type='button' className='border border-[#D2D2D2] text-lg px-7 py-4 rounded-[64px] mx-3.5 text-[#3F3F3F] cursor-pointer hover:bg-[#3F3F3F] hover:text-white transition duration-300 ease-in-out  '>Mobile Apps developmet</button>
        </div>



        <div className='w-full flex items-end justify-between flex-row mt-8 ' >
          <div  >
            <input type="text" placeholder='name'  />

            <input type="email" name="" id="" placeholder='email' />

            <textarea/>

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
        <button type="button" className="bg-[#24A556] border-b-[2.5px] border-[#3F3F3F] border-r-[2.5px]  rounded-[280px] py-3 px-7 cursor-pointer group transition-all duration-300 ease-in-out " > 
          <img src={arrow} alt="" className="transform group-hover:rotate-[15deg] transition-all duration-300 ease-in-out" />
           </button>
      </form>

    </div>
  )
}

export default ContactForm