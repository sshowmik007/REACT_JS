import React,{useState} from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'

const BasicForm = () => {
    const[email,setEmail]= useState("");
    const[password,setpassword]= useState("");
    const[allentry,setAllEntry]= useState([]);

    const submitForm = (e) => {
        e.preventDefault(); //it is for preventing refresh

        // to prevent auto login we have to put an warning to fullfill the fields

        if (email && password) {
            const newEntry = {
                id: new Date().getTime().toString(),
                // email:email,
                // password:password
                // if the key and values are same,in terms of object Destructuring, we can only write one name of the Key
                email,password
            
            };
            setAllEntry([...allentry, newEntry]);
            // storing old and new all datas
            setEmail("");
            setpassword("");
        }else{
            alert("please Fill the data")
        }
        // if the user puts the data , it will login, else it will show an warning
    }

  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email"> Email </label>
                <input type="text" name='email' id='email' autoComplete='off' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Password"> Password </label>
                <input type="password" name='Password' id='Password' autoComplete='off' 
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                />
            </div>

            <button type='submit'>Login</button>

        </form>
        {/* showing the stored Datas */}
        {/* allentry is a built in function */}
        <div>
            {
                allentry.map((curElem)=>{
                    // to avoid writing curElem again and again, we can store it
                    const{id,email,password}= curElem; 
                    return(
                        // <div className='showDataStyle' key={curElem.id}>
                        //     <p>{curElem.email}</p>
                        //     <p>{curElem.password}</p>
                        // </div>
                        <div className='showDataStyle' key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>
                    )
                } )
            }
        </div>
    </>
  )
}

export default BasicForm