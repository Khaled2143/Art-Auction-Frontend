import React, { useState } from 'react';

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
        <div className="menu-icon" onClick={toggleNav}>
            <i className="fa fa-bars"></i>
        </div>
        <nav className={navActive? 'nav-active' : ''}>
            <div className="menu-icon" onClick={toggleNav}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="logo">
                <img src="path/to/logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
            <div className="signup-button">
                <button>Sign up</button>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;