import React from 'react';
import "./footer.css"
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <div className ="footer">
            <div className="day">{props.data.data0.day}
            <p>{props.data.data0.temp}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.data.data0.icons}.png`}/>
            <Link to="/details1" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>
            <div className="day">{props.data.data1.day}
            <p>{props.data.data1.temp}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.data.data1.icons}.png`}/>
            <Link to="/details2" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>
            <div className="day">{props.data.data2.day}
            <p>{props.data.data2.temp}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.data.data2.icons}.png`}/>
            <Link to="/details3" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>
            <div className="day">{props.data.data3.day}
            <p>{props.data.data3.temp}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.data.data3.icons}.png`}/>
            <Link to="/details4" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>
            <div className="day">{props.data.data4.day}
            <p>{props.data.data4.temp}&deg;</p>
            <img className="dayIcons" src={`http://openweathermap.org/img/w/${props.data.data4.icons}.png`}/>
            <Link to="/details5" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>
        </div>
    );
}

export default Footer ;