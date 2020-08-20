import React from 'react'
import UserCounter from './userCounter'

export const CounterArea = () => {
    return (
        <div style={userAreaStyle}>
            <UserCounter />
        </div>
    )
}

const userAreaStyle = {
    width: '200px',
    height: '75px',
    backgroundColor: '#140718',
    opacity: '0.9',
    float: 'left'
}
