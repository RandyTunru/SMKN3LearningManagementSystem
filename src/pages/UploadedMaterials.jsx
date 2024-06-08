import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import VicePrincipalSidebar from '../components/Sidebar/VicePrincipalSidebar';
import '../styles/ContentWrapper.css';

const UploadedMaterialsPage = () => {
  const [materials, setMaterials] = useState([
    { id: 1, namaMateri: 'Materi 1', fileMateri: 'materi1.pdf' },
    { id: 2, namaMateri: 'Materi 2', fileMateri: 'materi2.pdf' },
    { id: 3, namaMateri: 'Materi 3', fileMateri: 'materi3.pdf' },
  ]);

  const columns = useMemo(
    () => [
      { Header: 'Nama Materi', accessor: 'namaMateri' },
      {
        Header: 'Aksi',
        accessor: 'actions',
        Cell: ({ row: { original } }) => (
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => handleViewFile(original.fileMateri)}
          >
            Lihat File
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: materials,
  });

  const handleViewFile = (file) => {
    // Logika untuk menampilkan file, bisa berupa navigasi ke URL file atau menggunakan modal
    window.open(`/path/to/files/${file}`, '_blank');
  };

  return (
    <div className='content-wrapper-component' >
    <Header/>
    <VicePrincipalSidebar/>
    <div className='table-container'>
      <h2 class="text-3xl font-extrabold dark:text-gray">Tabel Kumpulan Materi</h2>
      
      <table className="min-w-full bg-white" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="py-3 px-6 text-left">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-3 px-6 text-left">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UploadedMaterialsPage;
