import React,{Component} from 'react';
import './Details.css';
class  Details extends Component{
    render(){

    return(
        <div className ="details">
            <div className="city" >  <h1>{this.props.data.city}</h1>  </div>
            <div className="temp" >Temperature {this.props.data.temp}&deg;<h1></h1></div>
             <img className="mainIcon" src={`http://openweathermap.org/img/w/${this.props.iconsObj.icons1}.png`}/>
            <div className="text">  Humidity:{this.props.data.Humidity}</div>
            <div className="text">Pressure:{this.props.data.Pressure}<br></br></div>
            <div className="text"> Temp Min:{this.props.data.temp_min} Max:{this.props.data.temp_max}</div>
            <div className="text"> Feels Like:{this.props.data.Feels_Like}  </div>
            <div className="text"> Sea Level:{this.props.data.Sea_Level} </div>
            <div className="text"> Description:{this.props.data.description}</div>
        </div>
    );
    }
} 

export default Details ;
