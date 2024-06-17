import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { ImCancelCircle } from "react-icons/im";
import { FaFile } from "react-icons/fa";


const MakeScheduleTable = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data tabel
  const [formData, setFormData] = useState({}); // State untuk menyimpan data input
  const [showInputs, setShowInputs] = useState(false); // State untuk menampilkan input sheet
  const [isEditing, setIsEditing] = useState(false); // State untuk menentukan apakah sedang mengedit
  const [editIndex, setEditIndex] = useState(null); // State untuk menyimpan indeks data yang sedang diedit
  const [isSaveDisabled, setIsSaveDisabled] = useState(true); // State untuk mengelola status tombol Simpan Laporan

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
    setIsEditing(false);
    setEditIndex(null);
  };

  // Fungsi untuk menambahkan data ke dalam tabel
  const addData = () => {
    const newData = { ...formData, number: data.length + 1 };
    setData([...data, newData]);
    handleCloseSheet();
  };

  // Fungsi untuk mengedit data dalam tabel
  const editData = () => {
    const updatedData = data.map((item, index) => (index === editIndex ? { ...formData, number: item.number } : item));
    setData(updatedData);
    handleCloseSheet();
  };

  // Fungsi untuk menghapus data dari tabel
  const deleteData = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  // Fungsi untuk membuka sheet input dengan data yang akan diedit
  const handleEdit = (index) => {
    setFormData(data[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowInputs(true);
  };

  // React Table hook untuk membuat tabel
  const columns = React.useMemo(
    () => [
      { Header: 'Hari', accessor: 'hari' },
      { Header: 'Jam', accessor: 'jam' },
      { Header: 'Waktu Mata Pelajaran', accessor: 'waktuMataPelajaran' },
      { Header: 'Kelas X', accessor: 'kelasX' },
      { Header: 'Kelas XI', accessor: 'kelasXI' },
      { Header: 'Kelas XII', accessor: 'kelasXII' },
      { Header: 'Actions', Cell: ({ row }) => (
        <div>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700" onClick={() => handleEdit(row.index)}>Edit</button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700" onClick={() => deleteData(row.index)}>Hapus</button>
        </div>
      )}
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
    <div className="table-container">
      {/* Tampilkan tabel */}
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

      {/* Tampilkan sheet input saat tombol "Add Data" diklik */}
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={() => setShowInputs(true)} 
          className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-700'
        >
          Tambah Data
        </button>
        {showInputs && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {isEditing ? 'Edit Data' : 'Tambah Data'}
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
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="hari" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hari</label>
                      <input
                        type="text"
                        name="hari"
                        id="hari"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Hari"
                        value={formData.hari || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="jam" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jam</label>
                      <input
                        type="text"
                        name="jam"
                        id="jam"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Jam"
                        value={formData.jam || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="waktuMataPelajaran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Waktu Mata Pelajaran</label>
                      <input
                        type="text"
                        name="waktuMataPelajaran"
                        id="waktuMataPelajaran"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Waktu Mata Pelajaran"
                        value={formData.waktuMataPelajaran || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="kelasX" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kelas X</label>
                      <input
                        type="text"
                        name="kelasX"
                        id="kelasX"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kelas X"
                        value={formData.kelasX || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="kelasXI" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kelas XI</label>
                      <input
                        type="text"
                        name="kelasXI"
                        id="kelasXI"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kelas XI"
                        value={formData.kelasXI || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="kelasXII" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kelas XII</label>
                      <input
                        type="text"
                        name="kelasXII"
                        id="kelasXII"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kelas XII"
                        value={formData.kelasXII || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={isEditing ? editData : addData} 
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isEditing ? 'Edit Data' : 'Tambah Data'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeScheduleTable;
