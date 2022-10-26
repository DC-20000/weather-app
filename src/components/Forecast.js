import React from 'react'
import { iconUrl } from '../services/Weather'

function Forecast({title,items}) {
  return (
    <div>
        <div>
          <div className='text-white text-lg mx-1 mt-6 uppercase'>{title}</div>
          <hr className='text-bold'></hr>
        </div>

        <div className='flex text-light text-white text-sm justify-around my-6'>
              {items.map((item) => (
        <div className="flex flex-col items-center justify-center p-4 border">
          <p className="font-light text-sm">{item.title}</p>
          <img
            src={iconUrl(item.icon)}
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
        </div>
      ))} 
      </div>
      </div>
  )
}

export default Forecast


