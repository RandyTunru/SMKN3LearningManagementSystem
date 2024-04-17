import React, {useState} from 'react';
import { useTable } from 'react-table';
import '../Tables/ReportTable.css';

const ReportTable = ({ columns }) => {
  const [data, setData] = useState([]); // State untuk menyimpan data tabel
  const [formData, setFormData] = useState({}); // State untuk menyimpan data input

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menambahkan data ke dalam tabel
  const addData = () => {
    setData([...data, formData]); // Menambahkan data baru ke dalam state data
    setFormData({}); // Mereset state formData setelah data ditambahkan
  };  
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
        <div className="table-container"> {/* Tambahkan kelas CSS untuk margin */}
        
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
          <div>
        {/* Input untuk setiap kolom data */}
        <input 
          type="number" 
          name="number" 
          placeholder="Nomor" 
          value={formData.number || ''} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Deskripsi" 
          value={formData.description || ''} 
          onChange={handleInputChange} 
        />
         <input 
          type="text" 
          name="class" 
          placeholder="Kelas" 
          value={formData.class || ''} 
          onChange={handleInputChange} 
        />
         <input 
          type="text" 
          name="start" 
          placeholder="Waktu Mulai" 
          value={formData.start || ''} 
          onChange={handleInputChange} 
        />
         <input 
          type="text" 
          name="end" 
          placeholder="Waktu Selesai" 
          value={formData.end || ''} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="evidence" 
          placeholder="Bukti Dukung" 
          value={formData.evidence || ''} 
          onChange={handleInputChange} 
        />
        <button onClick={addData}>Add Data</button>
      </div>
        </div>
      );
};

export default ReportTable;
