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
      <IoMdArrowDropdown className="btn-dropdown"size={30}/>
    </div>
    </div>
    
  );

}
export default Header;