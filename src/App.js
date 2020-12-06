import React from "react";
import axios from 'axios';
import './App.css';
import DisplayWeather from "./DisplayWeather";
import SignUp from "./SignUp"
import NavBar from "./NavBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from "./LogIn";
import SearchWeather from "./SearchWeather";
// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  state = {
    coords: {
      latitude: 5,
      longitute: 0,
    },

    data: {},

    inputData: {},
  }

  componentDidMount(){
    if (navigator.geolocation) {
    
      navigator.geolocation.getCurrentPosition ((position) =>{
        let newCoords = {
        latitude: position.coords.latitude,
        longitute: position.coords.longitude
        }
        this.setState({coords:newCoords})

        axios.get (`http://api.weatherstack.com/current?access_key=b32ea066106f97ea93e922f8f77df68b&query=${this.state.coords.latitude},${this.state.coords.longitute}`)
             .then(res =>
              { let weatherData = {
                location: res.data.location.name,
                country: res.data.location.country,
                region: res.data.location.region,
                time: res.data.current.observation_time,
                temperature: res.data.current.temperature,
                uv: res.data.current.uv_index,
                description: res.data.current.weather_descriptions[0],
                img: res.data.current.weather_icons,
                feels: res.data.current.feelslike,
                humidity: res.data.current.humidity,
              }

              this.setState({data: weatherData})
                console.log(res)
              })
      })
    }
     else{
        console.log("Not Supported")
      }
  }

  change = (value) => {
    this.setState({inputData:value})
  }

  changeWeather = (event) => {
    event.preventDefault()
    axios.get (`http://api.weatherstack.com/current?access_key=b32ea066106f97ea93e922f8f77df68b&query=${this.state.inputData}`)
         .then (res => {
          let weatherData = {
            location: res.data.location.name,
            country: res.data.location.country,
            region: res.data.location.region,
            time: res.data.current.observation_time,
            temperature: res.data.current.temperature,
            uv: res.data.current.uv_index,
            description: res.data.current.weather_descriptions[0],
            img: res.data.current.weather_icons,
            feels: res.data.current.feelslike,
            humidity: res.data.current.humidity,
          }

          this.setState({data: weatherData})
           console.log(res)
         })
  }

  render (){
  return (
    <div className= "App">
      <div className= "container">
        <Router>
          <NavBar changeRegion = {this.change} changeWeather= {this.changeWeather}/>
          <Switch>
            <Route exact path = "/">
              <DisplayWeather weatherData={this.state.data}/>
            </Route>
            <Route path = "/login" component = {LogIn} />
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/searchweather" component = {SearchWeather} />
          </Switch>
        </Router>  

      </div>   
    </div>
  );
}
}

export default App;
