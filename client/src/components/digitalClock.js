import React, { Component } from 'react'

export class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <React.Fragment>
                <p style={clockType}>{this.state.date.toLocaleTimeString()}   {this.state.date.toLocaleDateString()}</p>
            </React.Fragment>
        )
    }
}

const clockType = {
    fontSize: '17pt',
    fontFamily: 'Orbitron',
    textAlign: 'center',
    color: 'white',
    margin: '0',
    paddingTop: '20px'
}

export default DigitalClock
