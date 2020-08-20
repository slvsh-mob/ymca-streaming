import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GraphicsSettings from './graphicsInputPage';
import { OverlayPage } from './overlayPage';
import {IntroPage} from './introPage';
import loginPage from './loginPage'
import {ClassSelect} from './classSelectPage'
import axios from 'axios'
import {OccupantTicker} from './occupantTicker'

import { Provider } from 'react-redux'
import store from './store'

let data, graphicsColor

async function getSettings(){
  axios({
    method: 'get',
    url: '/api/overlay/getDefault'
  })
  .then((response) => {
    data = response.data.defaultSettings
    graphicsColor = data.graphicsColor;
    console.log(graphicsColor)
    console.log(data)
  })
  .catch(function (error){
    console.log(error)
  })
}

getSettings()

library.add(fab)

const App = () => {

    const [instructorName, setinstructorName] = useState(localStorage.getItem('instructor-name') || 'John Doe');
    const [occupants, setoccupants] = useState(localStorage.getItem('occupants') || 0);
    const [overlayColor, setOverlayColor] = useState(graphicsColor || '#140718');
    const [className, setClassName] = useState('YMCA Class');
    const [classList, setClassList] = useState([]);


    useEffect(() => {
      //getClassInfo()
      getAllClasses()
      getCurrentClass()
    }, [])

    async function getClassInfo(){
      axios({
        method: 'get',
        url: '/api/classes/getOne?name=The Joy of Pump',
      })
      .then((response) => {
        console.log(response.data.class.name)
        //setInstructorName(response.data.class.instructors[0])
        setinstructorName(response.data.class.instructor)
        setClassName(response.data.class.name)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    async function getCurrentClass(){
      axios({
        method: 'get', 
        url: '/api/classes/getDefault'
      })
      .then((response) => {
        console.log(response)
        setClassName(response.data.class.name)
        setinstructorName(response.data.class.instructor)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    async function getAllClasses(){
      axios({
        method: 'get',
        url: '/api/classes/getAll'
      })
      .then((response) => {
        setClassList(response.data.class)
      })
      .catch((error) => {
        console.log(error)
      })
    }


    const changeClass = (e) => {
      setClassName(e)
      localStorage.setItem('class-name', e)
    }
    const changeInstructor = (e) => {
      setinstructorName(e)
      localStorage.setItem('instructor-name', e)
    }
    const changeOccupants = (e) => {
      setoccupants(e)
      localStorage.setItem('occupants', e)
    }

        return (
          <Provider store={store}>
          <Router>
          <div>
            <Route path="/overlay" 
            render={() => <OverlayPage currentClass={className} instructorName={instructorName} occupants={occupants} graphicsColor={overlayColor}/>}
            />
            <Route path="/test" 
            render={() => <GraphicsSettings changeClass={changeClass} changeInstructor={changeInstructor} />}
            />
            <Route path="/intro" component={IntroPage} />
            <Route path="/login" component={loginPage} />
            <Route path="/occupants" component={OccupantTicker} />
            <Route path="/classSelect" 
            render={() => <ClassSelect classes={classList}/>}
            />
          </div>
          </Router>
          </Provider>
        );
}

export default App;
