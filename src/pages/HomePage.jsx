import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'

const HomePage = () => {
  return (
    <div >
        <Hero/>
        <div className='content w-full h-auto bg-red ' >
          <AboutUs/>
        </div>
    </div>
  )
}

export default HomePage