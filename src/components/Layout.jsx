import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import TopPanel from './TopPanel';

const Layout = ({ children }) => {
  const activeLinkStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '8px'
  };

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <aside className="menupanel">
        <div className="rectangle7"></div>
        <Link to="/home">
            <img id="totlogo" className="totlogo" src="/img/лого=Черный (1).svg" alt="TOT Logo" />
        </Link>

        <nav className="frame3944">
          <NavLink to="/timeline" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            <img src="/img/news line.svg" alt="" /><span>Лента</span>
          </NavLink>
          <NavLink to="/marketplace" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            <img src="/img/market.svg" alt="" /><span>Маркетплейс</span>
          </NavLink>
          <NavLink to="/persons" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            <img src="/img/persons.svg" alt="" /><span>Персоны</span>
          </NavLink>
          <NavLink to="/projects" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            <img src="/img/portfolio.svg" alt="" /><span>Проекты</span>
          </NavLink>
          <NavLink to="/streams" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
            <img src="/img/stream.svg" alt="" /><span>Трансляции</span>
          </NavLink>
        </nav>

        <hr />

        <nav className="frame4689">
          <NavLink to="/profile" style={({ isActive }) => isActive ? activeLinkStyle : undefined}><img src="/img/user.svg" alt="" /><span>Мой профиль</span></NavLink>
          <NavLink to="/desk" style={({ isActive }) => isActive ? activeLinkStyle : undefined}><img src="/img/Homework.svg" alt="" /><span>Рабочий стол</span></NavLink>
          <NavLink to="/messages" style={({ isActive }) => isActive ? activeLinkStyle : undefined}><img src="/img/chat.svg" alt="" /><span>Сообщения</span></NavLink>
          <NavLink to="/favorites" style={({ isActive }) => isActive ? activeLinkStyle : undefined}><img src="/img/selective.svg" alt="" /><span>Избранное</span></NavLink>
          <NavLink to="/calendar" style={({ isActive }) => isActive ? activeLinkStyle : undefined}><img src="/img/calendar.svg" alt="" /><span>Календарь</span></NavLink>
        </nav>

        <hr />

        <NavLink to="/help" className="frame31" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
          <img src="/img/help.svg" alt="" /><span>Помощь</span>
        </NavLink>
      </aside>
      
      <div className="main-content-wrapper" style={{ width: '100%', overflow: 'auto' }}>
        <TopPanel />
        {children}
      </div>
    </div>
  );
};

export default Layout;