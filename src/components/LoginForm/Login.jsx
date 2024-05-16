import React, {useState} from 'react';
import './Login.css';
import '../Header/Header.jsx';
import  smkn3makassarLogo from '../Assets/smkn3makassar.png';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../Header/Header.jsx';


const userData = {
  admin: '123456',
  teacher: '123456',
  headmaster: '123456',
  viceprincipal: '123456',
};

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); //mencegah pembaruan halaman default
    if (!username || !password) {
      //validasi: username & password required
      setError('Username dan password harus diisi');
  
    } else if (userData[username] === password){
      //login berhasil
      setError('');
      redirectToPage(username);
    } else {
      //username atau password salah
      setError('Username atau password salah');
    }
  };

  const redirectToPage = (username) => {
    switch (username) {
      case 'admin':
        navigate('/dashboard');
        break;
      case 'teacher':
        navigate('/teacher-dashboard');
        break;
      case 'headmaster':
        navigate('/headmaster-dashboard');
        break;
      case 'viceprincipal':
        navigate('/vice-principal-dashboard');
        break;
      default:
        //jika username tidak cocok dengan peran yang diketahui
        setError('Peran pengguna tidak dikenali');
    }
  };

  

  return (
    <body>
      <div className='header-login'>
        <h2>Learning Management System</h2>
      </div>
      <div className="login-wrapper">
        <h1>Welcome to Learning Management System</h1>
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
        <form action="login">
          <div>
            <input 
            type="text" 
            className="input-box" 
            placeholder='Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input 
            type="password" 
            className="input-box" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            
          </div>
          {/* <div className='remember-forgot'>
            <label><input type="checkbox"/> Remember me</label>
            <a href='#'>Forgot password?</a>
          </div> */}
          
          <button className="login-button" onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
          
        </form>
      </div>
    </body>
  )
}
export default Login;