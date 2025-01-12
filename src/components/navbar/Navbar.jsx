import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import msu from '../../assets/logos/msu.png';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={msu} alt="MSU Logo" />
        <span>Clubs Portal</span>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link
          to="/clubs"
          className={location.pathname.includes('/clubs') ? 'active' : ''}
        >
          Clubs
        </Link>
        <Link
          to="/events"
          className={location.pathname.includes('/events') ? 'active' : ''}
        >
          Events
        </Link>
        {isLoggedIn ? (
          <Link to="/logout" className="auth-btn">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" className="auth-btn">
              Login
            </Link>
            <Link to="/signup" className="auth-btn">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
