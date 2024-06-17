import React from 'react';
import Header from '../components/Header/Header';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar';
import Box from '../components/TeachMaterialComponents/Box';
import '../styles/TeachMaterial.css';
import LearningPlanIcon from '../components/Assets/rpp.png';
import TeachMaterialIcon from '../components/Assets/teach-material.png';
import { Link } from 'react-router-dom';

function TeachMaterial() {
  return (
    <div>
      <Header Auth="Teacher" />
      <TeacherSidebar />
      <div className='content-wrapper-teach'>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kumpulkan Dokumen</h3>
        <div className="flex-container">
          <div className="flex-item">
            <Box src={TeachMaterialIcon} text="Materi Bahan Ajar" link='/teach-material-insert-page' link2='/view-teach-material-file' />
            
            
          </div>
          <div className="flex-item">
            <Box src={LearningPlanIcon} text="RPP" link='/learning-plan-insert-page' link2='/view-rpp-file' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachMaterial;
