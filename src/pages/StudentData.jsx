import React from 'react';
import Header from '../components/Header/Header';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import { useTable } from 'react-table';
import '../styles/Data.css';



const StudentData = () => {
  const data = React.useMemo(
    () => [
      {
        nama: 'John Doe',
        nisn: '1234567890',
        jenisKelamin: 'Laki-laki',
        kelas: '12A'
      },
      {
        nama: 'Jane Smith',
        nisn: '0987654321',
        jenisKelamin: 'Perempuan',
        kelas: '11B'
      },
      // Tambahkan data siswa lainnya di sini
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nama',
        accessor: 'nama'
      },
      {
        Header: 'NISN',
        accessor: 'nisn'
      },
      {
        Header: 'Jenis Kelamin',
        accessor: 'jenisKelamin'
      },
      {
        Header: 'Kelas',
        accessor: 'kelas'
      },
      {
        Header: 'Aksi',
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleEdit(row.original)}>Edit</button>
            <button onClick={() => handleDelete(row.original)}>Delete</button>
          </div>
        )
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const handleEdit = (student) => {
    // Logika untuk meng-handle edit data siswa
    console.log("Edit", student);
  };

  const handleDelete = (student) => {
    // Logika untuk meng-handle hapus data siswa
    console.log("Delete", student);
  };

  return (
    <div>
      <Header />
      <AdminSidebar />
      <div className='main-content-data'>
        <h4>Data siswa</h4>
        <table {...getTableProps()} className='student-table'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentData;
