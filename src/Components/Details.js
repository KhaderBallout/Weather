import React,{Component} from 'react';
import './Details.css';
class  Details extends Component{
    render(){
    return(
        <div className ="details">
        <div class="table">

         <div class="row header">
              <div class="cell">  Properties </div>
              <div class="cell"> Data  </div>
        </div>


        <div class="row">
            <div class="cell" >Country</div>
            <div class="cell">{this.props.data.city} </div>
        </div>


        <div class="row">
            <div class="cell" >Temperature</div>
            <div class="cell">{this.props.data.temp}&deg; </div>
        </div>


        <div class="row">
            <div class="cell">Feels Like </div>
            <div class="cell"> {this.props.data.Feels_Like}&deg;</div>
        </div>

        <div class="row">
            <div class="cell" >Icons</div>
            <div class="cell"><img className = "mainIcon" src ={`http://openweathermap.org/img/w/${this.props.data.icons}.png`} /> </div>
        </div>
        
        <div class="row">
            <div class="cell"> Description </div>
            <div class="cell">{this.props.data.description} </div>
        </div>

        <div class="row">
            <div class="cell">Humidity</div>
            <div class="cell">{this.props.data.Humidity}%</div>
        </div>
        <div class="row">
            <div class="cell">Pressure </div>
            <div class="cell">{this.props.data.Pressure} Pa</div>
        </div> 
        <div class="row">
            <div class="cell">Sea Level </div>
            <div class="cell">{this.props.data.Sea_Level} m</div>
        </div> 
        <div class="row">
            <div class="cell">Wind Speed </div>
            <div class="cell"> {this.props.data.wind} mph</div>
        </div>
         <div class="row">
            <div class="cell">Population</div>
            <div class="cell"> {this.props.data.population}</div>
        </div>

        </div>
        </div>
        
    );
    }
} 

export default Details ;