import React from 'react';
import './Header.css';

interface HeaderProps {
  className?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '', onNavigate, currentPage = 'home' }) => {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback for hash navigation if no onNavigate provided
      window.location.hash = `#${page}`;
    }
  };
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
                <button 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'pets' ? 'active' : ''}`}
                  onClick={() => handleNavClick('pets')}
                >
                  Pets
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                  onClick={() => handleNavClick('services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'supplies' ? 'active' : ''}`}
                  onClick={() => handleNavClick('supplies')}
                >
                  Supplies
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </button>
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
