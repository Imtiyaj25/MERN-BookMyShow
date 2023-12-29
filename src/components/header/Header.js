import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/React-EntertainmentApp" className="logo"><b>Enter<span>10</span>ment</b></a>
        <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/movies/popular">Popular</Link></li>
          <li><Link to="/movies/top_rated">Top Rated</Link></li>
          <li><Link to="/movies/upcoming">Upcoming</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;