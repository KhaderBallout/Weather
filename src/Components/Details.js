import React,{Component} from 'react';
import './Details.css';
class  Details extends Component{
    render(){

    return(
        <div className ="details">
            <div className="city" > <h1>{this.props.data.city}</h1>  </div>
            <img src={`http://openweathermap.org/img/w/${this.props.iconsObj.icons1}.png`}/>
            <div className="text" >Temperature: {this.props.data.temp}&deg;<h1></h1></div>
            <div className="text"> Feels Like: {this.props.data.Feels_Like}&deg;  </div>
            <div className="text"> Description: {this.props.data.description}</div>
            <div className="text"> Humidity: {this.props.data.Humidity}%</div>
            <div className="text">Pressure: {this.props.data.Pressure} atm<br></br></div>
            <div className="text">Sea Level: {this.props.data.Sea_Level}m</div>
            <div className="text">Wind Speed: {this.props.data.wind} mph</div>
            <div className="text">Population: {this.props.data.population}</div>


        </div>
    );
    }
} 

export default Details ;