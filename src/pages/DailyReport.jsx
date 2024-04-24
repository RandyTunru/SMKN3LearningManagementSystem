import React from 'react';
import {Header} from '../components/Header/Header.jsx';
import {ReportBox} from '../components/Teacher/ReportBox.jsx';
import {MonthList} from '../components/Teacher/MonthList.jsx';
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';


export const DailyReport = () => {
  return (
    <body>
        <Link to="/teacher-dashboard" className='no-underline'>
        <Header Auth="Teacher"/>
        </Link>
        <MonthList/>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>
        <Link to="/daily-report-table" className='no-underline'><ReportBox/></Link>

      
    </body>
  )
}

export default DailyReport;
