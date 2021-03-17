// project is -> the moment when we click on clear it will clear the data
import React, { useState } from 'react'
// here we will create an array from that array our data will come in h1 tag instead of doing the hardcore
const Usestatearray = () => {

    const bioData = [
        {
            id: 0, myName: "raja", age: 56
        }, {
            id: 1, myName: "bahadur", age: 16
        }
        , {
            id: 2, myName: "ram", age: 67
        }
        , {
            id: 3, myName: "geeta", age: 60
        }
    ]

    const [myArray, setmyArray] = useState(bioData)

    const clearArray = () => {
        setmyArray([])  // it means setmyArray becomes empty array
    }

    return (
        <>
            {/* for loop the array we use map */}
            {/* curElm means current element */}
            {/* through this curElm.() we will write as many name and age we want */}
            {
                myArray.map((curElm) => {
                    return <h1 key={curElm.id}>Name: {curElm.myName} & Age: {curElm.age}</h1>
                })
            }
            <button className="btn" onClick={clearArray}>Clear</button>
        </>
    )
}

export default Usestatearray
