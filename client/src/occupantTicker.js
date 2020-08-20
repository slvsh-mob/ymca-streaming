import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './features/occupantSlice'

export const OccupantTicker = () => {
    const occupants = useSelector(state => state.occupant.value)
    const dispatch = useDispatch()
    return(
        <div style={pageStyle}>
                <label style={label_style}>Current Number of Occupants</label>
                <p style={occupant_style} id="occupant_counter">{occupants}</p>
                <br></br>
                <label style={input_style}>Add Occupant
                <button  style={button_style} onClick={() => dispatch(increment())}>+</button>
                </label>
                <br></br>
                <label style={input_style}>Remove Occupant
                <button style={button_style} onClick={() => dispatch(decrement())}>-</button>
                </label>
        </div>
    )
}

const pageStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column'
}

const label_style = {
    fontSize: '20px',
    textAlign: 'center'
}

const input_style = {
    fontSize: '20px',
    marginLeft: '20px'
}

const button_style = {
    width: '30px',
    height: '30px',
    float: 'right',
    marginRight: "30px"
}

const occupant_style = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '10px'
}