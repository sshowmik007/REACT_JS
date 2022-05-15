import React from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = React.useState({
        myName:"Sadman SHowmik", myAge:25, degree:"BSC", rollNo: 55, Institution:"BRACU" 
    });

    const changeObject = () => {
        setMyObject({...myObject, myAge:26});
    }
    // ... three dots are spread operator. its an object and the values are stored

    return (
        <div>
            <h1 className="h1style">Name: {myObject.myName} & Age: {myObject.myAge}
            & Degree: {myObject.degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject