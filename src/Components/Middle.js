import React from 'react'
import "./Middle.css"
const Middle = (props) => {
  console.log("middle",props);
  return (
      <div className ="container1">
          <div className="middle">
          <h2>{props.data.city},{props.data.country}</h2>
          <img className="mainIcon" src={`http://openweathermap.org/img/w/${props.data.icons}.png`}/>
          <h3>{props.data.description}</h3>
          <br></br>
         <h3 className="temp">Temperature:{props.data.temp}&deg;</h3>
         <br></br>
         {maxminTemp(props.data.temp_min,props.data.temp_max)}
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
