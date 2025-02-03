import React from 'react'
import star from  "../assets/Star 16.svg"
import ellipse from "../assets/Ellipse 309.svg"
import arrow from "../assets/Arrow 2.svg"

const CustomStarIcon = () => {
  return (
    <div className='h-12 w-12 flex items-center justify-center  relative ' >
        <img src={star} alt="star" />
        <img src={ellipse} alt="ellipse" className='absolute top-[50%] left-[20%] transform translate-x-[-50%] translate-y-[-50%]   ' />
        <img src={arrow} alt="arrow" className='absolute top-[50%] left-[20%] transform translate-x-[-50%] translate-y-[-50%] ' />

    </div>
  )
}

export default CustomStarIcon