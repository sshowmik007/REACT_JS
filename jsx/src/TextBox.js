import React from 'react';

 // const buttonText = 'click me';
 const buttonText = {text : 'click me'};
 const labelText = 'enter text'

 const TextBox =()=>{
     return(
        <div>
        <label className="label" htmlFor="name">
          {labelText}
          </label>
        <input id= "name" type="text"/>
        {/* <button style="background-color: blue; color: white;"> Submit</button> */}
        <button style={{ backgroundColor: 'blue', color: 'white'}}> {buttonText.text}</button> 
      </div>    //JSX
     );
 };

export default TextBox;
