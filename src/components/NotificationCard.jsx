import React from 'react';

const NotificationCard = ({ notification }) => (
    <div className={`notification-card ${notification.isNew ? 'new' : ''}`}>
        <div className={`notification-icon-wrapper type-${notification.type}`}>
            <img src={`/img/${notification.icon}.svg`} alt="" className="notification-icon" />
        </div>
        <div className="notification-details">
            <div className="notification-text">
                <h4>{notification.title}</h4>
                <p>{notification.text}</p>
            </div>
            <div className="notification-meta">
                <span>{notification.time}</span>
                <div className="separator"></div>
                <span>{notification.date}</span>
            </div>
        </div>
    </div>
);

export default NotificationCard;
