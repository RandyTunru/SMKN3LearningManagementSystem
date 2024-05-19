import React, {useState} from "react";
import '../Assets/smkn3makassar.png';
import './Header.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";



export const Header = ({Auth, dashboardPage}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return(
    <header className='header'>
      <div className='left-side'>
        <div className="menu-button">
        </div>
        <h2>
          <Link to={dashboardPage} className="no-underline">
          Learning Management System
          </Link>
        </h2>
      </div>
      <div className="right-side">
        <div className="dropdown">
          <div className="dropdown-text">
            <h2 onClick={toggleDropdown} >
              {Auth} 
            </h2>
            <IoMdArrowDropdown className="btn-dropdown" size={30}/>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Place your dropdown content here */}
              <ul>
                <Link to="/login" className="no-underline-link"><li>Logout</li></Link>
                <Link to="/profile-setting"><li>Setting</li></Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
    
  );

}
export default Header;