import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather,setWeather] = useState([])
  const [setState] = useState('')

  const handleCountry = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const handleReset = () => {
    document.querySelectorAll('input').forEach(input=> (input.value=''))
    setState({itemvalues:[{}]
  });
  };

  const getWeather = (e) => {
    e.preventDefault();
    if (country && city) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=67dd7ff536dffa4aa82b9782c4edc4b3&query=${country},${city}`
        )
        .then((res) =>{
            console.log(res)
            setWeather(res.data)
        } 
        )
        .catch((err) => console.log(err))
    }
  };


  return (
    <div className="App">
      <input type="text" placeholder="COUNTRY" onChange={handleCountry} />
      <input type="text" placeholder="CITY" onChange={handleCity} />
      <button type="submit" onClick={getWeather}>
        {" "}
        Search
      </button>
      <button onClick={handleReset}> Reset</button>

      {weather 
      && 
      (
        <div>
        <h1>{weather.location.country}</h1>
        <h3>{weather.location.name}</h3>
        <img src ={weather.current.weather_icons} alt= 'weather icon'/>
      </div>
      )}
    </div>
  );
}
