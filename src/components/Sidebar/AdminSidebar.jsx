import React from 'react';
import './Sidebar.css';
import smkn3makassarLogo from '../Assets/smkn3makassar.png';

export const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="/dashboard-admin">
            <i className="fas fa-home"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/data-siswa">
            <i className="fas fa-book"></i>
            Data Siswa
          </a>
        </li>
        <li>
          <a href="/data-guru">
            <i className="fas fa-clipboard"></i>
            Data Guru
          </a>
        </li>
        <li>
          <a href="/data-kepala-sekolah">
            <i className="fas fa-calendar-alt"></i>
            Data Kepala Sekolah
          </a>
        </li>
        <li>
          <a href="/data-wakasek-kurikulum">
            <i className="fas fa-calendar-alt"></i>
            Data Wakasek Kurikulum
          </a>
        </li>
        <li>
          <a href="/rekapitulasi-presensi">
            <i className="fas fa-calendar-alt"></i>
            Rekapitulasi Presensi Siswa
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;