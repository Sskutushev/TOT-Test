import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import MarketplacePage from './pages/MarketplacePage';
import PersonsPage from './pages/PersonsPage';
import ProjectsPage from './pages/ProjectsPage';
import StreamsPage from './pages/StreamsPage';
import ProfilePage from './pages/ProfilePage';
import DeskPage from './pages/DeskPage';
import MessagesPage from './pages/MessagesPage';
import FavoritesPage from './pages/FavoritesPage';
import CalendarPage from './pages/CalendarPage';
import HelpPage from './pages/HelpPage';
import NotificationsPage from './pages/NotificationsPage';
import MarketEducationPage from './pages/MarketEducationPage';
import MarketInvestPage from './pages/MarketInvestPage';
import EducationProductCoursePage from './pages/EducationProductCoursePage';
import EducationProductConsultPage from './pages/EducationProductConsultPage';

const PagePlaceholder = ({ name }) => <div style={{padding: "2rem"}}><h1>{name}</h1><p>Coming soon...</p></div>;

function App() {
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
        <Route path="/" element={<LandingPage />} />
        
        {/* Authenticated routes */}
        <Route path="/home" element={<Layout><HomePage /></Layout>} />
        <Route path="/timeline" element={<Layout><TimelinePage /></Layout>} />
        <Route path="/marketplace" element={<Layout><MarketplacePage /></Layout>} />
        <Route path="/persons" element={<Layout><PersonsPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/streams" element={<Layout><StreamsPage /></Layout>} />
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/desk" element={<Layout><DeskPage /></Layout>} />
        <Route path="/messages" element={<Layout><MessagesPage /></Layout>} />
        <Route path="/favorites" element={<Layout><FavoritesPage /></Layout>} />
        <Route path="/calendar" element={<Layout><CalendarPage /></Layout>} />
        <Route path="/help" element={<Layout><HelpPage /></Layout>} />
        <Route path="/notifications" element={<Layout><NotificationsPage /></Layout>} />
        <Route path="/market_education" element={<Layout><MarketEducationPage /></Layout>} />
        <Route path="/market_invest" element={<Layout><MarketInvestPage /></Layout>} />
        <Route path="/education_product_course" element={<Layout><EducationProductCoursePage /></Layout>} />
        <Route path="/education_product_consult" element={<Layout><EducationProductConsultPage /></Layout>} />

        {/* Profile Menu Routes */}
        <Route path="/payments" element={<Layout><PagePlaceholder name="Платежи" /></Layout>} />
        <Route path="/account-settings" element={<Layout><PagePlaceholder name="Настройки аккаунта" /></Layout>} />
        <Route path="/tariffs" element={<Layout><PagePlaceholder name="Тарифы" /></Layout>} />
        <Route path="/partner-program" element={<Layout><PagePlaceholder name="Партнерская программа" /></Layout>} />
        
        {/* Redirect any other nested route to /home for now */}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;