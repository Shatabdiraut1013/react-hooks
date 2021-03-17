// we will require our component file of RulesHook in App.js
// we will use rulesHooks component

import React, { useState } from 'react'
import './App.css'
import RulesHook from './component/RulesHook'

const App = () => {
    return (
        <div>
            {/* we will render our rulesHook.js file */}
            <RulesHook />
        </div>
    )
}

export default App