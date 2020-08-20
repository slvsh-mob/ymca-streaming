import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ClassSelect = () => {
    const [classList, setClassList] = useState('');
    const [loading, setLoading] = useState(true)

    async function getAllClasses(){
        axios({
          method: 'get',
          url: '/classes/getAll'
        })
        .then((response) => {
          setClassList((response.data.class), () => {
            console.log(classList[0])
          })
          //console.log(response.data.class)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    
    useEffect(() => {
        getAllClasses();
    }, [])


    
    return(
        <div className="settings">
            <div>
                <p className="title-large">Select Class</p>
            </div>
            <div className="container">
                {loading &&
                <div className="class-button">
                    <p>I am loading</p>
                </div>
                }
                {!loading &&
                  <div className="class-button">
                    <p>I am loading</p>
                  </div>
                }
            </div>
        </div>
    )
}