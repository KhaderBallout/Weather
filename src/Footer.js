import React from 'react';

const Footer = (props) => {
    console.log("footer",props);
    return(
        <div className ="footer">
            <div className="day">{props.days.day1}
<<<<<<< HEAD
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
=======
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
>>>>>>> def7ca36fbbb7528fd17d9149adaa48a30723bd4
        </div>
    );
}

export default Footer ;