<<<<<<< HEAD:lms-smkn3-mks/src/components/LoginForm/Login.jsx
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
=======
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
>>>>>>> 1a78ed8e8efa725b26beb158fb1e6346f959820e:src/components/LoginForm/Login.jsx
export default Login;