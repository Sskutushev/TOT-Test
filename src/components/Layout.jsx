import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TopPanel from './TopPanel';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="app-container">
      <aside ref={sidebarRef} className={`menupanel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <Link to="/home" onClick={handleLinkClick}>
              <img id="totlogo" className="totlogo" src={import.meta.env.BASE_URL + 'img/лого=Черный (1).svg'} alt="TOT Logo" />
          </Link>
        </div>

        <nav className="frame3944">
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}>
            <img src={import.meta.env.BASE_URL + 'img/news line.svg'} alt="" /><span>Лента</span>
          </NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}>
            <img src={import.meta.env.BASE_URL + 'img/market.svg'} alt="" /><span>Маркетплейс</span>
          </NavLink>
          <NavLink to="/persons" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}>
            <img src={import.meta.env.BASE_URL + 'img/persons.svg'} alt="" /><span>Персоны</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}>
            <img src={import.meta.env.BASE_URL + 'img/portfolio.svg'} alt="" /><span>Проекты</span>
          </NavLink>
          <NavLink to="/streams" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}>
            <img src={import.meta.env.BASE_URL + 'img/stream.svg'} alt="" /><span>Трансляции</span>
          </NavLink>
        </nav>

        <hr />

        <nav className="frame4689">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}><img src={import.meta.env.BASE_URL + 'img/user.svg'} alt="" /><span>Мой профиль</span></NavLink>
          <NavLink to="/desk" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}><img src={import.meta.env.BASE_URL + 'img/Homework.svg'} alt="" /><span>Рабочий стол</span></NavLink>
          <NavLink to="/messages" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}><img src={import.meta.env.BASE_URL + 'img/chat.svg'} alt="" /><span>Сообщения</span></NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}><img src={import.meta.env.BASE_URL + 'img/selective.svg'} alt="" /><span>Избранное</span></NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleLinkClick}><img src={import.meta.env.BASE_URL + 'img/calendar.svg'} alt="" /><span>Календарь</span></NavLink>
        </nav>

        <hr />

        <NavLink to="/help" className={({ isActive }) => isActive ? "frame31 active-link" : "frame31"} onClick={handleLinkClick}>
          <img src={import.meta.env.BASE_URL + 'img/help.svg'} alt="" /><span>Помощь</span>
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
