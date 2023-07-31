import Search from './components/search/Search'
import './App.css';
import CurrentWeather from './components/current-weather/Current-Weather';
import { Weather_api_key, Weather_api_url } from './Api';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';
function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const handleOnSearchChange = (searchData) =>{
   const [lat, lon]= searchData.value.split(" ");
   const currentWeatherFetch = fetch(`${ Weather_api_url }/weather?lat=${lat}&lon=${lon}&appid=${Weather_api_key}&units=metric`);
   const forecastFetch = fetch(`${ Weather_api_url }/forecast?lat=${lat}&lon=${lon}&appid=${Weather_api_key}&units=metric`);
   Promise.all([currentWeatherFetch, forecastFetch])
   .then(async(Response)=>{
   const weatherreponse = await  Response[0].json();
   const forecastresponse = await  Response[1].json();


   setcurrentWeather({ city: searchData.label, ...weatherreponse});
   setforecast({ city: searchData.label, ...forecastresponse});
   })

   .catch((err)=> console.log(err))
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div >
      <Search onSearchChange={handleOnSearchChange} className="max-w-1080 mx-auto my-20" />
     { currentWeather && <CurrentWeather data={currentWeather} />}
   { Forecast &&  <Forecast data={forecast} />}
    </div>
   
  );
}

export default App;
