import React from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Components/Header'
import Middle from './Components/Middle.js';
import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details.js';
import {BrowserRouter as Router, Switch,Route,Link , Redirect} from 'react-router-dom';


const API = "0159e74a618b489bf8a7d85490c7e5f3";
class App extends React.Component {

    state = {
    coords:{
      lat:40,
      lon:60
    },
    data:{
    },
    iconsObj:{
    },
    days:{
    },
    iconsObj:{
    },
    inputData: "",
    curTime : new Date().toLocaleString()
    
  }
  componentDidMount() { // get device location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
      let newCoords = {
        lat:position.coords.latitude,
        lon:position.coords.longitude
      }
      this.setState({coords:newCoords});
      // api call
      Axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.coords.lat}&lon=${this.state.coords.lon}&appid=${API}`).then(res => {
      console.log("main",res);
       let weatherData = {
        city:res.data.city.name,
        country:res.data.city.country,
        temp:this.calCelsius(res.data.list[0].main.temp),
        temp_max:this.calCelsius(res.data.list[0].main.temp_max),
        temp_min:this.calCelsius(res.data.list[0].main.temp_min),
        wind:res.data.list[0].wind.speed,
        Humidity:res.data.list[0].main.humidity,
        Pressure:res.data.list[0].main.pressure,
        Feels_Like:this.calCelsius(res.data.list[0].main.feels_like) ,
        Sea_Level:res.data.list[0].main.sea_level,
        description:res.data.list[0].weather[0].description,
        wind: res.data.list[0].wind.speed,
        population:res.data.city.population,
      }
      let dayDate ={
        day1:res.data.list[0].dt_txt,
        temp1:this.calCelsius(res.data.list[0].main.temp),
        day2:res.data.list[8].dt_txt,
        temp2:this.calCelsius(res.data.list[8].main.temp),
        day3:res.data.list[16].dt_txt,
        temp3:this.calCelsius(res.data.list[16].main.temp),
        day4:res.data.list[24].dt_txt,
        temp4:this.calCelsius(res.data.list[24].main.temp),
        day5:res.data.list[32].dt_txt,
        temp5:this.calCelsius(res.data.list[32].main.temp),
      }
      let iconsWeather ={
        icons1:res.data.list[0].weather[0].icon,
        icons2:res.data.list[8].weather[0].icon,
        icons3:res.data.list[16].weather[0].icon,
        icons4:res.data.list[24].weather[0].icon,
        icons5:res.data.list[32].weather[0].icon,

      }
      this.setState({iconsObj: iconsWeather});
      this.setState({data:weatherData});
      this.setState({days:dayDate});
      this.setState({iconsObj: iconsWeather})

      }) 
  })

    }else {
      console.log("not supported");
    }
  }
    calCelsius(temp){
      let cell = Math.floor(temp - 273.15);
      return cell ;
    }

   changeRegion = (value) => {
     this.setState({ inputData: value })
     console.log(this.state.inputData);
   }
   changeLocation = (e) => {
    e.preventDefault()
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputData}&appid=${API}`).then(res => {

      let userWeather = {
        city:res.data.city.name,
        country:res.data.city.country,
        temp:this.calCelsius(res.data.list[0].main.temp),
        temp_max:this.calCelsius(res.data.list[0].main.temp_max),
        temp_min:this.calCelsius(res.data.list[0].main.temp_min),
        wind:res.data.list[0].wind.speed,
        Humidity:res.data.list[0].main.humidity,
        Pressure:res.data.list[0].main.pressure,
        Feels_Like:this.calCelsius(res.data.list[0].main.feels_like) ,
        Sea_Level:res.data.list[0].main.sea_level,
        description:res.data.list[0].weather[0].description,
        wind: res.data.list[0].wind.speed,
        population:res.data.city.population,
      }
      let dayDate ={
        day1:res.data.list[0].dt_txt,
        temp1:this.calCelsius(res.data.list[0].main.temp),
        day2:res.data.list[8].dt_txt,
        temp2:this.calCelsius(res.data.list[8].main.temp),
        day3:res.data.list[16].dt_txt,
        temp3:this.calCelsius(res.data.list[16].main.temp),
        day4:res.data.list[24].dt_txt,
        temp4:this.calCelsius(res.data.list[24].main.temp),
        day5:res.data.list[32].dt_txt,
        temp5:this.calCelsius(res.data.list[32].main.temp),
      }
      let iconsWeather ={
        icons1:res.data.list[0].weather[0].icon,
        icons2:res.data.list[8].weather[0].icon,
        icons3:res.data.list[16].weather[0].icon,
        icons4:res.data.list[24].weather[0].icon,
        icons5:res.data.list[32].weather[0].icon,
      }
      this.setState({ data: userWeather });
      this.setState({days:dayDate});
      this.setState({iconsObj: iconsWeather});

    })
  }

  render(){
    let that = this.state;
  return (
    <Router>
        <div className="App">
          <div>
            <Header changeRegion={this.changeRegion} changeLocation={this.changeLocation} curTime={this.state.curTime} />
            <Route exact path="/" render={props => (<React.Fragment>
              <Middle data={this.state.data} iconsObj = {this.state.iconsObj} />
              <Footer days={this.state.days} iconsObj = {this.state.iconsObj}  />
             </React.Fragment>)} />
             <Route exact path='/details' render={props => (<React.Fragment>
              <Details data={that.data} iconsObj = {that.iconsObj} />
            </React.Fragment>)} />

          </div>
        </div>
      </Router>
  );
  }
}

export default App;