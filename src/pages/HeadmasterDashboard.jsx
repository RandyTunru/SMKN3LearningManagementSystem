import React from 'react';
import {Header} from '../components/Header/Header.jsx';
import DashboardBox from "../components/Dashboard/DashboardBox.jsx";
import Photo from "../components/Assets/schoolpict.png";
import '../styles/Dashboard.css'
import Report from '../components/Assets/report.png';
import TeachMaterial from '../components/Assets/book.png';
import { Link } from "react-router-dom";



export const HeadmasterDashboard = () => {
  return (
    <body>
    <div class="dashboard-wrapper">
    <Link to="/headmaster-dashboard" className='no-underline'>
    <Header Auth="Teacher"/>
    </Link>
    </div>
    <div>
    <img className="school-pict"src={Photo} alt="smkn3picture"/>
    </div>
    
    <div className="content-wrapper">
    <tr>
        <th><Link to="/daily-report-teacher" className='no-underline'><DashboardBox className="box-menu" Text="Laporan Mengajar Harian" src={Report} imageSize="100px"/></Link></th>
        <th><Link to="/teach-material" className='no-underline'><DashboardBox className="box-menu" Text="RPP dan Bahan Ajar" src={TeachMaterial} imageSize="100px"/></Link></th>
        
    </tr>
    </div>
    </body>
   
  )
}

export default HeadmasterDashboard;
