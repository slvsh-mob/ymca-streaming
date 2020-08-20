import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux'

export const userCounter = (props) => {

        return (
            <React.Fragment>
                <div style={row}>
                    <div style={left}>
                        <FontAwesomeIcon icon={faUser} style={userLogo}/>
                    </div>
                    <div style={right}>
                        <p style={userCounter_injector} id="userCounter_injector">{props.occupants}</p>
                    </div>
                </div>
            </React.Fragment>
        )
}

const mapStateToProps = state => {
    return {
        occupants: state.occupant.value
    }
}

const userCounter_injector = {
    fontSize: '30pt',
    fontFamily: 'Orbitron',
    color: 'white',
    margin: '0',
    marginTop: '12px'
}

const userLogo = {
    fontSize: '25pt',
    float: 'right',
    marginTop: '20px',
    marginRight: '5px'
}

const row = {
    width: '100%',
    height: 'inherit',
    color: 'white'
}

const right = {
    lineHeight: '50px',
    float: 'left',
    width: '50%',
    textAlign: 'center'
}

const left = {
    lineHeight: '50px',
    float: 'left',
    width: '40%',
    textAlign: 'center'
}

export default connect(mapStateToProps)(userCounter)
