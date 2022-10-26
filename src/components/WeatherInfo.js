import React from 'react'
import { UilTemperatureHalf,UilTear,UilWind,UilSun,UilSunset,UilAngleUp,UilAngleDown } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrl } from '../services/Weather'

function WeatherInfo({weather : {details,icon,temp,temp_max,temp_min,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
  return (
    <div>
       <div className='flex justify-center my-6'><p className='text-xl text-gray-200'>{details}</p></div>

       <div className='flex flex-row items-center justify-between my-6 text-white'>
            <img src= {iconUrl(icon)} className='w-20'></img>
            <div className='text-5xl font-light'>{`${temp.toFixed()}°`}</div>
            <div className='text-sm font-light flex flex-col justify-center items-center'>
                <div className='flex items-center'><UilTemperatureHalf className = 'mr-1'/> Real feel : <span>{`${feels_like.toFixed()}°`}</span></div>
                <div className='flex items-center'><UilTear className = 'mr-1'/><p>Humidity : <span>{`${humidity.toFixed()}%`}</span></p></div>
                <div className='flex items-center'><UilWind className = 'mr-1'/><p>Wind : <span>{`${speed} km/h`}</span></p></div>
            </div>
       </div>

        <div className='text-sm text-white flex justify-center items-center m-5'>
            <UilSun className='mr-2' />
            Rise : 
            <span>{formatToLocalTime(sunrise , timezone, "hh:mm a")}</span>
            <p className='ml-2 '>|</p>
            <UilSunset className='mx-2'/>
            Set :
            <span>{formatToLocalTime(sunset , timezone, "hh:mm a")}</span>
            <p className='ml-2 '>|</p>
            <UilAngleUp className='mx-2'/>
            High :
            <span>{`${temp_max.toFixed()}°`}</span>
            <p className='ml-2 '>|</p>
            <UilAngleDown className='mx-2'/>
            Low :
            <span>{`${temp_min.toFixed()}°`}</span>
        </div>

    </div>
    
  )
}

export default WeatherInfo
