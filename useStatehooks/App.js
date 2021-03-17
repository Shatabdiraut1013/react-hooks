// for useState hooks (simple example)
import React, { useState } from 'react'
import './App.css'

const App = () => {
    // hello sami inital state jo hume dikehega
    // nyName = 'hello sami'
    // with the use setMyName i can change the state of hello sami
    // write the name set(what you have written in initial state)
    // myName -> current value n setmyName -> is updated value
    const [myName, setmyName] = useState('hello sami')


    const changeName = () => {
        setmyName('sami badi pyari han')
    }

    console.log(myName);

    return (
        <div>
            <h1>{myName}</h1>
            <button className="btn" onClick={changeName}>click me</button>
        </div>
    )
}

export default App
