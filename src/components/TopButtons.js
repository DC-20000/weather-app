import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            name : 'Mumbai'
        },
        {
            id:2,
            name : 'Kolkata'
        },
        {
            id:3,
            name : 'Chennai'
        },
        {
            id:4,
            name : 'Bareilly'
        },
        {
            id:1,
            name : 'Varanasi'
        },
    ]

  return (
    <div className='flex items-center justify-around my-5'>
      
      {
        cities.map((city)=>{
            return <button className='text-lg font-medium transition hover:scale-125 text-white' key={city.id} onClick = {()=>setQuery({q: city.name})}>{city.name} </button>
        })
      }
    </div>
  )
}

export default TopButtons
