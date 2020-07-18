import React from 'react';
import "./footer.css"

const Footer = (props) => {
    console.log("footer",props);
    return(
        <div className ="footer">
            <div className="day">{props.days.day1}
            <p>{props.days.temp1}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons1}.png`}/>
            </div>
            <div className="day">{props.days.day2}
            <p>{props.days.temp2}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons2}.png`}/>
            </div>
            <div className="day">{props.days.day3}
            <p>{props.days.temp3}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons3}.png`}/>
            </div>
            <div className="day">{props.days.day4}
            <p>{props.days.temp4}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons4}.png`}/>
            </div>
            <div className="day">{props.days.day5}
            <p>{props.days.temp5}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.iconsObj.icons5}.png`}/>
            </div>
        </div>
    );
}

export default Footer ;