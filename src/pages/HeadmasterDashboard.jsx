import React from 'react';
import {Header} from '../components/Header/Header.jsx';
import DashboardBox from "../components/Dashboard/DashboardBox.jsx";
import Photo from "../components/Assets/schoolpict.png";
import '../styles/Dashboard.css'
import Report from '../components/Assets/report.png';
import TeachMaterial from '../components/Assets/book.png';
import { Link } from "react-router-dom";
import HeadmasterSidebar from '../components/Sidebar/HeadmasterSidebar.jsx';

export const HeadmasterDashboard = () => {
  return (
    <div className="dashboard-wrapper">
    <Header Auth="Headmaster" />
    <div className="sidebar-and-content">
        <HeadmasterSidebar />
        <div className="content">
            <img className="school-pict" src={Photo} alt="smkn3picture" />
            <div className="content-wrapper">
                <div className="flex-container">
                    <Link to="/teach-material-vice-view" className='no-underline'><DashboardBox className="box-menu" Text="RPP dan Bahan Ajar" src={TeachMaterial} imageSize="80px"/></Link>
                    <Link to="/daily-report-teacher-for-vice-view" className='no-underline'><DashboardBox className="box-menu" Text="Laporan Mengajar Harian" src={Report} imageSize="80px"/></Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeadmasterDashboard;