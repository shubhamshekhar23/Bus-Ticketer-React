import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="header__nav-container">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Bus Ticketer
        </Link>
        <div className="nav-menu">
          <div className="nav-item" onClick={toggleDropdown}>
            Menu
            {showDropdown && (
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/">
                  Dashboard
                </Link>
                <Link
                  className="dropdown-item"
                  to="/Bus-Ticketer-React/reservation"
                >
                  Reservation
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
