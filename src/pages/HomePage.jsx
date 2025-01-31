import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Projects from '../components/Projects'
import WhatWeDo from '../components/WhatWeDo'

const HomePage = () => {
  return (
    <div >
        <Hero/>
        <AboutUs/>
        <div className='content w-full h-auto bg-[#e8e8e8] flex flex-col items-center justify-center gap-28  ' >
          <Projects/>
          <WhatWeDo/>
        </div>
    </div>
  )
}

export default HomePage