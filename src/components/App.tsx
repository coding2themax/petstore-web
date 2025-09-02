import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AboutPage,
  ExpertGuidancePage,
  HomePage,
  PetsPage,
  ServicesPage,
  SuppliesPage,
} from "../pages";
import { Footer, Header, ThemeProvider } from "./common";
//import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pets" element={<PetsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/supplies" element={<SuppliesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expert-guidance" element={<ExpertGuidancePage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
