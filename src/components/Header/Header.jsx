<<<<<<< HEAD:lms-smkn3-mks/src/components/Header/Header.jsx
import React from "react";
import '../Assets/smkn3makassar.png';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";



export const Header = ({Auth}) => {
  return(
    <div className='header'>
    <div className='left-side'>
    <div className="menu-button">
    <RxHamburgerMenu size={30}/>
    </div>
    <h2>
      Learning Management System
    </h2>
    </div>
    <div className="right-side">
      <h2>| {Auth}</h2>
      <IoMdArrowDropdown size={30}/>
    </div>
    </div>
    
  );

}
=======
import React from "react";
import '../Assets/smkn3makassar.png'

export const Header = () => {
    <div>
        <header className="header">Learning Management System</header>
    </div>

}
>>>>>>> 1a78ed8e8efa725b26beb158fb1e6346f959820e:src/components/Header/Header.jsx
export default Header;