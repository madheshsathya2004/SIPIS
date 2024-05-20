import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg'; // Ensure you have a logo.png file in your src folder

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data-visualization">Data</Link></li>
        <li><Link to="/map-visualization">Map</Link></li>
        <li><Link to="/report-generation">Report Generation</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

