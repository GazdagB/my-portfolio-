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
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/logo-icon.svg"

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false); 
    
  return (
    <div className='flex flex-col items-center justify-between py-15 h-full fixed w-[100px] bg-off-white border-r-2'>
      <Link to={"/"}>
        <img
          src={Logo}
          alt="Logo"
          className="w-[50px] hover:scale-110 hover:rotate-10 transition-all ease-in-out duration-300 cursor-pointer"
        />
      </Link>

      {/* Page Menu */}
      <div className="text-3xl flex flex-col gap-4">
        <Link to={"/"}>
          <AiOutlineHome
            data-tooltip-id="tooltip-home"
            data-tooltip-content="Home"
            className="focus:outline-none focus-visible:ring-0 cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"/about"}>
          <BiUser
            data-tooltip-id="tooltip-user"
            data-tooltip-content="About"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"/work"}>
          <TbBriefcase2
            data-tooltip-id="tooltip-work"
            data-tooltip-content="Work"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"/contact"}>
          <LuContactRound
            data-tooltip-id="tooltip-contact"
            data-tooltip-content="Contact"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"/blog"}>
          <IoNewspaperOutline
            data-tooltip-id="tooltip-blog"
            data-tooltip-content="Blog"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-secondary hover:scale-115 transition-all ease-in-out"
          />
        </Link>
      </div>

      {/* Social Menu */}
      <div className="text-3xl flex flex-col gap-4">
        <Link to={"https://github.com/GazdagB"} target='_blank'>
          <FaGithub
            data-tooltip-id="tooltip-github"
            data-tooltip-content="GitHub"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"https://www.youtube.com/@gazdagbalazs"} target='_blank'>
          <ImYoutube
            data-tooltip-id="tooltip-youtube"
            data-tooltip-content="YouTube"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"https://x.com/gazdag99"} target='_blank'>
          <FaSquareXTwitter
            data-tooltip-id="tooltip-twitter"
            data-tooltip-content="Twitter"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
          />
        </Link>

        <Link to={"https://www.instagram.com/gazdag99/?next=%2F"} target='_blank'>
          <FaInstagramSquare
            data-tooltip-id="tooltip-instagram"
            data-tooltip-content="Instagram"
            className="focus:outline-none focus-visible:ring-0  cursor-pointer hover:text-primary hover:scale-115 transition-all ease-in-out"
          />
        </Link>
      </div>

      {/* Dark Mode */}
      <AiFillMoon
        data-tooltip-id="tooltip-darkmode"
        data-tooltip-content="Toggle Dark Mode"
        className="focus:outline-none focus-visible:ring-0  text-3xl cursor-pointer text-[#EDBD39] hover:rotate-[20deg] transition-all ease-in hover:scale-125"
      />

      {/* Tooltips */}
     
      <Tooltip hidden={isOpen} place='right' id="tooltip-home" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-user" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-work" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-contact" />
      <Tooltip hidden={isOpen}  place='right' id="tooltip-blog" />
      <Tooltip  hidden={isOpen} place='right' id="tooltip-github" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-youtube" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-twitter" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-instagram" />
      <Tooltip hidden={isOpen} place='right' id="tooltip-darkmode" />
    

      
    </div>
  )
}

export default Navbar