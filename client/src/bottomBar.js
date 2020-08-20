import React from 'react'
import Video from './video.webm'
import { useSelector } from 'react-redux'


export const BottomBar = (props) => {
    const instructor = useSelector(state => state.instructor)
    const className = useSelector(state => state.className)

    return (
        <div style={row}>
            <div style={left}>
                <p style={text} id="className-injector">Class: {props.currentClass}</p>
            </div>
            <div style={center}>
                <video style={videoStyle} loop autoPlay>
                    <source src={Video} type="video/webm" />
                </video>
            </div>
            <div style={right}>
                <p style={text} id="instructorName-injector">Instructor: {props.instructorName}</p>
            </div>
        </div>
    )
}

const row = {
    width: '1920px',
    height: '125px',
    backgroundColor: '#140718',
    opacity: '0.9',
    position: 'absolute',
    top: '955px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    color: 'white'
}
const left = {
    width: '35%',
    height: '125px',
    float: 'left'
}

const right = {
    width: '35%',
    height: '125px',
    float: 'right'
}

const center = {
    width: '30%',
    height: '125px'
}

const text = {
    fontSize: '30pt',
    textAlign: 'center',
    margin: '0',
    paddingTop: '40px'
}

const videoStyle = {
    width: '200px',
    height: '125px'
}
