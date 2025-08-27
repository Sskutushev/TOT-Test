import React from 'react';
import { Link } from 'react-router-dom';
import settingsIcon from '/img/settings-icon.svg';
import arrowRight from '/img/arrow-right.svg';
import logoutIcon from '/Union.svg';

const CombinedDropdown = ({ mockNotifications, profileMenuItems, setOpenMenu }) => {
  return (
    <div className="combined-dropdown">
      {/* Notifications Section */}
      <div id="notificationcontainer" className="notification-dropdown-section">
        <header className="notification-header">
          <h3>Уведомления</h3>
          <Link to="/notifications" className="settings-btn" title="Настройки" onClick={() => setOpenMenu(null)}>
            <img src={settingsIcon} alt="Настройки" />
          </Link>
        </header>
        <div className="notification-list">
          {mockNotifications.map(n => (
            <Link to="/notifications" key={n.id} className={`notification-item ${n.isNew ? 'new' : ''}`} onClick={() => setOpenMenu(null)}>
              <div className="notification-icon"><img src={n.icon} alt="" /></div>
              <div className="notification-text">
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <footer className="notification-footer">
          <Link to="/notifications" className="btn-link" onClick={() => setOpenMenu(null)}>Смотреть все уведомления <img src={arrowRight} alt="" /></Link>
        </footer>
      </div>

      <hr className="dropdown-divider" />

      {/* Profile Section */}
      <div className="profile-dropdown-section">
        <div className="profile-menu-list">
          {profileMenuItems.map(item => (
            <Link to={item.link} key={item.text} className="profile-menu-item" onClick={() => setOpenMenu(null)}>
              <img src={item.icon} alt="" />
              <span>{item.text}</span>
            </Link>
          ))}
          <Link to="/" className="profile-menu-item logout-link" onClick={() => setOpenMenu(null)}>
            <img src={logoutIcon} alt="" />
            <span>Выход из аккаунта</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CombinedDropdown;
