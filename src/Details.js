import React,{Component} from 'react';

export default function Details(props){

    return(
        <div className ="container1">
            <div>  <h1>{props.data.city}</h1>  </div>
            <div>Temperature {props.data.temp}&deg;<h1></h1></div>
             <img className="mainIcon" src={`http://openweathermap.org/img/w/${props.iconsObj.icons1}.png`}/>
            <div> Humidity:{props.data.Humidity}</div>
            <div>Pressure:{props.data.Pressure}<br></br></div>
            <div> Temp Min:{props.data.temp_min} Max:{props.data.temp_max}</div>
            <div> Feels Like:{props.data.Feels_Like}  </div>
            <div> Sea Level:{props.data.Sea_Level} </div>
            <div> Description:{props.data.description}</div>
        </div>
    );
} 