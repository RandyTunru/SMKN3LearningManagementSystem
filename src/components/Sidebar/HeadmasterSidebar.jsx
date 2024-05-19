import React from 'react';
import './Sidebar.css';
import smkn3makassarLogo from '../Assets/smkn3makassar.png';

export const HeadmasterSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      </div>
      <ul className="sidebar-nav">
      <li>
          <a href="/headmaster-dashboard">
            <i className="fas fa-home"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/daily-report-teacher">
            <i className="fas fa-home"></i>
            Laporan Mengajar Harian
          </a>
        </li>
        <li>
          <a href="/teach-material">
            <i className="fas fa-book"></i>
            RPP dan Bahan Ajar
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default HeadmasterSidebar;