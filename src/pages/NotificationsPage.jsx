import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NotificationCard from '../components/NotificationCard';
import SettingsModal from '../components/SettingsModal';
import { mockNotifications } from '../data/notifications';
import './NotificationsPage.css';

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

    return (
        <>
            {showSettings && <SettingsModal onClose={handleCloseSettings} />}
            <main className="notifications-page">
                <header className="page-header">
                    <h1>Уведомления</h1>
                    <button className="button-withicon settings-button" onClick={() => setSearchParams({ settings: 'true' })}>
                        <img src="/img/Settings Icon.svg" alt="" />
                        <span>Настройки</span>
                    </button>
                </header>

                <div className="notifications-list-full">
                    {mockNotifications.map(n => <NotificationCard key={n.id} notification={n} />)}
                </div>
            </main>
        </>
    );
};

export default NotificationsPage;