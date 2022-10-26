import React from 'react'
import { formatToLocalTime } from '../services/Weather'

function TimeAndLocationn({weather : {dt,timezone,name,country }}) {
  return (
    <div>
      <div className="flex justify-center text-white font-extralight text-xl">{formatToLocalTime(dt, timezone)}</div>

      <div className="flex justify-center text-white font-bold my-5 text-4xl">
            <h1>{`${name},${country}`}</h1>
      </div>
    </div>
  )
}

export default TimeAndLocationn
