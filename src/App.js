import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocationn from './components/TimeAndLocationn';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import getWeatherDataFormatted from './services/Weather';
import { useEffect, useState } from 'react';
import getFormattedWeatherData from './services/Weather';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


function App(){


    const [query,setQuery] = useState({q:'delhi'})
    const [units,setunits] = useState('metric')
    const [weather,setWeather] = useState(null)

    useEffect(()=>{
        const fetchWeather = async () => {
            const message = query.q ? (query.q) : "current location"

            toast.info("Fetching weather info for " + message)
            await getWeatherDataFormatted({...query,units}).then(data=>{
            toast.success("Fetched weather info for " + data.name + "," +data.country)
            setWeather(data)
        });

    };

    fetchWeather();
    },[query,units]);

    const formatBg = () => {
        
        if(!weather) return 'from-black-500 to-grey-400';
        
        if(weather.details === 'Smoke'){
            if(weather.dt > weather.sunrise && weather.dt < weather.sunset)
            return 'from-gray-600 to-gray-400';
            else return 'from-gray-900 to-gray-600';
        }
        else if(weather.details === 'Clouds'){
            if(weather.dt > weather.sunrise && weather.dt < weather.sunset) return 'from-gray-600 to-gray-300';
            else return 'from-gray-800 to-gray-600';
        }
        else if(weather.details === 'Clear'){
            if(weather.dt > weather.sunrise && weather.dt < weather.sunset) return 'from-sky-500 to-amber-500';
            else return 'from-blue-700 to-black';
        }
        else if(weather.details === 'Haze'){
            if(weather.dt > weather.sunrise && weather.dt < weather.sunset) return 'from-gray-500 to-gray-300';
            else return 'from-gray-800 to-gray-600';
        }
        else if(weather.details === 'rain'){
            return 'from-indigo-800 to--600';
        }

    }
    
    return (
        <div className= {`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br   h-fit shadow-xl shadow-black  ${formatBg()}`}>
        <TopButtons setQuery = {setQuery}/>
        <Inputs setQuery = {setQuery} units={units} setunits={setunits}/>
        {weather && (<div>
            <TimeAndLocationn weather = {weather}/>
            <WeatherInfo weather = {weather}/>
            <Forecast title="hourly forecast" items={weather.hourly}/>
            <Forecast title="daily forecast" items = {weather.daily}/>
        </div>)}
        
        <ToastContainer autoClose = {2000} theme = 'colored'  />

        </div>
    )
}

export default App;