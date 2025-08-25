import React from 'react';
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

export const routes = [
    { path: '/', element: <LandingPage />, exact: true },
    { path: '/home', element: <HomePage />, layout: true },
    { path: '/timeline', element: <TimelinePage />, layout: true },
    { path: '/marketplace', element: <MarketplacePage />, layout: true },
    { path: '/persons', element: <PersonsPage />, layout: true },
    { path: '/projects', element: <ProjectsPage />, layout: true },
    { path: '/streams', element: <StreamsPage />, layout: true },
    { path: '/profile', element: <ProfilePage />, layout: true },
    { path: '/desk', element: <DeskPage />, layout: true },
    { path: '/messages', element: <MessagesPage />, layout: true },
    { path: '/favorites', element: <FavoritesPage />, layout: true },
    { path: '/calendar', element: <CalendarPage />, layout: true },
    { path: '/help', element: <HelpPage />, layout: true },
    { path: '/notifications', element: <NotificationsPage />, layout: true },
    { path: '/market_education', element: <MarketEducationPage />, layout: true },
    { path: '/market_invest', element: <MarketInvestPage />, layout: true },
    { path: '/education_product_course', element: <EducationProductCoursePage />, layout: true },
    { path: '/education_product_consult', element: <EducationProductConsultPage />, layout: true },
];
