import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

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

const ToggleSwitch = ({ label, description }) => (
    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
        </label>
        <div style={{marginLeft: '1rem'}}>
            <strong>{label}</strong>
            <p style={{margin: 0, color: '#666'}}>{description}</p>
        </div>
    </div>
);

const SettingsModal = ({ onClose }) => (
    <div className="popup-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="popup-container" style={{width: 'auto', maxWidth: '500px'}}>
            <header className="popup-header">
                <h2>Настройки</h2>
                <button onClick={onClose} className="popup-close-btn" title="Закрыть">
                    <img src="/img/close.svg" alt="Закрыть" />
                </button>
            </header>
            <div className="popup-content" style={{padding: '1.5rem'}}>
                <ToggleSwitch label="Пользовательская активность" description="Лайки, комментарии, упоминания, голоса в опросах" />
                <ToggleSwitch label="Платежные оповещения" description="Покупка, оплата, финансовые операции" />
                <ToggleSwitch label="Техподдержка" description="Оповещения службы поддержки" />
                <ToggleSwitch label="Обучение и развитие" description="Уведомления по процессу обучения, преподавания" />
                <ToggleSwitch label="Инвестиции и Финансы" description="Доходность, риски, новые инструменты и стратегии" />
                <ToggleSwitch label="Системные оповещения" description="Обновления, новости от платформы" />
                <button className="btn btn-primary" style={{backgroundColor: '#FF7A00', borderColor: '#FF7A00', width: '100%', marginTop: '1rem'}} onClick={onClose}>Сохранить</button>
            </div>
        </div>
    </div>
);

const NotificationsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [showSettings, setShowSettings] = useState(searchParams.get('settings') === 'true');

    useEffect(() => {
        setShowSettings(searchParams.get('settings') === 'true');
    }, [searchParams]);

    const handleCloseSettings = () => {
        setSearchParams({});
        setShowSettings(false);
    }

    const notifications = [
        { id: 1, isNew: true, type: 'comment', icon: '_more_1', title: 'Новый комментарий', text: 'Кто-то оставил новый комментарий к вашему <strong>посту</strong>', time: '1 день назад', date: '25 Сент 2024' },
        { id: 2, isNew: false, type: 'reply', icon: '_more_2', title: 'Новый ответ на ваш комментарий', text: 'Кто-то ответил на ваш комментарий к <strong>посту</strong>', time: '1 день назад', date: '25 Сент 2024' },
        { id: 3, isNew: false, type: 'support', icon: '_more_5', title: 'Ваше обращение отправлено', text: 'Вы отправили обращение в техподдержку, мы уведомим вас об ответе.', time: '3 дня назад', date: '23 Сент 2024', action: 'Читать обращение' },
    ];

    return (
        <>
            {showSettings && <SettingsModal onClose={handleCloseSettings} />}
            <main className="notifications-page">
                <header className="notifications-header">
                    <h1>Уведомления</h1>
                    <button className="button-withicon settings-btn-page" onClick={() => setSearchParams({ settings: 'true' })}>
                        <img src="/img/wheel2.svg" alt="" />
                        <span>Настройки</span>
                    </button>
                </header>

                <div className="notifications-list-full">
                    {notifications.map(n => <NotificationCard key={n.id} notification={n} />)}
                </div>
            </main>
        </>
    );
};

export default NotificationsPage;