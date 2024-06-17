import React from 'react'; 
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import './MainLayout.css';

export const MainLayout = ({children}) =>{
    return (
        <div>
        <Header />
        <div>
            <Sidebar />
            <div className="children">
                {children}
            </div>
        </div>
    </div>
    )
};

export default MainLayout;