import React, { useState } from 'react';
import './InputMaterialBox.css';
import InputModal from './InputModal';
import ConfirmationModal from './ConfirmationModal';

const InputMaterialBox = ({ index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleUpload = () => {
    // Simulasikan proses pengunggahan file
    // Setelah file berhasil diunggah, tampilkan modal konfirmasi
    closeModal();
    showConfirmation();
  };

  return (
    <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materi {index}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Anda bisa mengunggah dokumen dari laptop atau komputer</p>
      <button
        onClick={openModal}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Unggah dokumen
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      {isModalOpen && <InputModal onClose={closeModal} onUpload={handleUpload} />}
      {isConfirmationOpen && <ConfirmationModal onClose={closeConfirmation} />}
    </div>
  );
};

export default InputMaterialBox;
