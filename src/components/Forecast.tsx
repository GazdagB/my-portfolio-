import { HiSun } from "react-icons/hi2";
import Timer from "./Timer"

const Forcast = () => {
  return (
    <div className='flex gap-2 items-center'>
        <HiSun className='text-amber-400 text-lg'></HiSun>
        <p>32° Mannheim,</p>
        <Timer></Timer>
    </div>
  )
}

export default Forcast