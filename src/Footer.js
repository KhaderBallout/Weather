import React from 'react';

const Footer = (props) => {
    console.log("footer",props);
    return(
        <div className ="footer">
            <div className="day">{props.days.day1}
            <p>{props.days.temp1}</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons}.png`}/>
            </div>
            <div className="day">{props.days.day2}    <p>{props.days.temp1}</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons}.png`}/></div>
            <div className="day">{props.days.day3}   <p>{props.days.temp1}</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons}.png`}/></div>
            <div className="day">{props.days.day4}   <p>{props.days.temp1}</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons}.png`}/></div>
            <div className="day">{props.days.day5}   <p>{props.days.temp1}</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons}.png`}/></div>
        </div>
    );
}

export default Footer ;