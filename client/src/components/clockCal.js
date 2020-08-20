import React from 'react'
import DigitalClock from './digitalClock'

export const ClockCal = () => {
    return(
        <div style={clockStyle}>
            <DigitalClock />
        </div>
    );
}

const clockStyle = {
    width: '350px',
    height: '75px',
    backgroundColor: "#140718",
    opacity: '0.9',
    float: 'right'
}
