import React from 'react'
import flowXimg from "../assets/FlowXimg.svg"
import metamuse from "../assets/metamuseImg.svg"
import bingo from "../assets/bingoImg.svg"
import { FaArrowRight } from 'react-icons/fa'
import scribble1 from "../assets/scribble1.svg"
import scribble2 from "../assets/scribble2.svg"
import scribble3 from "../assets/scribble3.svg"


const Projects = () => {


  const projectDetails = [
    {
      name: "Metamuse",
      description: "Unleashing creativity, empowering artists—Metamuse.",
      image: metamuse,
      scribbleImg: scribble1
    },
    {
      name: "FlowX",
      description: "FlowX: Seamless liquidity, limitless possibilities.",
      image: flowXimg,
      scribbleImg: scribble2
    },
    {
      name: "Bingo",
      description: "FlowX: Seamless liquidity, limitless possibilities.",
      image: bingo,
      scribbleImg: scribble3
    },
  ]







  return (
    <div className='w-full mx-auto max-w-[1335px] flex flex-col items-start justify-center gap-3 min-h-[639px] py-10 px-6 my-[2%] ' >
      <h1 className='text-[#24A556] font-semibold text-3xl lg:text-[58px] mb-5' >Project</h1>
      <div className='flex flex-col lg:flex-row gap-8 items-center justify-center w-full ' >
        {
          projectDetails.map((project, index) => (
            <div key={index} className='  min-w-[300px] min-h-[330px] w-[350px] lg:w-[399px] h-[539px] overflow-hidden cursor-pointer flex flex-col items-center justify-between bg-white rounded-[9px] p-0 group  transition duration-300 ease-in-out ' >
              <div className='w-full h-[65%] flex items-center justify-center ' >
                <img src={project.image} alt="project-img" className='w-full h-full object-cover ' />
              </div>
              <div className='z-10 relative overflow-hidden h-full w-full py-5 px-5 group-hover:bg-[#3F3F3F] transition duration-300 ease-in-out ' >
                <p className='z-[9999]   text-[#3F3F3F] text-2xl font-medium mb-4 max-w-[275px]  group-hover:text-white transition duration-300 ease-in-out' >{project.description} </p>

                <span className='bg-[#3F3F3F] rounded-full h-12 w-12 flex justify-center items-center group-hover:bg-[#24A556] group-hover:scale-[1.1] transform  transition duration-300 ease-in-out  ' >
                  <FaArrowRight className='text-[#ffffff] ' />

                </span>

                <div>
                <img src={project.scribbleImg}
                alt="scribble" className='absolute top-[-50%] right-[5%] z-[-1]  ' />
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Projects