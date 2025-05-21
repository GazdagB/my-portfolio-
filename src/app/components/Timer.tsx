'use client'

import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [timeNow, setTimeNow] = useState<null | {
    seconds: string,
    minutes: string,
    hours: string
  }>(null)

  const padNumber = (num: number): string => {
    return num < 10 ? "0" + num : num.toString()
  }

  useEffect(() => {
    setHasMounted(true)

    const updateTime = () => {
      const now = new Date()
      setTimeNow({
        seconds: padNumber(now.getSeconds()),
        minutes: padNumber(now.getMinutes()),
        hours: padNumber(now.getHours()),
      })
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (!hasMounted || !timeNow) return null

  return (
    <div className='w-[90px] font-bold'>
      {`${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}`}
    </div>
  )
}

export default Timer
