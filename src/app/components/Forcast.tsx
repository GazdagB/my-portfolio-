import React from 'react'
import { HiSun } from "react-icons/hi2";

const Forcast = () => {
  return (
    <div className='flex gap-2 items-center'>
        <HiSun className='text-amber-400 text-lg'></HiSun>
        <p>32° Mannheim,</p>
        <p className='font-bold'>19:23:21</p>
    </div>
  )
}

export default Forcast