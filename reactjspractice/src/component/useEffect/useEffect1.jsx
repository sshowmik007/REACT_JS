import React,{useEffect,useState} from 'react'

const UseEffect1 = () => {

    const [count,setCount]=useState(0);
    
    useEffect(() =>{
        (count>=1) ? document.title= `Chats (${count})`: document.title= `Chats ` ;
        console.log("hello useEffect")
        
    },[count]);


    console.log('hello outside ') //first priyority is outside one first. firstly its hows outsider effect then inside one

  return (
    <div>
        <h1> {count} </h1>
        <button className='btn' onClick={
            ()=> setCount(count+1)
        } > Click ♥ </button>
    </div>
  )
}

export default UseEffect1