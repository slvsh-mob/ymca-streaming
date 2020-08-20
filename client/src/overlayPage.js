import React from 'react'
import {ClockCal} from './components/clockCal'
import {CounterArea} from './components/counterArea.js'
import {BottomBar} from './bottomBar.js'

export const OverlayPage = (props) => {
    return(
        <div className="App">
            <ClockCal graphicsColor={props.graphicsColor}/>
            <CounterArea />
            <BottomBar currentClass={props.currentClass} instructorName={props.instructorName}/>
        </div>
    );
}

