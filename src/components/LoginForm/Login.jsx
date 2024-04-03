import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import Header from '../Header/Header';
import  smkn3makassarLogo from '../Assets/smkn3makassar.png'


export const Login = () => {
  return (
    <div className='main-wrapper'>
    <div className='header'>
    <h2>
      Learning Management System
    </h2>
    </div>
    <div className="logo">
      
    </div>
    <div className="wrapper">
      <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      <form action="login">
        <h1>Login</h1>
        <div>
          <input type="text" className="input-box" placeholder='Username' required />
          <FaUser className='icon'/>
        </div>
        <div>
          <input type="password" className="input-box" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type="checkbox"/> Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}
export default Login;