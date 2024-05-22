import React from 'react';
import './Box.css';
import { useNavigate } from 'react-router-dom';


export const Box = ({src,text, link}) => {

  const navigate = useNavigate();

  const handleCollectButton = () => {
    // Ganti '/halaman-tujuan' dengan path halaman tujuan
    navigate(link);
  };
  
  return (
    <div>
        <div className="assignment-box">
         <img className="icon-book" alt="icon" src={src}/>
         <h3>{text}</h3>
         <button type="button" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleCollectButton}>Kumpulkan</button>
        </div>
       
       
      
    </div>
  )
}

export default Box;
