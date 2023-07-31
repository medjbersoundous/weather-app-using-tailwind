import React from 'react'


const CurrentWeather = ({data}) => {
  return (
   <div className='flex flex-col   rounded-md bg-stone-700 w-64  p-4 px-3 m-15 mx-auto shadow-xl ring-offset-10 -ring-offset-2 ring-20 ring-black ring-opacity-10'>
       <div className=' flex flex-col justify-around '>
          <div className='flex flex-row justify-between '>
            <div className='mt-4'>
             <p className='text-white m-o tracking-wide font-bold'>{data.city}</p>
             <p className='text-white m-o font-light leading-3 text-xs '>{data.weather[0].description}</p>
            </div>
            <div >
            <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='w-20 mr-4 ' />
            </div>
          </div>
      </div>
       <div className=' flex justify-between  items-center '>
        <div className='flex flex-row justify-between font-extrabold text-[40px]'>    
          <p className='text-white font-sans '>{Math.round (data.main.temp) }°C</p>
        </div>
        <div className='  ' >
            <div className=''>
             <span className='text-white font-semibold text-[9px] '>Details</span>
            </div>
            <div className=' flex justify-between mt-[-5px]'>
             <span className='text-white font-light   text-[9px]'>Feels like</span>
             <span className='text-white font-bold    text-[9px]'>{Math.round(data.main.feels_like)}°C </span>
            </div>
            <div className='flex justify-between mt-[-4px]'>
             <span className='text-white font-light   text-[9px]'>Wind</span>
             <span className='text-white font-bold   text-[9px]'>{Math.round(data.wind.speed)} m/s </span>
            </div>
            <div className='flex justify-between mt-[-4px]'>
             <span className='text-white font-light   text-[9px]'>Humidity</span>
             <span className='text-white font-bold   text-[9px]'>{Math.round(data.main.humidity)}% </span>
            </div>
            <div className='flex justify-between w-28 mt-[-4px]'>
             <span className='text-white font-light   text-[9px]'>Pressure</span>
             <span className='text-white font-bold   text-[9px]'>{Math.round(data.main.pressure)}hPa </span>
            </div>
        </div>
       </div>
   </div>

  
  
  )
}

export default CurrentWeather