import Forcast from "./Forecast";
import gazdag from "../assets/gazdag.svg"
import { GoArrowUpRight } from "react-icons/go";
import hero from "../assets/hero-image.svg"
import arrow from "../assets/arrow.png"
import mash from "../assets/mash.svg"


const Hero = () => {
  return (
     <div  style={{background: `url(${mash})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", backgroundSize: "contain"}} className="items-center justify-items-center min-h-screen font-sans bg-cover ">
      {/* Top Bar */}
        <div className="flex items-center gap-10 justify-self-end me-20 pt-10">
          <div className="bg-[#ECECEC] flex  px-5 py-2 font-bold rounded-full cursor-pointer">
              💌 gazdagbal@gmail.com
          </div>
          <Forcast></Forcast>
        </div>
        <div className="flex items-center justify-between w-full max-w-[1200px] gap-10 min-h-[80vh]  ">
          {/* Left */}
          <div className="relative">
            <div className="text-[30px] flex flex-col mb-5">
              <p className="mb-[-15px] text-primary font-[500] font-t-sans">Hi!</p>
              <p className="font-[400] font-t-sans">MY NAME IS:</p>
            </div>
            <img className="mb-15" src={gazdag} alt="" />
            <div className="mb-15 flex text-[25px] leading-6 items-center gap-4 font-d-sans">
              <div className="w-[6px] bg-primary h-14 "></div>
              I'm a Fullstack Developer <br /> & Graphic Designer
            </div>

            <div className="text-[18px] flex gap-10 items-center">
              <div className="flex items-center relative justify-start gap-3" >
                <button className="cursor-pointer font-mono bg-charcoal px-5 py-2 text-white rounded-sm">Hire Me</button>
                <div className="cursor-pointer bg-secondary text-[29px] rounded-sm p-2"><GoArrowUpRight /></div>
              </div>
              <div className="cursor-pointer hover:underline font-mono">Download Resume</div>
            </div>
            <img className="absolute top-45 right-[-100px]" src={arrow} alt="" />
          </div>

          {/* Hero Right */}
          <div className="relative">
              <p className="text-[#898989] ms-[-40px] text-lg">&lt;img src="./hero-image.webp"&gt;</p>
              <img width={400} src={hero} alt="" />
              <div className="w-25 h-25 rounded-3xl flex items-center justify-center bg-charcoal absolute bottom-0 text-white text-[60px] cursor-pointer">
                <GoArrowUpRight />
              </div>
              <p className="text-[#898989] text-lg absolute right-0 bottom-[-40px]">// Image of Gazdag Balázs</p>
          </div>
          
        </div>
    </div>
  )
}

export default Hero