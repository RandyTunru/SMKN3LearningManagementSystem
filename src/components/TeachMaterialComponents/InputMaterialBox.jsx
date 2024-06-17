import React, { useState } from 'react';
import './InputMaterialBox.css';
import InputModal from './InputModal';
import ConfirmationModal from './ConfirmationModal';

const InputMaterialBox = ({ index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile)); // Generate a URL for the file
    setValidationMessage(''); // Clear validation message on new file selection
  };

  const handleUpload = ({ filename, file }) => {
    if (!file) {
      setValidationMessage('File harus ada');
      return;
    }
    setFilename(filename);
    setFile(file);
    closeModal();
    showConfirmation();
  };

  return (
    <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materi {index}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Anda bisa mengunggah dokumen dari laptop atau komputer
      </p>
      {file && (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          File: {file.name}
        </p>
      )}
      {file && (
        <a
          href={fileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Lihat Dokumen
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6" />
          </svg>
        </a>
      )}
      <button
        onClick={openModal}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {file ? 'Ganti dokumen' : 'Unggah dokumen'}
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      {isModalOpen && (
        <InputModal onClose={closeModal} onUpload={handleUpload}>
          <div>
            <label htmlFor="filename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama File</label>
            <input
              type="text"
              id="filename"
              onChange={(e) => setFilename(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={filename}
              required
            />
          </div>
          <div>
            <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload File</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          {validationMessage && <p className="text-red-500">{validationMessage}</p>}
        </InputModal>
      )}
      {isConfirmationOpen && <ConfirmationModal onClose={closeConfirmation} />}
    </div>
  );
};

export default InputMaterialBox;
