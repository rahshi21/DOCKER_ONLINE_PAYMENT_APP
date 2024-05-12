import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            KEC EVENT
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-values">
            <li className="navbar-values-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-values-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="navbar-values-item dropdown">
              <span className="dropdown-btn">More</span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/Gallery" className="nav-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navbar-values-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="navbar-values-item">
              <Link to="/display" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle">&#9776;</div>
      </nav>
    </header>
  );
};

export default Navbar;
