import React, { Component } from 'react'
import CompanyName from './companyName.js'
import GraphicInputForm from './graphicInputForm'
import Sidebar from './sidebar'

export class graphicsInputPage extends Component {
    render() {
        return (
            <div style={formPage}>
                <div style={form}>
                    <Sidebar />
                    <CompanyName />
                    <GraphicInputForm changeClass={this.props.changeClass} changeInstructor={this.props.changeInstructor}/>
                </div>
            </div>
        )
    }
}


const formPage = {
    backgroundColor: 'gray',
    width: '100vw',
    height: '100vh',
    margin: 'auto',
    overflow: 'hidden'
}
const form = {
    width: '500px',
    height: '600px',
    backgroundColor: '#80c64a',
    borderRadius: '10px',
    padding: '72px 55px 20px',
    margin: 'auto',
    marginTop: '200px'
}
export default graphicsInputPage
