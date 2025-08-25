import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TopPanel from './TopPanel';
import './Layout.css';
import logo from '/img/лого=Черный (1).svg';
import newsline from '/img/news line.svg';
import market from '/img/market.svg';
import persons from '/img/persons.svg';
import portfolio from '/img/portfolio.svg';
import stream from '/img/stream.svg';
import user from '/img/user.svg';
import homework from '/img/Homework.svg';
import chat from '/img/chat.svg';
import selective from '/img/selective.svg';
import calendar from '/img/calendar.svg';
import help from '/img/help.svg';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <aside className={`menupanel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <Link to="/home">
              <img id="totlogo" className="totlogo" src={logo} alt="TOT Logo" />
          </Link>
        </div>

        <nav className="frame3944">
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src={newsline} alt="" /><span>Лента</span>
          </NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src={market} alt="" /><span>Маркетплейс</span>
          </NavLink>
          <NavLink to="/persons" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src={persons} alt="" /><span>Персоны</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src={portfolio} alt="" /><span>Проекты</span>
          </NavLink>
          <NavLink to="/streams" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src={stream} alt="" /><span>Трансляции</span>
          </NavLink>
        </nav>

        <hr />

        <nav className="frame4689">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}><img src={user} alt="" /><span>Мой профиль</span></NavLink>
          <NavLink to="/desk" className={({ isActive }) => isActive ? "active-link" : ""}><img src={homework} alt="" /><span>Рабочий стол</span></NavLink>
          <NavLink to="/messages" className={({ isActive }) => isActive ? "active-link" : ""}><img src={chat} alt="" /><span>Сообщения</span></NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "active-link" : ""}><img src={selective} alt="" /><span>Избранное</span></NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "active-link" : ""}><img src={calendar} alt="" /><span>Календарь</span></NavLink>
        </nav>

        <hr />

        <NavLink to="/help" className={({ isActive }) => isActive ? "frame31 active-link" : "frame31"}>
          <img src={help} alt="" /><span>Помощь</span>
        </NavLink>
      </aside>
      
      <div className="main-content-wrapper">
        <TopPanel toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;