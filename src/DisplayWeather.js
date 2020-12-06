import React from 'react'

export default function DisplayWeather(props) {

    const { temperature, description, location, region, country, time, img, uv, feels, humidity } = props.weatherData;

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C , {description}</h1>
                    <h4>{location}</h4>
                    <p>{region} , {country}</p>
                </div>
            
                <div className="col-md-9">
                    <img className="mainImg" src={img} alt="weather-img" />
                </div>
            

                <div className="col-md-3 weather-info">
                    <p><b>Time</b></p>
                    <h2>{time}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>UV Index</b></p>
                    <h2>{uv}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Feels Like</b></p>
                    <h2>{feels}<sup>o</sup>C </h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b></p>
                    <h2>{humidity}%</h2>
                </div>


            
            </div>
        </div>
    )
}