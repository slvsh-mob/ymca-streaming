import React from 'react'

const sidebar = () => {
    return (
        <div id="side-nav">
            <button id="btn" onClick={window.location.replace('http://localhost:3000/login')}>Login</button>
            <button id="btn" onClick={window.location.replace('http://localhost:3000/test')}>Graphics</button>
            <button id="btn" onClick={window.location.replace('http://localhost:3000/overlay')}>Overlay</button>
        </div>
    );
}

export default sidebar