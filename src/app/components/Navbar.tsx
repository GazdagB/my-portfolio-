import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TbBriefcase2 } from "react-icons/tb";
import { LuContactRound } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className='flex flex-col items-center  h-full fixed w-[100px] bg-off-white border-r-2'>
        <img className='w-[50px]' src="/gb_logo.svg" alt="" />
        {/* Page Menu */}
        <div className='text-3xl'>
            <AiOutlineHome />
            <BiUser />
            <TbBriefcase2 />
            <LuContactRound />
            <IoNewspaperOutline />

        </div>

        {/* Social Menu */}
        <div></div>

        {/* Dark Mode Toggle */}

    </div>
  )
}

export default Navbar