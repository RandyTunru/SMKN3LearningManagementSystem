import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '../styles/ContentWrapper.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../components/Header/Header';
import AdminSidebar from '../components/Sidebar/AdminSidebar';

const initialFormData = {
  name: '',
  class: '',
  gender: '',
};

const initialValidationErrors = {
  name: '',
  class: '',
  gender: '',
};

const initialEditData = {
  index: null,
  formData: { ...initialFormData },
};

const initialDialogState = {
  isOpen: false,
  mode: 'add',
};

const initialData = [
  { id: 1, name: 'John Doe', class: '10A', gender: 'Male' },
  { id: 2, name: 'Jane Smith', class: '11B', gender: 'Female' },
];

const StudentTable = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [validationErrors, setValidationErrors] = useState({ ...initialValidationErrors });
  const [editData, setEditData] = useState({ ...initialEditData });
  const [dialogState, setDialogState] = useState({ ...initialDialogState });

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setValidationErrors({ ...initialValidationErrors });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = { ...initialValidationErrors };
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.class.trim()) {
      errors.class = 'Class is required';
    }
    if (!formData.gender.trim()) {
      errors.gender = 'Gender is required';
    }
    setValidationErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleAdd = () => {
    if (validateForm()) {
      setData([...data, { id: Date.now(), ...formData }]);
      resetForm();
      setDialogState({ ...initialDialogState });
    }
  };

  const handleEditOpen = (index) => {
    setEditData({ index, formData: { ...data[index] } });
    setDialogState({ isOpen: true, mode: 'edit' });
  };

  const handleEdit = () => {
    if (validateForm()) {
      setData(data.map((item, index) => (index === editData.index ? formData : item)));
      resetForm();
      setEditData({ ...initialEditData });
      setDialogState({ ...initialDialogState });
    }
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className='content-wrapper-component'>
      <Header Auth='Admin'/>
      <AdminSidebar/>
      <div className="header-for-table">
      <h2 className="font-bold py-2 mx-auto mt-50 p-4 ">Daftar Siswa di SMKN 3 Makassar</h2>
      </div>
    <div className="container mx-auto mt-50 p-4 content-wrapper-component">
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setDialogState({ isOpen: true, mode: 'add' })}
      >
        Add Student
      </button>
      <Dialog open={dialogState.isOpen} onClose={() => setDialogState({ ...initialDialogState })}>
        <DialogTitle>{dialogState.mode === 'add' ? 'Add Student' : 'Edit Student'}</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!validationErrors.name}
            helperText={validationErrors.name}
            fullWidth
            margin="normal"
          />
          <TextField
            name="class"
            label="Class"
            value={formData.class}
            onChange={handleInputChange}
            error={!!validationErrors.class}
            helperText={validationErrors.class}
            fullWidth
            margin="normal"
          />
          <TextField
            name="gender"
            label="Gender"
            value={formData.gender}
            onChange={handleInputChange}
            error={!!validationErrors.gender}
            helperText={validationErrors.gender}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <button onClick={dialogState.mode === 'add' ? handleAdd : handleEdit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            {dialogState.mode === 'add' ? 'Add' : 'Save'}
          </button>
          <button onClick={() => setDialogState({ ...initialDialogState })} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </DialogActions>
      </Dialog>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="px-4 py-2">Name</TableCell>
              <TableCell className="px-4 py-2">Class</TableCell>
              <TableCell className="px-4 py-2">Gender</TableCell>
              <TableCell className="px-4 py-2">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell className="border px-4 py-2">{student.name}</TableCell>
                <TableCell className="border px-4 py-2">{student.class}</TableCell>
                <TableCell className="border px-4 py-2">{student.gender}</TableCell>
                <TableCell className="border px-4 py-2">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEditOpen(index)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};

export default StudentTable;
