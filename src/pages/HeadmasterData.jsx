import React from 'react';
import Header from '../components/Header/Header';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import '../styles/Data.css';

function HeadmasterData() {
  return (
    <div>
        <Header />
        <AdminSidebar/>
        <div className='main-content-data'>
            <h4>Data kepala sekolah</h4>
            


        </div>
        
      
    </div>
  )
}

export default HeadmasterData;
