// step 01
// import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import Time from "./Time";
import TextBox from "./TextBox";
// step 02
// Create a react component
// let getButtonText = () =>{
//   return 'click on me'
// }
const App = () =>{
  return (
     <div>
       <Time/>
       <TextBox/>
       <Time/>
       <TextBox/>
       <Time/>
       <TextBox/>
     </div>
     
    );
};

// step 03
// take the react component and show it on screen
ReactDOM.render(
  <App/>, 
  document.querySelector('#root')  //DOM ELEMENT
  
);


