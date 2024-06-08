import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import '../styles/ContentWrapper.css';
import VicePrincipalSidebar from '../components/Sidebar/VicePrincipalSidebar';

export const TeacherMaterialViceView = () => {
  const [data, setData] = useState([
    { id: 1, nama: 'Julaaskina', nip: '197512261999031001', fileMateri: 'materi1.pdf' },
    { id: 2, nama: 'Naenar AR', nip: '197512261999031001', fileMateri: 'materi2.pdf' },
    { id: 3, nama: 'Rosma', nip: '197512261999031001', fileMateri: 'materi3.pdf' },
  ]);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/uploaded-materials`); // Merouting ke halaman UploadedMaterialsPage
  };

  const columns = useMemo(
    () => [
      { Header: 'Nama Guru', accessor: 'nama' },
      { Header: 'NIP', accessor: 'nip' },
      {
        Header: 'Aksi',
        accessor: 'actions',
        Cell: ({ row: { original } }) => (
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 flex items-center"
            onClick={() => handleButtonClick(original.nip)}
          >
            <FaCheck className="mr-2" /> Periksa
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
    data,
  });

  return (
    <div className='content-wrapper-component'>
      <Header Auth='Wakasek Kurikulum'/>
      <VicePrincipalSidebar/>
      <div className='table-container' >
        
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

export default TeacherMaterialViceView;
