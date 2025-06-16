import ProgressBar from "./ProgressBar";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import GazdagSLogo from "../../assets/logo-gb.svg"

const Construction = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
        <p className="text-center font-t-sans text-2xl  lg-text-5xl uppercase text-charcoal mb-5">
         Sorry! Website <br /> Under Construction!
        </p>
        <ProgressBar precent={20} />
        <img className="w-100 mb-15 px-10" src={GazdagSLogo} alt="Gazdag Studio Logo" />
        <div className="text-3xl items-center justify-center flex gap-3">
          <Link to={"/"}>
            <FaYoutube />
          </Link>
          <Link to={""}>
            <FaInstagramSquare />
          </Link>
          <Link to={""}>
            <FaLinkedin />
          </Link>
          <Link to={""}>
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Construction;
