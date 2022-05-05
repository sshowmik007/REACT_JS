// import React, { useEffect } from "react";
import CounterHook from "./CounterHook";
import UseEffect from "./UseEffect";
import Width from "./Width";


function App(){
  return(
    <div>
      <CounterHook initialCount = {0} />
      <br /> 
      <br /> 
      <UseEffect />
     
      <h1>
        WINDOW Width <Width />
      </h1>
      
      

    </div>
  )
}

export default App;