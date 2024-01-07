import './App.css';
import { useEffect, useState } from 'react';
import WeatherCard from './components/weatherCard';
import Home from './components/home';

function App() {

  const [data, setData] = useState([])
  const [city, setCity] = useState([])
  const [toggle, setToggle] = useState(false)

  const onChangeHandler = e => {
    setCity(e.target.value)
  }

  const Toggle = () => {
    setToggle((prev) => !prev)
  }

  useEffect(() => {
    try{
       fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=aa73cbdc32f54a67a664b986e773c1fc&units=metric`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    } catch (error) {
      <p>City not found</p>
    }
    
  }, [city])

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      
      {toggle && <WeatherCard
          temp={data.main?.temp}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
          city={data.name}
          country={data.sys?.country}
          temp_max={data.main?.temp_max}
          temp_min={data.main?.temp_min}
          humidity={data.main?.humidity}
          wind={data.wind?.speed}
          pressure={data.main?.pressure}
        />} 
        
        {!toggle && <Home
          onChangeHandler={onChangeHandler}
          city={city}
          toggle={Toggle}
        />}

    </div>
  );
}

export default App;
