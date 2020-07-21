import React from 'react';
import './App.css';
import './index.css';
import Axios from 'axios';
import Header from './Components/Header'
import Middle from './Components/Middle.js';
import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const API = "0159e74a618b489bf8a7d85490c7e5f3";
class App extends React.Component {

  state = {
    coords: {
      lat: 40,
      lon: 60
    },
    data0: {
    },
    data1: {
    },
    data2: {
    },
    data3: {
    },
    data4: {
    },
    inputData: "",
    curTime: new Date().toLocaleString()
  }
  componentDidMount() { // get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        this.setState({ coords: newCoords });
        // api call
        Axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.coords.lat}&lon=${this.state.coords.lon}&appid=${API}`).then(res => {
          console.log("main", res);
          this.getData(res);
        })
      })
    } else {
      console.log("not supported");
    }
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  changeRegion = (value) => {
    this.setState({ inputData: value })
    console.log(this.state.inputData);
  }
  changeLocation = (e) => {
    e.preventDefault()
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputData}&appid=${API}`).then(res => {
      this.getData(res);
    })
  }
  getData(res) {
    var index = 0;
    for (var i = 0; i < 5; i++) {
      let weatherData = {
        city: res.data.city.name,
        country: res.data.city.country,
        temp: this.calCelsius(res.data.list[index].main.temp),
        temp_max: this.calCelsius(res.data.list[index].main.temp_max),
        temp_min: this.calCelsius(res.data.list[index].main.temp_min),
        wind: res.data.list[index].wind.speed,
        Humidity: res.data.list[index].main.humidity,
        Pressure: res.data.list[index].main.pressure,
        Feels_Like: this.calCelsius(res.data.list[index].main.feels_like),
        Sea_Level: res.data.list[index].main.sea_level,
        description: res.data.list[index].weather[0].description,
        population: res.data.city.population,
        day: res.data.list[index].dt_txt,
        icons: res.data.list[index].weather[0].icon,
      }
      index = index + 8;
      if (i === 0) {
        this.setState({ data0: weatherData });
      }
      if (i === 1) {
        this.setState({ data1: weatherData });
      }
      if (i === 2) {
        this.setState({ data2: weatherData });
      }
      if (i === 3) {
        this.setState({ data3: weatherData });
      }
      if (i === 4) {
        this.setState({ data4: weatherData });
      }
      weatherData = {};
    }
  }
  render() {
    let that = this.state;

    return (
      <Router>
        <div className="App">
          <div>
            <Header changeRegion={this.changeRegion} changeLocation={this.changeLocation} curTime={this.state.curTime} />
            <Route exact path="/" render={props => (<React.Fragment>
              <Middle data={this.state.data0} />
              <Footer data={this.state} />
            </React.Fragment>)} />
            <Route exact path='/details' render={props => (<React.Fragment>
              <Details data={that.data0} />
            </React.Fragment>)} />
            <Route exact path='/details1' render={props => (<React.Fragment>
              <Details data={that.data0} />
            </React.Fragment>)} />
            <Route exact path='/details2' render={props => (<React.Fragment>
              <Details data={that.data1} />
            </React.Fragment>)} />
            <Route exact path='/details3' render={props => (<React.Fragment>
              <Details data={that.data2} />
            </React.Fragment>)} />
            <Route exact path='/details4' render={props => (<React.Fragment>
              <Details data={that.data3} />
            </React.Fragment>)} />
            <Route exact path='/details5' render={props => (<React.Fragment>
              <Details data={that.data4} />
            </React.Fragment>)} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;