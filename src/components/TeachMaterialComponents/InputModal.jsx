import React, { useState } from 'react';

const InputModal = ({ onClose, onUpload }) => {
  const [filename, setFilename] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (file) {
      onUpload({ filename, file });
      onClose();  // Close the modal after successful upload
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-md p-4 bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Unggah Dokumen</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4">
          <form className="space-y-4" onSubmit={handleUploadClick}>
            <div>
              <label htmlFor="filename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama File</label>
              <input
                type="text"
                name="filename"
                id="filename"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={filename}
                onChange={handleFilenameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih File</label>
              <input
                type="file"
                name="file"
                id="file"
                accept="application/pdf"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={handleFileChange}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Unggah
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
