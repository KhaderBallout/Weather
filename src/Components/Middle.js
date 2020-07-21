import React from 'react'
import "./Middle.css"
const Middle = (props) => {
  console.log("middle", props);
  return (
    <div className = "container"> 
    <div className="box">
      <h2 id="city">{props.data.city},{props.data.country}</h2>
      <h3 id="txt"> {props.data.description}</h3>
      <img className="mainIcon" src={`http://openweathermap.org/img/w/${props.data.icons}.png`} />
      <h1 className="temp">{props.data.temp}&deg;</h1>
      {maxminTemp(props.data.temp_min, props.data.temp_max)}
    </div>
    </div>
  );
}
export default Middle;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Min:{min}&deg;</span>
        <span className="px-4">Max:{max}&deg;</span>
      </h3>
    );
  }
}