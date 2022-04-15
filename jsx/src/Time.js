import React from 'react';

const Time= () =>{
      function getTime(){
        return (new Date()).toLocaleDateString()
                        }
      return(
        <div>
          <div>Current time:</div>
          <h3> {getTime()} </h3>
        </div>
      );
    }

    export default Time;