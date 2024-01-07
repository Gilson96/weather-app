import React from 'react'
import image from '../assets/Weather-PNG.png'
const Home = ({ onChangeHandler, city, toggle }) => {
    return (
        <div className='flex flex-col w-[28rem] h-[32rem] justify-center items-center p-5 rounded-lg shadow bg-white'>

            <h1 className='font-bold text-2xl mb-6 absolute top-20'>Weather App</h1>

            <img className='h-52 w-52 mb-6' src={image} alt='weather'/>

            <h1 className='text-xl mb-6 '>Enter a name of a city</h1>

            <form action="/" className='flex'>

                <input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='City name'
                    className='bg-cyan-100 italic rounded-lg mr-1 p-2'
                    onChange={onChangeHandler}
                    value={city}
                />

                <input
                    type='submit'
                    value="Find"
                    className='h-auto p-2 w-20 font-bold rounded-lg bg-cyan-500 shadow-xl hover:text-white cursor-pointer'
                    onClick={toggle}
                />

            </form>
        </div>
    )
}

export default Home