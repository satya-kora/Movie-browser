import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1>Movie Browser</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorite List</Link>
      </nav>
    </header>
  );
}

export default Header;
