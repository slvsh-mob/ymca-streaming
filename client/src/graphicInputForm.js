import React, { Component } from 'react'

export class graphicInputForm extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = {
        firstName: '',
        lastName: '',
        className: ''
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    handleSubmit(event){
        event.preventDefault();
        this.props.changeClass(this.state.className);
        const name = this.state.firstName + ' ' + this.state.lastName;
        this.props.changeInstructor(name);
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({className: ''});
    }

    render() {
        return (
            <form className="formLight" onSubmit={this.handleSubmit}>
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={this.onChange}
                    className="inputLines"
                    value={this.state.firstName}
                />
                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={this.onChange}
                    className="inputLines"
                    value = {this.state.lastName}
                />
                <input
                    name="className"
                    type="text"
                    placeholder="Class Name"
                    onChange={this.onChange}
                    className="inputLines"
                    value={this.state.className}
                />
                <button style={submitButton}>Submit</button>
            </form>
        )
    }
}

const submitButton = {
    fontSize: '16pt',
    color: '#555',
    lineHeight: '1.2',
    textTransform: 'uppercase',
    padding: '0 15px',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '120px',
    height: '50px',
    borderRadius: '3px',
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    marginTop: '40px'
}

export default graphicInputForm
