import React, { Component } from 'react'

export class companyName extends Component {
    constructor(props){
        super(props);
        this.state = {companyName: 'Madison YMCA'};
    }

    render() {
        return (
            <div>
                <p style={title}>{this.state.companyName}</p>
            </div>
        )
    }
}

const title = {
    fontSize: '40pt',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    lineHeight: '1.0',
    paddingBottom: '70px'
}
export default companyName
