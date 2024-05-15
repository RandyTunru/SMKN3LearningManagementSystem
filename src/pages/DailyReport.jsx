import React from 'react';
import {Header} from '../components/Header/Header.jsx';
import {ReportBox} from '../components/DailyReportTeacherComponents/ReportBox.jsx';
import {MonthList} from '../components/DailyReportTeacherComponents/MonthList.jsx';
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';
import Sidebar from '../components/Sidebar/Sidebar.jsx';


export const DailyReport = () => {
  return (
    <body>
        <Header Auth="Teacher" dashboardPage="/teacher-dashboard"/>
        <Sidebar/>
        <MonthList/>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>


      
    </body>
  )
}

export default DailyReport;
