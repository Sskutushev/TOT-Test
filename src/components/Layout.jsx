import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TopPanel from './TopPanel';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <div className="burger-menu" onClick={toggleSidebar}>
        <img src="/img/menu2.svg" alt="menu" />
      </div>
      <aside className={`menupanel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <Link to="/home">
              <img id="totlogo" className="totlogo" src="/img/лого=Черный (1).svg" alt="TOT Logo" />
          </Link>
        </div>

        <nav className="frame3944">
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src="/img/news line.svg" alt="" /><span>Лента</span>
          </NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src="/img/market.svg" alt="" /><span>Маркетплейс</span>
          </NavLink>
          <NavLink to="/persons" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src="/img/persons.svg" alt="" /><span>Персоны</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src="/img/portfolio.svg" alt="" /><span>Проекты</span>
          </NavLink>
          <NavLink to="/streams" className={({ isActive }) => isActive ? "active-link" : ""}>
            <img src="/img/stream.svg" alt="" /><span>Трансляции</span>
          </NavLink>
        </nav>

        <hr />

        <nav className="frame4689">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}><img src="/img/user.svg" alt="" /><span>Мой профиль</span></NavLink>
          <NavLink to="/desk" className={({ isActive }) => isActive ? "active-link" : ""}><img src="/img/Homework.svg" alt="" /><span>Рабочий стол</span></NavLink>
          <NavLink to="/messages" className={({ isActive }) => isActive ? "active-link" : ""}><img src="/img/chat.svg" alt="" /><span>Сообщения</span></NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "active-link" : ""}><img src="/img/selective.svg" alt="" /><span>Избранное</span></NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "active-link" : ""}><img src="/img/calendar.svg" alt="" /><span>Календарь</span></NavLink>
        </nav>

        <hr />

        <NavLink to="/help" className={({ isActive }) => isActive ? "frame31 active-link" : "frame31"}>
          <img src="/img/help.svg" alt="" /><span>Помощь</span>
        </NavLink>
      </aside>
      
      <div className="main-content-wrapper">
        <TopPanel />
        {children}
      </div>
    </div>
  );
};

export default Layout;