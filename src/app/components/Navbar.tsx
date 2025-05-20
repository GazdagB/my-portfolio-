'use client'

import React from 'react'
import {
  AiOutlineHome,
  AiFillMoon
} from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { TbBriefcase2 } from 'react-icons/tb'
import { LuContactRound } from 'react-icons/lu'
import { IoNewspaperOutline } from 'react-icons/io5'
import { FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { ImYoutube } from 'react-icons/im'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-between py-15 h-full fixed w-[100px] bg-off-white border-r-2'>
      <img
        src="/gb_logo.svg"
        alt="Logo"
        className="w-[50px] hover:scale-110 hover:rotate-10 transition-all ease-in-out duration-300 cursor-pointer"
      />

      {/* Page Menu */}
      <div className="text-3xl flex flex-col gap-4">
        <AiOutlineHome
          data-tooltip-id="tooltip-home"
          data-tooltip-content="Home"
          className="cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
        />
        <BiUser
          data-tooltip-id="tooltip-user"
          data-tooltip-content="About"
          className="cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
        />
        <TbBriefcase2
          data-tooltip-id="tooltip-work"
          data-tooltip-content="Work"
          className="cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
        />
        <LuContactRound
          data-tooltip-id="tooltip-contact"
          data-tooltip-content="Contact"
          className="cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
        />
        <IoNewspaperOutline
          data-tooltip-id="tooltip-blog"
          data-tooltip-content="Blog"
          className="cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
        />
      </div>

      {/* Social Menu */}
      <div className="text-3xl flex flex-col gap-4">
        <FaGithub
          data-tooltip-id="tooltip-github"
          data-tooltip-content="GitHub"
          className="cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
        />
        <ImYoutube
          data-tooltip-id="tooltip-youtube"
          data-tooltip-content="YouTube"
          className="cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
        />
        <FaSquareXTwitter
          data-tooltip-id="tooltip-twitter"
          data-tooltip-content="Twitter"
          className="cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
        />
        <FaInstagramSquare
          data-tooltip-id="tooltip-instagram"
          data-tooltip-content="Instagram"
          className="cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
        />
      </div>

      {/* Dark Mode */}
      <AiFillMoon
        data-tooltip-id="tooltip-darkmode"
        data-tooltip-content="Toggle Dark Mode"
        className="text-3xl cursor-pointer text-[#EDBD39] hover:rotate-[20deg] transition-all ease-in hover:scale-125"
      />

      {/* Tooltips */}
      <Tooltip place='right' id="tooltip-home" />
      <Tooltip place='right' id="tooltip-user" />
      <Tooltip place='right' id="tooltip-work" />
      <Tooltip place='right' id="tooltip-contact" />
      <Tooltip  place='right' id="tooltip-blog" />
      <Tooltip place='right' id="tooltip-github" />
      <Tooltip place='right' id="tooltip-youtube" />
      <Tooltip place='right' id="tooltip-twitter" />
      <Tooltip place='right' id="tooltip-instagram" />
      <Tooltip place='right' id="tooltip-darkmode" />
    </div>
  )
}

export default Navbar
