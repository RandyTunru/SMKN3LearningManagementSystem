import React from 'react';
import './Login.css';
import '../Header/Header.jsx';
import  smkn3makassarLogo from '../Assets/smkn3makassar.png';
import {Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';


export const Login = () => {
  return (
    <body>
    <Header Auth=""/>
    <div className="login-wrapper">
      <h1>Welcome to Learning Management System</h1>
      <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      <form action="login">
        <div>
         
          <input type="text" className="input-box" placeholder='Username' required />
        </div>
        <div>
          <input type="password" className="input-box" placeholder='Password' required />
          
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
    </body>
   
    
  )
}
export default Login;