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
        navigate('/dashboard-admin');
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
      <div className='header-login flex items-center pl-4'>
        <h2>Learning Management System</h2>
      </div>
      <div className="login-wrapper">
        <h1>Welcome to Learning Management System</h1>
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
        
        

<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input 
    type="password" 
    id="password" 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required  />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}>Submit</button>
           {error && <p className="error-message">{error}</p>}
</form>

      </div>
    </body>
  )
}
export default Login;