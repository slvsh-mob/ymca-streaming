import React, {Component} from 'react'
import axios from 'axios'

class loginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    async handleSubmit(event){
        event.preventDefault();
        axios({
            method: 'post',
            url: '/api/login',
            data: {
                email: event.target.username.value,
                password: event.target.password.value
            }
        })
        .then(function (response) {
            console.log(response);
            switch(response.data.code){
                case 200:
                    window.location.replace('http://localhost:3000/overlay')
                    console.log('login sucessfull')
                    break;
                case 204:
                    console.log('email not found')
                    break;
                case 206:
                    console.log('email and password wrong')
                    break;
                case 400:
                    console.log('trouble connecting to db')
                    break;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <form className="formLight" onSubmit={this.handleSubmit}>
            <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.onChange}
                className="inputLines"
                value={this.state.username}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                className="inputLines"
                value={this.state.password}
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

export default loginForm