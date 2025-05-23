import Forcast from "./components/Forecast";
import gazdag from "./assets/gazdag.svg"
import { GoArrowUpRight } from "react-icons/go";


function App() {
  return (
    <div className="items-center justify-items-center min-h-screen font-sans">
      {/* Top Bar */}
        <div className="flex items-center gap-10 justify-self-end me-20 pt-10">
          <div className="bg-[#ECECEC] flex  px-5 py-2 font-bold rounded-full cursor-pointer">
              💌 gazdagbal@gmail.com
          </div>
          <Forcast></Forcast>
        </div>
        <div>
          {/* Left */}
          <div>
            <div className="text-[30px] flex flex-col mb-5">
              <p className="mb-[-15px] text-primary font-[500] font-t-sans">Hi!</p>
              <p className="font-[400] font-t-sans">MY NAME IS:</p>
            </div>
            <img className="mb-10" src={gazdag} alt="" />
            <div className="mb-10 flex text-[25px] leading-6 items-center gap-4 font-d-sans">
              <div className="w-[6px] bg-primary h-14 "></div>
              I'm a Fullstack Developer <br /> & Graphic Designer
            </div>

            <div className="text-[18px] flex gap-10 items-center">
              <div className="flex items-center justify-start gap-3" >
                <button className="font-mono bg-charcoal px-5 py-2 text-white rounded-sm">Hire Me</button>
                <div className="bg-secondary text-[29px] rounded-sm p-2"><GoArrowUpRight /></div>
              </div>
              <div className="font-mono">Download Resume</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App
