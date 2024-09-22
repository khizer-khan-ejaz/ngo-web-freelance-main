import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [isCenterOpen, setIsCenterOpen] = useState(false);

  const toggleAreaDropdown = () => {
    setIsAreaOpen(!isAreaOpen);
    setIsCenterOpen(false);
  };

  const toggleCenterDropdown = () => {
    setIsCenterOpen(!isCenterOpen);
    setIsAreaOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            
            <div>
            
            </div>
          </div>
        </div>
      </nav>


      <nav className="main-nav">
        <div className="logo">
          <NavLink className="navbar-brand text-success logo h1 align-self-center" to="/">
            PHRMS
          </NavLink>
        </div>

        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle" onClick={toggleAreaDropdown}>Area</button>
              {isAreaOpen && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/education" onClick={toggleAreaDropdown}>Education</NavLink></li>
                  <li><NavLink to="/skills" onClick={toggleAreaDropdown}>Skills</NavLink></li>
                  <li><NavLink to="/health" onClick={toggleAreaDropdown}>Health</NavLink></li>
                  <li><NavLink to="/nutrition" onClick={toggleAreaDropdown}>Nutrition</NavLink></li>
                </ul>
              )}
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle" onClick={toggleCenterDropdown}>Center</button>
              {isCenterOpen && (
                <ul className="dropdown-menu">
                  <li><NavLink to="/center1" onClick={toggleCenterDropdown}>C-145, Hardevpuri, Delhi</NavLink></li>
                  <li><NavLink to="/center2" onClick={toggleCenterDropdown}>Trilokpuri, Delhi</NavLink></li>
                </ul>
              )}
            </li>
            <li><NavLink to="/event">Events</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
