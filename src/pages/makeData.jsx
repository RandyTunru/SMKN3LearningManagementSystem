import React from 'react';

export const User = ({ id, firstName, lastName, nisn, sex, grade }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {firstName} {lastName}</p>
      <p>NISN: {nisn}</p>
      <p>Jenis Kelamin: {sex}</p>
      <p>Kelas: {grade}</p>
      
    </div>
  );
};

export const fakeData = [
  {
    id: '9s41rp',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    sex: 'Male',
    grade: 'X TKJ 1',
    
  },
  {
    id: '08m6rx',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    sex: 'Male',
    grade: 'X TKJ 1',
    
  },
  {
    id: '5ymtrc',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    sex: 'Male',
    grade: 'X TKJ 1',
   
  },
  {
    id: 'ek5b97',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    sex: 'Male',
    grade: 'X TKJ 1',
    
  },
  {
    id: 'xxtydd',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    sex: 'Male',
    grade: 'X TKJ 1',
    
  },
]

export const grade = [
    'X BKP',
    'X DPIB',
    'X TKR 1',
    'X TKR 2',
    'X TKR 3',
    'X TITL 1',
    'X TITL 2',
    'X TITL 3',
    'X TKJ 1',
    'X TKJ 2',
    'X TKJ 3',
    'X TESHA',
    'X LAS'

  ];