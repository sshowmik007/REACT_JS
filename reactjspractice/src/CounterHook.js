import React , {useState} from 'react'

export default function CounterHook({initialCount}){
   const [count,setCount] = useState (initialCount)  
//    single number
    return (
        <div>
            <button onClick={() => setCount (prevCount => prevCount-1)}> - </button>
            <span> {count} </span>
            <button onClick={() => setCount (prevCount => prevCount+1)}> + </button>
        </div>
    )
}