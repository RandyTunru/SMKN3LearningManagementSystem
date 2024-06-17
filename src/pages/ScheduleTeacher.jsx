import React from 'react'
import Header from '../components/Header/Header';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar';
import '../styles/Schedule.css';

export const ScheduleTeacher = () => {
  return (
    <div>
      <Header/>
      <TeacherSidebar/>
      <div className='content-page'>
      <h1>Jadwal Mengajar </h1>
      </div>
    </div>
  )
}

export default ScheduleTeacher
