import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Projects from '../components/Projects'
import WhatWeDo from '../components/WhatWeDo'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <div >
        <Hero/>
        <AboutUs/>
        <div className='content w-full h-auto bg-[#e8e8e8] flex flex-col items-center justify-center gap-28  py-5 ' >
          <Projects/>
          <WhatWeDo/>
          <ContactForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage