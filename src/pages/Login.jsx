import React from 'react'
import { Link } from 'react-router-dom'
import "../style.scss"
const Login = () => {
  return (
    <div className='auth'>
      <form>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button >Login</button>
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
      </form> 
    </div>
  )
}

export default Login