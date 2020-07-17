import React from 'react'

const Middle = (props) => {
    return (
        <div className ="container1">
            <div className="middle">
            <h1>{props.data.city},{props.data.country}</h1>
              <h5>Wind {props.data.wind} </h5>
           <h1 className="middle">{props.data.temp}&deg;</h1>
           {maxminTemp(props.data.temp_min,props.data.temp_max)}
           <button>click me</button>
         </div>
        </div>
    );
}

export default Middle;

function maxminTemp(min, max) {
    if (max && min) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  }