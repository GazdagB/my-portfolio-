import {useState, useEffect} from "react"

const Timer = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [timeNow, setTimeNow] = useState<string | null> (null)

  useEffect(() => {
    setHasMounted(true)

    const updateTime = () => {
      const now = new Date()

      const formatter = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin"
      })
      setTimeNow(formatter.format(now))
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (!hasMounted || !timeNow) return null

  return (
    <div className='w-[90px] font-bold'>
      {timeNow}
    </div>
  )
}

export default Timer