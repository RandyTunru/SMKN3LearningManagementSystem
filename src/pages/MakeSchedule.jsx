import React from 'react';
import ScheduleManager from '../components/ScheduleComponents/ScheduleManager';
import Header from '../components/Header/Header';
import VicePrincipalSidebar from '../components/Sidebar/VicePrincipalSidebar';
import '../styles/Dashboard.css';
export const MakeSchedule = () => {
  return (
    <div>
        <Header/>
        <div className='sidebar-and-content'>
        <VicePrincipalSidebar/>
        <div className='content'>
        <ScheduleManager/>
        </div>
        </div>
    </div>
  )
}

export default MakeSchedule;
