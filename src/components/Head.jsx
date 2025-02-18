
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
import { BiMenu } from 'react-icons/bi';

const Header = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="header">
      <Link to="/" className={`logo ${active === 'home' ? 'active' : ''}`}>
        Blood Bank & Donation
      </Link>
      <div className={`header-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/About" className={active === 'about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/Why" className={active === 'why' ? 'active' : ''}>
          Why Donate Blood
        </Link>
        <Link to="/Donate" className={active === 'donate' ? 'active' : ''}>
          Become A Donor
        </Link>
        <Link to="/Need" className={active === 'need' ? 'active' : ''}>
          Need Blood
        </Link>
        <Link to="/Contact" className={active === 'contact' ? 'active' : ''}>
          Contact Us
        </Link>
      </div>
      <span
        className="menu-icon"
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <BiMenu className=" cursor-pointer" />
      </span>
    </div>
  );
};

export default Header;