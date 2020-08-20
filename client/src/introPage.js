import React, { Component } from 'react'
import blueLogo from './logos/YMCA Logo BP Transparent.png'
import blueMission from './logos/YMCA Mission Blue.png'

export const IntroPage = () => {
        return (
            <div className="App">
                <div>
                    <img src={blueLogo} alt="YMCA Logo" style={logoStyle}></img>
                    <img src={blueMission} alt="YMCA Mission" style={logoStyleMission}></img>
                </div>
                <div style={test}>
                    <p style={line1}>A STRONG BRAND</p>
                    <p style={line2}>A SHARED</p>
                    <p style={line3}>RESPONSIBILITY</p>
                </div>
                <div>
                    <p style={note}>--Live Class Starts Soon--</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        )
}

const logoStyle = {
    width: '280x',
    height: '260px',
    padding: '40px 40px'
}

const logoStyleMission = {
    width: '280x',
    height: '260px',
    padding: '40px 40px',
    float: 'right'
}

const line1 = {
    fontSize: "175px",
    color: "#0060af",
    lineHeight: '0.9',
    fontFamily: 'Dosis'
}

const line2 = {
    fontSize: "175px",
    color: "#0089d0",
    lineHeight: '0.9',
    fontFamily: 'Dosis'
}

const line3 = {
    fontSize: "175px",
    color: "#00aeef",
    lineHeight: '0.9',
    fontFamily: 'Dosis'
}

const test = {
    padding: '40px 40px',
    marginTop: '20px'
}

const note = {
    fontSize: '100px',
    color: "#0060af",
    fontFamily: 'Dosis',
    textAlign: 'center'
}
