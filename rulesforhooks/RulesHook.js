// we will learn the rules for hooks
// In src folder -> make componet folder -> make RulesHook.js file

// ##### Hooks rules  ##### ///
//1. Always write it inside the component or function which is in top of component
//2. Component name must be in pascal case (means first letter is capital)
//3. We can directly import or we can directly write it using React.hookName
//4. Dont call hooks inside loops, conditions, or nested functions

import React, { useState } from 'react'

const RulesHook = () => {
    const [myName, setmyName] = useState('hello sami')
    // we can import hooks like this also React.hookname
    // const [myName, setmyName] = React.useState('hello sami')
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RulesHook

