// Project is -> we want to change the value of name but age n degree will be same when we click on update
// we use usestate in object (we will modified in object)
import React, { useState } from 'react'

const Usestateobject = () => {
    const [myObject, setmyObject] = useState({
        myName: "raja", age: 56, degree: "Nalla"
    })

    const changeObject = () => {
        // ...myObject -> myObject ke saari values aa gayi instead of writing the whole values n ...-> only use in objects
        //  we only want to change the value of myName
        setmyObject({ ...myObject, myName: "pagal ladka" })
    }

    return (
        <>
            <h1>Name: {myObject.myName} & Age: {myObject.age} & Degree:{myObject.degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </>
    )
}

export default Usestateobject
