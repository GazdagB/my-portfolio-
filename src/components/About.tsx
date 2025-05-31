import aboutImg from "../assets/about-img.png"
import { GoArrowUpRight } from "react-icons/go";

// TODO: Have to add images later and text
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1400px] w-full flex pt-20 items-end text-4xl justify-end">
        <p className="font-t-sans font-bold">ABOUT ME</p>
      </div>
      <div className="flex items-center justify-center gap-15 py-30">
        <img className="w-[800px]" src={aboutImg} alt="" />
        <div className="w-0.5 h-96 bg-charcoal rounded-full me-20"></div>
        <div>
          <p className="text-primary font-bold text-7xl mb-7">Hello!</p>
          <p className="uppercase text-xl font-light text-gray-500">My Name is:</p>
          <p className="text-4xl font-bold mb-3">Gazdag Balázs</p>
          <p className="text-lg w-[480px] font-d-sans mb-15">
            I'm a <span className="font-bold">Fullstack developer & Graphic Designer</span> I'm a passionate
            creator and I love helping businesses or brands to express
            themselves. Wether online or through branding.
          </p>
          <div className="flex gap-4 font-mono">
            <button className="text-white bg-charcoal py-2 px-4 rounded-md">More about me</button>
            <div className="cursor-pointer bg-secondary text-[29px] rounded-sm p-2"><GoArrowUpRight /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
