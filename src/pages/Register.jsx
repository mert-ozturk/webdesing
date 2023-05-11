import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <form>
      <input type="text" placeholder='username'/> 
      <input type="email" placeholder='email'/>
      <input type="password" placeholder='password'/>
      <button >Register</button>
      <span>Don't you have an account? <Link to="/login">Login</Link></span>
    </form> 
  </div>
  )
}

export default Register