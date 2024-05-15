import React from 'react';
import './Sidebar.css';
import smkn3makassarLogo from '../Assets/smkn3makassar.png';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-book"></i>
            RPP dan Bahan Ajar
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-clipboard"></i>
            Laporan Mengajar Harian
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-calendar-alt"></i>
            Jadwal KBM
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;