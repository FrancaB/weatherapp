import React, {useState} from "react";
import axios from "axios";


export default function SearchWeather(){ 
  const [city, setCity] = useState("");
  const [weather,setWeather] = useState("")
  const [setState] = useState('')

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
    if (city) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=b32ea066106f97ea93e922f8f77df68b&query=${city}`        )
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
      <input className= "regioninput" placeholder="CITY" onChange={handleCity} />
      <button type="submit" onClick={getWeather}>
        {" "}
        Search
      </button>
      <button onClick={handleReset}> Reset</button>

      {weather 
      && 
      (
        <div>
        <h3> {weather.location.name}</h3>
        <img src ={weather.current.weather_icons} alt= 'weather icon'/>
      </div>
      )}
    </div>
  );
}