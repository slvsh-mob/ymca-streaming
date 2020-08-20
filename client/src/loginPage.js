import React from 'react'
import CompanyName from './companyName'
import LoginForm from './loginForm'

const loginPage = () => {
    return(
        <div style={formPage}> 
            <div style={form}>
                <CompanyName />
                <LoginForm />
            </div>
        </div>
    )
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

export default loginPage