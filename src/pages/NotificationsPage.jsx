import React from 'react';

const NotificationCard = ({ notification }) => (
    <div className={`notification-card ${notification.isNew ? 'new' : ''}`}>
        <div className={`notification-icon ${notification.type}`}><img src={`/img/${notification.icon}.svg`} alt="" /></div>
        <div className="notification-details">
            <div className="notification-text">
                <h4>{notification.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: notification.text }}></p>
                {notification.action && <a href="#" className="button-small-withicon">{notification.action}</a>}
            </div>
            <div className="notification-meta">
                <span>{notification.time}</span>
                <div className="separator"></div>
                <span>{notification.date}</span>
            </div>
        </div>
    </div>
);

const NotificationsPage = () => {
    const notifications = [
        { id: 1, isNew: true, type: 'comment', icon: '_more_1', title: 'Новый комментарий', text: 'Кто-то оставил новый комментарий к вашему <strong>посту</strong>', time: '1 день назад', date: '25 Сент 2024' },
        { id: 2, isNew: false, type: 'reply', icon: '_more_2', title: 'Новый ответ на ваш комментарий', text: 'Кто-то ответил на ваш комментарий к <strong>посту</strong>', time: '1 день назад', date: '25 Сент 2024' },
        { id: 3, isNew: false, type: 'support', icon: '_more_5', title: 'Ваше обращение отправлено', text: 'Вы отправили обращение в техподдержку, мы уведомим вас об ответе.', time: '3 дня назад', date: '23 Сент 2024', action: 'Читать обращение' },
        // ... more notifications
    ];

    return (
        <main className="notifications-page">
            <header className="notifications-header">
                <h1>Уведомления</h1>
                <button className="button-withicon settings-btn-page">
                    <img src="/img/wheel2.svg" alt="" />
                    <span>Настройки</span>
                </button>
            </header>

            <div className="notifications-list-full">
                {notifications.map(n => <NotificationCard key={n.id} notification={n} />)}
            </div>
        </main>
    );
};

export default NotificationsPage;
