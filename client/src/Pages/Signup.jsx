import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <form>
      <h1>Create an Account</h1>
      <label>
        <div>Username:</div>
        <input type='text' placeholder='Username*'/>
      </label>
      <label>
        <div>Email:</div>
        <input type='email' placeholder='Username*'/>
      </label>
      <label>
        <div>Password:</div>
        <input type='password' placeholder='Password*'/>
      </label> 
      <label>
        <button>Sign Up</button>
      </label>
      <div>Already Registered?  Just <Link to={'/login'} ><span>Log In</span></Link></div>

    </form>
  )
}

export default SignUp
