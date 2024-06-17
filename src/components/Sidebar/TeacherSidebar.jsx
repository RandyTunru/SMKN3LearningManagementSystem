import React from 'react';
import './Sidebar.css';
import smkn3makassarLogo from '../Assets/smkn3makassar.png';

export const TeacherSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img className="logo" src={smkn3makassarLogo} alt="logo"/>
      </div>
      <ul className="sidebar-nav">
        <li>
          <a href="/teacher-dashboard">
            <i className="fas fa-home"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/teach-material">
            <i className="fas fa-book"></i>
            RPP dan Bahan Ajar
          </a>
        </li>
        <li>
          <a href="/daily-report-teacher">
            <i className="fas fa-clipboard"></i>
            Laporan Mengajar Harian
          </a>
        </li>
        <li>
          <a href="/teacher-schedule">
            <i className="fas fa-calendar-alt"></i>
            Jadwal Kegiatan Belajar Mengajar
          </a>
        </li>
        <li>
          <a href="/presensi-siswa">
            <i className="fas fa-calendar-alt"></i>
            Presensi Siswa
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeacherSidebar;