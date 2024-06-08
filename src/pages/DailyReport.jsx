import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { ImCancelCircle } from "react-icons/im";
import { FaFile } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../styles/ContentWrapper.css';
import Header from '../components/Header/Header';
import DeleteModal from '../components/Modal/DeleteModal';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar';


export const DailyReport = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [showInputs, setShowInputs] = useState(false);
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSaveDisabled(data.length === 0);
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSheet = () => {
    setShowInputs(false);
    setFormData({});
    setFile(null);
    setIsEditing(false);
    setEditIndex(null);
  };

  const addData = () => {
    const newData = { ...formData, number: data.length + 1, file: file };
    setData([...data, newData]);
    handleCloseSheet();
  };

  const editData = () => {
    const updatedData = data.map((item, index) => (index === editIndex ? { ...formData, number: item.number, file: file } : item));
    setData(updatedData);
    handleCloseSheet();
  };

  const deleteData = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowInputs(true);
  };

  const saveReport = () => {
    console.log('Laporan disimpan:', data);
  };

  const columns = React.useMemo(
    () => [
      { Header: 'Hari', accessor: 'day' },
      { Header: 'Tanggal', accessor: 'date' },
      { Header: 'Status', accessor: 'status' },
      {
        Header: 'Aksi',
        accessor: 'actions',
        Cell: ({ row: { index } }) => (
          <div>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700" onClick={() => handleEdit(index)}>Edit</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700" onClick={() => deleteData(index)}>Hapus</button>
          </div>
        )
      },
      {
        Header: 'Bukti Dukung',
        accessor: 'file',
        Cell: ({ row: { original } }) => (
          original.file && <FaFile className='text-gray-800' />
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
  } = useTable({
    columns,
    data
  });

  return (
    <div className="content-report-table-wrapper">
      <Header/>
      <TeacherSidebar/>
    <div className="table-container">
    <h3 class="text-3xl font-extrabold dark:text-gray">Buat Laporan Harian Anda di sini</h3>
      <table className="table" {...getTableProps()}>
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
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex space-x-4 mt-4">
        <button 
          onClick={() => navigate('/daily-report-table')} 
          className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-700'
        >
          Buat Laporan Harian
        </button>
      </div>
    </div>
    </div>
  );
};

export default DailyReport;
