import React from 'react'
import Header from '../components/Header/Header';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import '../styles/Data.css';

export const TeacherData = () => {
  return (
    <div>
        <Header/>
        <AdminSidebar/>
        <div className='main-content-data'>
        <h4>Data guru</h4>
        </div>
      
    </div>
  )
}

export default TeacherData;
