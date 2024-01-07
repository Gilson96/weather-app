import React from 'react'

const WeatherInfo = ({icon, value, description}) => {
  return (
    <div className='flex'>
          <snap className='h-8 w-8 mr-2'>
            {icon}
          </snap>
          <snap>
            <p> {value}</p>
            <p className='uppercase text-[0.5rem] text-gray-500'>{description}</p>
          </snap>
        </div>
  )
}

export default WeatherInfo