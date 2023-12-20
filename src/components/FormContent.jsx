import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import Signup from './Signup';
function FormContent() {

  const [name,setName] = useState()
  const [password,setPassword] = useState([])

  return (
    <div>

        <form  className='form' style={{flexDirection:"column"}}>
            <div className=' d-block mx-auto w-50 p-1'>
            <label className='form-label' htmlFor='username'>username</label>
            <input type="text" name="username" id='username' className='form-control' placeholder='enter your username' onInput={(e)=>{
              setName(e.target.value);
            }}/> <span id='name-check' className='check'></span>

            </div>  
            <div className=' d-block mx-auto w-50 p-1'>

            <label className='form-label'>Password</label>
            <input type="password" id='password' name="password" className='form-control' placeholder='enter your password' onInput={(e)=>{
              setPassword(e.target.value);
            }} /> <span className='check' id='password-check'></span>
            </div>
            <input type="submit" value="Login"  className='btn btn-primary d-block mx-auto w-25 mt-3 shadow' onClick={(e)=>{
 // Function to validate username using regex
function validateUsername(username) {
  return /^[a-zA-Z0-9\s]+$/.test(username);
}

// Function to validate password using regex
function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// Your form submission function

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Validate username
  if (username === "" || !validateUsername(username)) {
    e.preventDefault();
    document.getElementById('name-check').innerHTML = "Invalid username";
    document.getElementById('username').style.border = "1px solid red";
  } else {
    e.preventDefault();
    document.getElementById('name-check').innerHTML = "";
    document.getElementById('username').style.border = "1px solid grey";
  }

  // Validate password
  if (password === "") {
    e.preventDefault();

    document.getElementById('password-check').innerHTML = "Invalid password";
    document.getElementById('password').style.border = "1px solid red";
  } else if (password.length < 8 || !validatePassword(password)) {
    e.preventDefault();

    document.getElementById('password-check').innerHTML = "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit.";
    document.getElementById('password').style.border = "1px solid red";
  } else {
    document.getElementById('password-check').innerHTML = "";
    document.getElementById('password').style.border = "1px solid grey";
  }


    // post data to database
    

  }}/><br />

         <p className='text-center'>Don't have an account <Link to={'/Signup'}> Sign Up</Link>
            </p>

        </form>
    </div>
  )
}

export default FormContent