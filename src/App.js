import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import OurPartners from './components/OurPartners';
import Financials from './components/Financials';
import Vision2019 from './components/Vision2019';
import Expanding from './components/Expanding';
import Deepening from './components/Deepening';
import ByTheNumbers from './components/ByTheNumbers';
import BorderNavbar from './components/BorderNavbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/by-the-numbers" element={<ByTheNumbers />} />
        <Route path="/deepening" element={<Deepening />} />
        <Route path="/expanding" element={<Expanding />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/vision2019" element={<Vision2019 />} />
        <Route path="/border-navbar" element={<BorderNavbar />} />
      </Routes>
    </Router>
  );
}

export default App;
