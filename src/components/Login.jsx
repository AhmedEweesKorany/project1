import React from 'react'
import Formheader from './Formheader'
import FormContent from './FormContent'


function Login() {
  return (
    <>   
<title>Login</title>
<div className="shadow my-5 mt-5">
  
    <Formheader header={"Let's Get Started"} description={"Welcome..please enter your details"}/>
    <FormContent/>
  </div>
    </>
  )
}

export default Login