import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint, UilFahrenheit, UilCelsius } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';

function Inputs({setQuery,units,setunits}) {
  const [city,setCity] = useState("");
  

  const searchClick = ()=>{
    if(city!== '') setQuery({q:city})
  }

  const locationClick = ()=>{
    if(navigator.geolocation){

      toast.info("Fetching your location...")
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
          toast.success("Fetched location")
        setQuery({
          lat,lon
        })
      })
    }
  } 

  const unitsChangeClick = (e) => {
    const clickedUnits = e.target.name;
      if(units !== clickedUnits) setunits(clickedUnits);
  }

  return (
    <div className='flex flex-row justify-center my-5'>
        <div className='flex items-center justify-center w-3/4 space-x-4'>
            <input value={city} onChange ={(e)=>setCity(e.tar1get.value)} onKeyDown = {(e)=>{if(e.code === 'Enter') searchClick()}} className='mx-2 p-2 shadow-lg w-full outline-none capitalize font-sans' placeholder='search city...'></input>
            <UilSearch className = 'text-white cursor-pointer transition hover:scale-125' size={35} onClick= {searchClick} />
            <UilLocationPoint className = " text-white cursor-pointer transition hover:scale-125" size={35} onClick = {locationClick} />
        </div>

        <div className='flex items-center justify-center w-1/4 space-x-4'>
            <button name = "metric"   className = " text-white cursor-pointer transition hover:scale-125 text-2xl" onClick ={unitsChangeClick}>°C</button>
            <button name = "imperial"   className = " text-white cursor-pointer transition hover:scale-125 text-2xl" onClick ={unitsChangeClick}>°F</button>
        </div>
    </div>
  )
}

export default Inputs
