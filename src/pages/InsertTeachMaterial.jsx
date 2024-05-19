import React from 'react'
import InputMaterialBox from '../components/TeachMaterialComponents/InputMaterialBox'
import Header from '../components/Header/Header'
import TeacherSidebar from '../components/Sidebar/TeacherSidebar'
import '../styles/InsertTeachMaterial.css'
import InsertMaterialButton from '../components/Buttons/InsertMaterialButton'

function InsertTeachMaterial() {
  return (
    <div>
        <Header/>
        <TeacherSidebar/>
            <div className='main-content-insert-material'>
                <InputMaterialBox/>

               
               
                
            </div>
        
      
    </div>
  )
}

export default InsertTeachMaterial;
