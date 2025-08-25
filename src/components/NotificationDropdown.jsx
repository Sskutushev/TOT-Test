import React from 'react';
import { Link } from 'react-router-dom';
import settingsIcon from '/img/Settings Icon.svg';
import arrowRight from '/img/arrow-right.svg';

const NotificationDropdown = ({ mockNotifications, setOpenMenu }) => {
    return (
        <div id="notificationcontainer" className="notification-dropdown">
            <header className="notification-header">
                <h3>Уведомления</h3>
                <a href="https://ssikutushev.github.io/TOT-Test/#/notifications" className="settings-btn" title="Настройки">
                    <img src={settingsIcon} alt="Настройки" />
                </a>
            </header>
            <div className="notification-list">
                {mockNotifications.map(n => (
                    <a href="https://ssikutushev.github.io/TOT-Test/#/notifications" key={n.id} className={`notification-item ${n.isNew ? 'new' : ''}`}>
                        <div className="notification-icon"><img src={n.icon} alt="" /></div>
                        <div className="notification-text">
                            <h4>{n.title}</h4>
                            <p>{n.text}</p>
                        </div>
                    </a>
                ))}
            </div>
            <footer className="notification-footer">
                <a href="https://ssikutushev.github.io/TOT-Test/#/notifications" className="btn-link">Смотреть все уведомления <img src={arrowRight} alt="" /></a>
            </footer>
        </div>
    );
};

export default NotificationDropdown;
