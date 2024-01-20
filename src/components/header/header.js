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
        <a href="/" className="nav-logo">
          Bus Ticketer
        </a>
        <div className="nav-menu">
          <div className="nav-item" onClick={toggleDropdown}>
            Menu
            {showDropdown && (
              <div className="dropdown-content">
                <a className="dropdown-item" href="/">
                  Dashboard
                </a>
                <a className="dropdown-item" href="/reservation">
                  Reservation
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
