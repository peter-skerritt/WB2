import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navelement">
        <span className="material-symbols-outlined" style={{ fontSize: '70px' }}>
          menu
        </span>
        
        {/* Dropdown Menu */}
        <select className="dropdown-menu">
          <option value="home">Home</option>
          <option value="portfolio">Portfolio</option>
          <option value="cv">CV</option>
          <option value="contact">Contact</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
