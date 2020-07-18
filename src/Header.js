import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';
export default function Header(props) {

    return (
        <div className="container">
            <header>
            <div className="date">
            <h5>Date/Time: {props.curTime}</h5>
            </div>
            <div className="link1">
            <Link to="/"> HOME </Link>
            </div>
            <div className="info">
                <h1 >Weather App</h1>
            </div>
           
            <div className="search">
                <form  onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput"  placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div> 
            <div className="link2">
             <Link to="/details"> DETAILS </Link>
            </div>
            </header>

        </div>
    )
}