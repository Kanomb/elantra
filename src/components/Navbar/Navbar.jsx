import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground );

  return (
    <div className={navbar ? 'navbar_container active' : 'navbar_container' }>
      <div className="navbar_content">
        <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra" target="_blank" rel="noreferrer"><div className="logo">Elantra</div></a>
        <div className="links_container">
          <div className="links">
            <a href="#Navbar">Home</a>
            <a href="#Navbar">About</a>
            <a href="#Navbar">Versions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
