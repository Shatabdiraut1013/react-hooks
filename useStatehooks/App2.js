// how to toggle the data in useState when we click on the button will change again when we click on it it will change

import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [myName, setmyName] = useState('hello sami')


    const changeName = () => {
        let val = myName;

        // if (val === 'hello sami') {
        //   setmyName('sami badi pyari han')
        // } else {
        //   setmyName("hello sami")
        // }

        // OR using ternary operator
        (val === 'hello sami') ? setmyName('sami badi pyari han') : setmyName("hello sami");
    }

    return (
        <div>
            <h1>{myName}</h1>
            <button className="btn" onClick={changeName}>click me</button>
        </div>
    )
}

export default App