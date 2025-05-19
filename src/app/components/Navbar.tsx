import React from 'react'
//Page Link Icons
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TbBriefcase2 } from "react-icons/tb";
import { LuContactRound } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";

//Social Link Icons
import { FaGithub } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

//Dark Mood Icons
import { AiFillMoon } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-between py-15  h-full fixed w-[100px] bg-off-white border-r-2'>
        <img className='w-[50px] hover:scale-110 hover:rotate-10 transition-all ease-in-out duration-300 cursor-pointer' src="/gb_logo.svg" alt="" />
        {/* Page Menu */}
        <div className='text-3xl flex flex-col gap-4'>
            <AiOutlineHome className='cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out' />
            <BiUser className='cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out ' />
            <TbBriefcase2 className='cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out' />
            <LuContactRound className='cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out' />
            <IoNewspaperOutline className='cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out' />

        </div>

        {/* Social Menu */}
        <div className='text-3xl flex flex-col gap-4'>
            <FaGithub className='cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out' />
            <ImYoutube className='cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out' />
            <FaSquareXTwitter className='cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out' />
            <FaInstagramSquare className='cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out' />
        </div>

        {/* Dark Mode Toggle */}
        <AiFillMoon className='text-3xl cursor-pointer text-[#EDBD39] hover:rotate-[20deg] transition-all ease-in hover:scale-125' />

    </div>
  )
}

export default Navbar