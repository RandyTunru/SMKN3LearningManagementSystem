import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { ImCancelCircle } from "react-icons/im";
import '../DailyReportTeacherComponents/ReportTable.css';
import { FaFile } from "react-icons/fa";
import DeleteModal from '../Modal/DeleteModal'; // Import DeleteModal

const ReportTable = ({ columns }) => {
  const [data, setData] = useState([]); // State untuk menyimpan data tabel
  const [formData, setFormData] = useState({}); // State untuk menyimpan data input
  const [showInputs, setShowInputs] = useState(false); // State untuk menampilkan input sheet
  const [file, setFile] = useState(null); // State untuk menyimpan file
  const [isEditing, setIsEditing] = useState(false); // State untuk menentukan apakah sedang mengedit
  const [editIndex, setEditIndex] = useState(null); // State untuk menyimpan indeks data yang sedang diedit
  const [isSaveDisabled, setIsSaveDisabled] = useState(true); // State untuk mengelola status tombol Simpan Laporan

  const [showDeleteModal, setShowDeleteModal] = useState(false); // State untuk menampilkan modal hapus
  const [itemToDelete, setItemToDelete] = useState(null); // State untuk menyimpan item yang akan dihapus

  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State untuk menampilkan modal konfirmasi
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State untuk menyimpan pesan konfirmasi

  const [fileError, setFileError] = useState(''); // State untuk menyimpan pesan error file

  useEffect(() => {
    setIsSaveDisabled(data.length === 0);
  }, [data]);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menutup sheet input data
  const handleCloseSheet = () => {
    setShowInputs(false);
    setFormData({});
    setFile(null);
    setIsEditing(false);
    setEditIndex(null);
    setFileError('');
  };

  // Fungsi untuk menambahkan data ke dalam tabel
  const addData = () => {
    if (!file) {
      setFileError('File is required');
      return;
    }
    const newData = { ...formData, number: data.length + 1, file: file }; // Setel properti file dengan nilai file yang diunggah
    setData([...data, newData]);
    handleCloseSheet();
  };

  // Fungsi untuk mengedit data dalam tabel
  const editData = () => {
    if (!file) {
      setFileError('File is required');
      return;
    }
    const updatedData = data.map((item, index) => (index === editIndex ? { ...formData, number: item.number, file: file } : item)); // Setel properti file dengan nilai file yang diunggah
    setData(updatedData);
    handleCloseSheet();
  };

  // Fungsi untuk menghapus data dari tabel
  const deleteData = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  // Fungsi untuk menangani upload file
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file); // Setel nilai file dengan file yang diunggah
    setFileError(''); // Reset error message when a file is selected
  };

  // Fungsi untuk membuka sheet input dengan data yang akan diedit
  const handleEdit = (index) => {
    setFormData(data[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowInputs(true);
  };

  // Fungsi untuk menampilkan modal hapus
  const handleShowDeleteModal = (index) => {
    setItemToDelete({ index, ...data[index] });
    setShowDeleteModal(true);
  };

  // Fungsi untuk menutup modal hapus
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  // Fungsi untuk menutup modal konfirmasi
  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    setConfirmationMessage('');
  };

  // React Table hook untuk membuat tabel
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

  // Fungsi untuk menyimpan laporan
  const saveReport = () => {
    // Logika untuk menyimpan laporan
    console.log('Laporan disimpan:', data);
    setConfirmationMessage('Laporan telah disimpan.');
    setShowConfirmationModal(true);
  };

  return (
    <div className="table-container">
      {/* Tampilkan tabel */}
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Bukti Dukung</th>
              <th>Actions</th>
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
                {/* Sel untuk ikon file */}
                <td>
                  {row.original.file && <FaFile className='text-gray-800' />}
                </td>
                {/* Bukti Dukung Cell */}
                <td>
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700" onClick={() => handleEdit(i)}>Edit</button>
                  <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700" onClick={() => handleShowDeleteModal(i)}>Hapus</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Tampilkan sheet input saat tombol "Add Data" diklik */}
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={() => setShowInputs(true)} 
          className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-700'
        >
          Tambah Data
        </button>
        <button 
          type="button" 
          onClick={saveReport} 
          className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg text-center ${isSaveDisabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`} 
          disabled={isSaveDisabled}
        >
          Simpan Laporan
        </button>
        {showInputs && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {isEditing ? 'Edit Data Laporan' : 'Tambah Data Laporan'}
                  </h3>
                  <button 
                    type="button" 
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                    onClick={handleCloseSheet}
                  >
                    <ImCancelCircle className='w-5 h-5' />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Deskripsi"
                        value={formData.description || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kelas</label>
                      <input
                        type="text"
                        name="class"
                        id="class"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kelas"
                        value={formData.class || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="start" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu Mulai</label>
                      <input
                        type="text"
                        name="start"
                        id="start"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Waktu Mulai"
                        value={formData.start || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="end" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu Selesai</label>
                      <input
                        type="text"
                        name="end"
                        id="end"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Waktu Selesai"
                        value={formData.end || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload File</label>
                      <input 
                        type="file" 
                        id="file" 
                        accept="application/pdf" 
                        onChange={handleFileUpload} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                      {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>} {/* Display error message if file is not uploaded */}
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={isEditing ? editData : addData} 
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isEditing ? 'Edit Data' : 'Add Data'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      <DeleteModal 
        show={showDeleteModal} 
        handleClose={handleCloseDeleteModal} 
        handleDelete={deleteData} 
        item={itemToDelete} 
      />

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Konfirmasi
                </h3>
                <button 
                  type="button" 
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                  onClick={handleCloseConfirmationModal}
                >
                  <ImCancelCircle className='w-5 h-5' />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{confirmationMessage}</p>
                <button 
                  type="button" 
                  onClick={handleCloseConfirmationModal} 
                  className="mt-4 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
