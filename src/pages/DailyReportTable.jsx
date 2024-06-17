import React, { useState } from 'react';
import ReportTable from '../components/DailyReportTeacherComponents/ReportTable.jsx';
import Header from '../components/Header/Header.jsx';
import DailyReportProfile from '../components/DailyReportTeacherComponents/DailyReportProfile.jsx';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/DailyReportTable.css';
import { setHours, setMinutes, format } from 'date-fns';

export const DailyReportTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const columns = [
    {
      Header: 'No',
      accessor: 'number' // nama kolom sesuai dengan field 'name' dalam data
    },
    {
      Header: 'Deskripsi Kegiatan',
      accessor: 'description' // nama kolom sesuai dengan field 'age' dalam data
    },
    {
      Header: 'Kelas',
      accessor: 'class' // nama kolom sesuai dengan field 'city' dalam data
    },
    {
      Header: 'Waktu Mulai',
      accessor: 'start' // nama kolom sesuai dengan field 'city' dalam data
    },
    {
      Header: 'Waktu Selesai',
      accessor: 'end' // nama kolom sesuai dengan field 'city' dalam data
    },
  ];

  const data = [
    { number: '1', description: 30, class: 'New York', start: '08.00', end: '13.00', evidence: '' },
    { number: '2', description: 30, class: 'New York', start: '08.00', end: '13.00', evidence: '' },
    { number: '3', description: 30, class: 'New York', start: '08.00', end: '13.00', evidence: '' }
  ];

  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  return (
    <div className="content-report-table-wrapper">
      <TeacherSidebar />
      <Header Auth="Teacher" dashboardPage="/teacher-dashboard" />
      <div>
        <DailyReportProfile desc="Nama Guru" data="Julaaskina, S.Pd" />
        <DailyReportProfile desc="NIP" data="199992899800001" />
        <DailyReportProfile desc="Mata Pelajaran" data="Fisika" />
        <div>
          <label>Tanggal Laporan:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd-MM-yyyy"
            filterDate={isToday}
            disabledKeyboardNavigation
          />
        </div>
        <ReportTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DailyReportTable;
