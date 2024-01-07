import React from 'react'
import {
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  BeakerIcon,
  Bars3Icon,
  ArrowRightCircleIcon
} from '@heroicons/react/24/outline'
import WeatherInfo from './weatherInfo'

const WeatherCard = ({ temp, description, city, country, temp_max, temp_min, humidity, wind, pressure, icon }) => {
  return (
    <div className='flex flex-col w-[28rem] h-[32rem] justify-center items-center p-5 rounded-lg shadow bg-white'>

      <h1 className='font-bold text-2xl mb-6'>Weather App</h1>

      <div className='flex w-10/12 h-34 justify-evenly items-center'>
        <p className='text-2xl'>{Math.round(temp)}<snap className="text-3xl"> °C |</snap></p>
        <p className='text-xl'>{description}</p>
        <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='weather icon' className='h-20 w-20' />
      </div>

      <div className='flex w-10/12 h-40 justify-center items-center'>
        <p className='font-bold text-2xl'>{city}, {country}</p>
      </div>

      <h1 className='absolute bottom-60 font-bold'>Weather Info</h1>

      <div className='flex flex-wrap w-10/12 h-40 justify-between items-center gap-6 p-4'>
        
        <WeatherInfo
          icon={<ArrowLongUpIcon/>}
          value={temp_max+" °C"}
          description='temp max'
        />
        <div className='flex relative top-10'>
        <snap className='h-8 w-8 mr-2'>
            <BeakerIcon />
          </snap>
          <snap>
            <p> {humidity}</p>
            <p className='uppercase text-[0.5rem] text-gray-500'>humidity</p>
          </snap>
        </div>
        <WeatherInfo
          icon={<Bars3Icon />}
          value={wind}
          description='wind'
        />
        <WeatherInfo
          icon={<ArrowLongDownIcon />}
          value={temp_min+" °C"}
          description='temp min'
        />
        <WeatherInfo
          icon={<ArrowRightCircleIcon/>}
          value={pressure}
          description='pressure'
        />
      </div>
    </div>

  )
}

export default WeatherCard