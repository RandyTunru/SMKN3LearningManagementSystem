import React from 'react';
import ReportTable from '../components/Tables/ReportTable.jsx';
import Header from '../components/Header/Header.jsx';
import {Link} from 'react-router-dom';

export const DailyReportTable = () => {
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
      Header: 'Waktu Mulai',
      accessor: 'end' // nama kolom sesuai dengan field 'city' dalam data
    },
    {
      Header: 'Bukti Dukung',
      accessor: 'evidence' // nama kolom sesuai dengan field 'city' dalam data
    }
  ];

  const data = [
    { number: '1', description: 30, class: 'New York', start:'08.00', end:'13.00', evidence:'' },
    { number: '2', description: 30, class: 'New York', start:'08.00', end:'13.00', evidence:'' },
    { number: '3', description: 30, class: 'New York', start:'08.00', end:'13.00', evidence:'' }
  ];

  return (
    <body>
    <Link to="/teacher-dashboard" className='no-underline'>
    <Header Auth="Teacher"/>
    </Link>
    <div>

    </div>
    <div>
      <h1>My Table</h1>
      <ReportTable columns={columns} data={data} />
    </div>
    </body>

  );
};


export default DailyReportTable
