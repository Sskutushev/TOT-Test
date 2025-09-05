import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingLayout from './components/LandingLayout';
import { routes } from './routes';
import MarketplaceLandingPage from './pages/MarketplaceLandingPage';

function App() {
  // Dynamic title logic (should be safe)
  useEffect(() => {
    if (navigator.language.startsWith('ru')) {
      document.title = 'ТОТ';
    } else {
      document.title = 'TOT';
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketplaceLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;