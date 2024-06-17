import React from 'react';

const DeleteModal = ({ show, handleClose, handleDelete, item }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Konfirmasi Hapus</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <div className="my-4">
          Apakah Anda yakin ingin menghapus {item?.description}?
        </div>
        <div className="flex justify-end">
          <button onClick={handleClose} className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">Batal</button>
          <button onClick={() => handleDelete(item.index)} className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
