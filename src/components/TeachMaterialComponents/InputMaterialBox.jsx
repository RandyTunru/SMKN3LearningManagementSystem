import React from 'react';
import './InputMaterialBox.css';
import InsertMaterialButton from '../Buttons/InsertMaterialButton';

export const InputMaterialBox = ({index}) => {
  return (
    <div className='input-material-box'>
        <h2>Materi {index} </h2>
        <InsertMaterialButton/>
        
    </div>
  )
}

export default InputMaterialBox;
