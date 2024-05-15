import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Box from '../components/TeachMaterialComponents/Box';
import '../styles/TeachMaterial.css';
import LearningPlanIcon from '../components/Assets/rpp.png'
import TeachMaterialIcon from '../components/Assets/teach-material.png';
import {Link} from 'react-router-dom';

function TeachMaterial() {
  return (
    <div>
        <Header Auth="Teacher"/>
        <Sidebar/>
        <div className='content-wrapper-teach'>
          <h2>Kumpulkan Dokumen</h2>
        <div className='box-wrapper'>
        <Box src={TeachMaterialIcon} text="Materi Bahan Ajar" link='/teach-material-insert-page'/>
        <Box src={LearningPlanIcon} text="RPP" link='/learning-plan-insert-page'/>
          
        </div>
        </div>
        
    </div>
  )
}

export default TeachMaterial;
