import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          {' '}
          All forms
        </Link>
        <Link className="navbar-item" to="/fill-form/">
          fill form
        </Link>
        <Link className="navbar-item" to="/constructor/">
          {' '}
          constructor
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
