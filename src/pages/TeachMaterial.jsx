import React from 'react';
import Header from '../components/Header/Header';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar';
import Box from '../components/TeachMaterialComponents/Box';
import '../styles/TeachMaterial.css';
import LearningPlanIcon from '../components/Assets/rpp.png'
import TeachMaterialIcon from '../components/Assets/teach-material.png';
import {Link} from 'react-router-dom';

function TeachMaterial() {
  return (
    <div>
        <Header Auth="Teacher"/>
        <TeacherSidebar/>
        <div className='content-wrapper-teach' >

        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kumpulkan Dokumen</h3>
        <p class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Box src={TeachMaterialIcon} text="Materi Bahan Ajar" link='/teach-material-insert-page'/>
        <Box src={LearningPlanIcon} text="RPP" link='/learning-plan-insert-page'/>

<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</p>
        </div>
        
    </div>
  )
}

export default TeachMaterial;
