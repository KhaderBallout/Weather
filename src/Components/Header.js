import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

export default function Header(props) {

    return (
        <header className="header">
      <div className="container">
            <div className="date">
            <h5>Date|Time: {props.curTime}</h5>
            </div>

            <div className="title">
                <h1 >Today's Weather</h1>
            </div>
        
            <div className="search">
                <form onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regionInput"  placeholder="Select region"
                     onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div> 

            <div className="link1" >
            <Link to="/" style={{ color: '#FFF' }}> HOME </Link>
            </div>

            <div className="link2" >
            <Link to="/details" style={{ color: '#FFF' }}> DETAILS </Link>
            </div>

    </div>
    </header>

    )
}