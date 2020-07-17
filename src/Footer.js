import React from 'react';

const Footer = (props) => {
    console.log("footer",props);
    return(
        <div className ="footer">
            <div className="day">{props.days.day1}
            <p>{props.days.temp1}</p></div>
            <div className="day">{props.days.day2}</div>
            <div className="day">{props.days.day3}</div>
            <div className="day">{props.days.day4}</div>
            <div className="day">{props.days.day5}</div>
        </div>
    );
}

export default Footer ;