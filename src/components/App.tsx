import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './common';
import { HomePage, PetsPage, ServicesPage, SuppliesPage, AboutPage } from '../pages';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/supplies" element={<SuppliesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
