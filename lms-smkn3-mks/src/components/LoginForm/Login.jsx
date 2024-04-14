import React from 'react';
import './Login.css';
import '../Header/Header.jsx';
import { FaUser, FaLock } from "react-icons/fa";
import  smkn3makassarLogo from '../Assets/smkn3makassar.png';
import {Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div>
    <div className='header'>
       <h2>Learning Management System</h2>
    </div>
    <div className='main-wrapper'>

    <div className="login-wrapper">
      <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      <form action="login">
        <h1>Login</h1>
        <div>
          <FaUser className='icon'/>
          <input type="text" className="input-box" placeholder='Username' required />
        </div>
        <div>
          <input type="password" className="input-box" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type="checkbox"/> Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <Link to='/Dashboard'>
        <button className="login-button" type="submit">Login</button>
        </Link>
      </form>
    </div>
    
    <div className='wrapper-2'>
      <h1>Welcome To LMS SMKN 3 Makassar</h1>
    </div>
    </div>
    </div>
    
  )
}
export default Login;