import React,{Component} from 'react';
import './Details.css';

export default function Details(props){

    return(
        <div className ="details">
            <div className="city">  <h1>{props.data.city}</h1>  </div>
            <div className="temp"> <h1></h1></div>
            <div className="text"> Humidity:</div>
            <div className="text">Pressure:<br></br></div>
            <div className="text"> Temp Min and Max:</div>
            <div className="text"> Feels Like:  </div>
            <div className="text"> Sea Level: </div>       

        </div>
    );
} 