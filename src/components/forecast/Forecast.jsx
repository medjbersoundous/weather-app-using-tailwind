import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';



const Days = [
    'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
];
const Forecast = ({data}) => {
    const dayinInWeek = new Date().getDay();
    const forecastDays = Days.slice(dayinInWeek,Days.length ).concat(Days.slice(0, dayinInWeek));
    if (!data || !data.list) {
        return <label>Search about your destination.</label>;
      }
      console.log(forecastDays)
  return (
    <div className=''>
        <label className='ml-7 font-bold text-xl ' >Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0, 7).map((item, idx)=>(
           <AccordionItem key={idx}>
               <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='flex items-center bg-white mx-7 my-2 rounded-md h-10 text-slate-500 '>
                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className='w-10 ml-5 mb-1' />
                    <div className='ml-4 flex justify-between w-full' >
                    <label className=' font-bold  text-black' >{forecastDays[idx]}</label>
                    <div className='mr-10'>
                    <label className='text-stone-600 font-semibold'> {item.weather[0].description} </label>
                    <label> {Math.round(item.main.temp_min)}°C /{Math.round(item.main.temp_max)}°C </label>
                    </div>
                    </div>
                  </div>
                </AccordionItemButton>
               </AccordionItemHeading>
               <AccordionItemPanel>
                <div className='flex ml-8  w-full ' >
                    <div className='w-1/2 mr-3' >

                    <div className='flex  justify-between '  >
                        <label className='text-stone-500 ' >Pressure:</label>
                        <label className='text-stone-700 ' >{item.main.pressure}hPa</label>

                    </div>
                    <div className='flex  justify-between '>
                        <label className='text-stone-500'>Humidity:</label>
                        <label className='text-stone-700 ' >{item.main.humidity}%</label>

                    </div>
                    <div className='flex  justify-between '>
                        <label className='text-stone-500'>Clouds:</label>
                        <label className='text-stone-700 '>{item.clouds.all}</label>

                    </div>
                    </div>
                    <div  className='w-1/2'>

                    <div className='flex  justify-between '>
                        <label className='text-stone-500' >Wind speed:</label>
                        <label className=' mr-20 text-stone-700' >{item.wind.speed} m/s</label>

                    </div>
                    <div className='flex  justify-between '>
                        <label className='text-stone-500'>Sea level:</label>
                        <label className=' mr-20 text-stone-700' >{item.main.sea_level} m</label>

                    </div>
                    <div  className='flex  justify-between '> 
                        <label className='text-stone-500'>Feels like:</label>
                        <label className=' mr-20 text-stone-700' >{Math.round(item.main.feels_like)}°C</label>

                    </div>
                    </div>
                </div>
               </AccordionItemPanel>
           </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default Forecast