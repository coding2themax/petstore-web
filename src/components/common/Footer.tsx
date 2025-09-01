import React from 'react';
import './Footer.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${className}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🐾 PetStore Web</h3>
            <p>Your trusted fictional pet companion for demonstration purposes.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">📘</a>
              <a href="#" aria-label="Twitter" className="social-link">🐦</a>
              <a href="#" aria-label="Instagram" className="social-link">📷</a>
              <a href="#" aria-label="YouTube" className="social-link">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#pets">Available Pets</a></li>
              <li><a href="#services">Pet Services</a></li>
              <li><a href="#supplies">Pet Supplies</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#grooming">Pet Grooming</a></li>
              <li><a href="#veterinary">Veterinary Care</a></li>
              <li><a href="#training">Pet Training</a></li>
              <li><a href="#boarding">Pet Boarding</a></li>
              <li><a href="#adoption">Pet Adoption</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Pet Street, Demo City</p>
              <p>📞 (555) 123-PETS</p>
              <p>✉️ info@petstore-demo.com</p>
              <p>🕒 Mon-Sun: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} PetStore Web - A fictional demonstration project</p>
            <div className="footer-disclaimer">
              <p>Remember: Always adopt from local shelters and rescue organizations! 🐕🐈</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
