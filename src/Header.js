import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {

    return (
        <div className="container">
            <header>
            <div className="info">
            <p>Date/Time: {props.curTime}</p>
            </div>
            <div className="info">
                <h1 >Weather App</h1>
            </div>
           
            <div className="info">
                <form  onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput"  placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div> 
            <Link to="/"> HOME </Link> <Link to="/details"> DETAILS </Link>
            </header>
        </div>
    )
}