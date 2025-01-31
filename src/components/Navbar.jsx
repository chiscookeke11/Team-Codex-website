import React, { useEffect, useRef, useState } from 'react'
import searchIcon from '../assets/search-icon.svg';
import { BiMenu } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';



const Navbar = () => {

    const [showNavLinks, setShowNavLinks] = useState(false)
    const navRef = useRef(null);




    const navLinks = [
        {
            name: "About",
            url: "#"
        },
        {
            name: "Project",
            url: "#"
        },
        {
            name: "Service",
            url: "#"
        },
        {
            name: "Client",
            url: "#"
        },
        {
            name: "Team",
            url: "#"
        },
        {
            name: "Contact",
            url: "#"
        },
    ]

    const showMenu = () => {
        setShowNavLinks((prev) => !prev)
    }
    const closeMenu =() => {
        setShowNavLinks(false)
    }
    const handleClickOutside =  (event) => {
        if (navRef.current && !navRef.current.contains(event.target)){
            setShowNavLinks(false)
        }
    }

    useEffect(()=> {
        if (showNavLinks) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        else{
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [showNavLinks])



    return (
        <nav ref={navRef} className='fixed z-[9999] py-4 md:py-2 w-[95%] max-w-[1320px] min-h-[60px] h-auto md:max-h-[90px] bg-white rounded-[9px]  flex items-center justify-center top-[5%] left-[50%] transform translate-x-[-50%] ' >



            <button onClick={showMenu} className={`absolute block md:hidden cursor-pointer   left-[4%] transform  text-[#3F3F3F] ${showNavLinks ? "top-[5%] " : "top-[50%] translate-y-[-50%] "} `}>
                {showNavLinks ? <FiX size={35} /> : <BiMenu size={35} />}
            </button>



            <ul className={` md:flex md:flex-row flex-col items-center justify-center gap-5 md:gap-10  ${showNavLinks ? "flex" : "hidden"}  `} >
                {navLinks.map((navLink, index) => (
                    <li onClick={closeMenu} key={index} className=' text-[#3F3F3F]  font-normal text-base lg:text-[15px] cursor-pointer hover:text-[#60CE70] transition duration-300 ease-in-out  ' > {navLink.name} </li>
                ))}
            </ul>




            <img src={searchIcon} alt="search-icon" className={`absolute cursor-pointer  md:top-[50%] right-[4%] transform md:translate-y-[-50%] text-[#3F3F3F] ${showNavLinks ? "top-[5%]" : "top-[50%] translate-y-[-50%] "} `} />
        </nav>
    )
}

export default Navbar