import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <form>
      <h1>Log In</h1>
      <label>
        <div>Username:</div>
        <input type='text' placeholder='Username*'/>
      </label>
      <label>
        <div>Password:</div>
        <input type='password' placeholder='Password*'/>
      </label> 
      <label>
        <button>Log In</button>
      </label>
      <div>Don't have an account? <Link to={'/signup'} ><span>Sign Up</span></Link></div>
    </form>
  )
}

export default Login
