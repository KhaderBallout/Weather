import React from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Header.js';
import Middle from './Middle.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Details.js';
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
    days:{

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
      console.log(res);
    let weatherData = {
        city:res.data.city.name,
        country:res.data.city.country,
        temp:this.calCelsius(res.data.list[0].main.temp),
        temp_max:this.calCelsius(res.data.list[0].main.temp_max),
        temp_min:this.calCelsius(res.data.list[0].main.temp_min),
        wind:res.data.list[0].wind.speed,
        //icon:res.data.weather[0].icon
      }
      let dayDate ={
        day1:res.data.list[0].dt_txt,
        temp1:res.data.list[0].main.temp,
        day2:res.data.list[8].dt_txt,
        temp2:res.data.list[8].main.temp,
        day3:res.data.list[16].dt_txt,
        temp3:res.data.list[16].main.temp,
        day4:res.data.list[24].dt_txt,
        temp4:res.data.list[24].main.temp,
        day5:res.data.list[32].dt_txt,
        temp5:res.data.list[32].main.temp,
      }
      
      this.setState({data:weatherData});
      this.setState({days:dayDate});
      //console.log(this.state.data.icon);

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
        
      }
      let dayDate ={
        day1:res.data.list[0].dt_txt,
        temp1:res.data.list[0].main.temp,
        day2:res.data.list[8].dt_txt,
        temp2:res.data.list[8].main.temp,
        day3:res.data.list[16].dt_txt,
        temp3:res.data.list[16].main.temp,
        day4:res.data.list[24].dt_txt,
        temp4:res.data.list[24].main.temp,
        day5:res.data.list[32].dt_txt,
        temp5:res.data.list[32].main.temp,
      }
      this.setState({ data: userWeather });
      this.setState({days:dayDate});


    })
  }

  render(){
  return (
    <div className="App">
     <div>
       <Router>
                  <Header changeRegion={this.changeRegion} changeLocation={this.changeLocation} curTime={this.state.curTime} />
                  <Middle data={this.state.data} />  
                  <Details data = {this.state.data} />
                  <Footer days ={this.state.days}/>
                  
      </Router>
    </div>
    </div>
  );
  }
}

export default App;
