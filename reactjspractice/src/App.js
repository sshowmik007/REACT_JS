import React,{useState} from 'react'
import './App.css'
import {Button} from '@mui/material'
import RulesHook from './component/rulesHook'
import UseStaetArray from './component/UseStaetArray'
import UseStateObject from './component/UseStateObject'
import ShortCircuitEval from './component/ShortCircuitEval'
import BasicForm from './component/forms/BasicForm'
import UseEffect1 from './component/useEffect/useEffect1'
import UseEffect2 from './component/useEffect/UseEffect2'
import Uncontrolled from './component/useEffect/Uncontrolled'
import UseReducer from './component/useReducer/UseReducer'
import ComA from './component/useContext/ComA'

const App = () => {
  // console.log(useState())

// var val= ' Sadman'
const [myName,setMyName] = useState('Sadman Showmik')

const changeName= () =>{
   let val= myName;
//turnery operator
( val === 'Sadman Showmik')?
  setMyName('I am from BD') : setMyName('Sadman Showmik');
}
//   if(val === 'Sadman Showmik'){
//     setMyName('I am from BD')
//   }else{
//     setMyName('Sadman Showmik')
//   }
// }

  return (
    <div>
    {/* <h1>{myName}</h1>
    <Button variant="contained" onClick={changeName}>Click Now</Button>
    <RulesHook />  */}
    {/* <UseStaetArray/>
    <UseStateObject/> */}

    {/* <ShortCircuitEval /> */}

    {/* <BasicForm /> */}
    
    {/* <UseEffect1 /> */}
    {/* <UseEffect2 /> */}
    
   {/* < Uncontrolled /> */}

    {/* <UseReducer /> */}

    <ComA />

    </div>
  )
}

export default App