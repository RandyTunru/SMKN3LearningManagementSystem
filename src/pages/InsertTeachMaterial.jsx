import React, {useState} from 'react';
import InputMaterialBox from '../components/TeachMaterialComponents/InputMaterialBox'
import Header from '../components/Header/Header'
import TeacherSidebar from '../components/Sidebar/TeacherSidebar'
import '../styles/InsertTeachMaterial.css'
import InsertMaterialButton from '../components/Buttons/InsertMaterialButton'

function InsertTeachMaterial() {
  
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([...boxes, boxes.length]);
  }
  return (
    <div>
        <Header Auth='Teacher'/>
        <TeacherSidebar/>
    <div className='main-content-insert-material'>
       <div className="container mx-auto p-4">
       <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Materi dan Bahan Ajar </h4>
      <button
        onClick={addBox}
        className="mb-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Upload Materi
      </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {boxes.map((index) => (
          <InputMaterialBox key={index} index={index + 1} />
        ))}
      </div>
    
   </div>
        
      
    </div>
  )
}

export default InsertTeachMaterial;
