import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>🐾 PetStore Web</h1>
            <p className="tagline">Your Trusted Pet Companion</p>
          </div>
          
          <nav className="navigation">
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/pets" 
                  className={`nav-link ${location.pathname === '/pets' ? 'active' : ''}`}
                >
                  Pets
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/supplies" 
                  className={`nav-link ${location.pathname === '/supplies' ? 'active' : ''}`}
                >
                  Supplies
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="search-btn" aria-label="Search">
              🔍
            </button>
            <button className="cart-btn" aria-label="Shopping Cart">
              🛒
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
