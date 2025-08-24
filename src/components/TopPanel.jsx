import React, { useState } from 'react';

const TopPanel = () => {
    // Basic state for dropdowns, full implementation would require more logic
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);

    return (
        <header className="toppanel">
            <div className="frame6996">
                <div className="field-small-search">
                    <img src="/img/search.svg" alt="search icon" />
                    <input type="text" className="search-input" placeholder="Поиск…" />
                </div>
                <div className="header-actions">
                    <button className="button-small-withicon" onClick={() => setCreateOpen(!createOpen)}>
                        <img src="/img/plus.svg" alt="create icon" />Создать
                    </button>

                    <div className="notification-wrapper">
                        <button className="button-bell" onClick={() => setNotificationsOpen(!notificationsOpen)}>
                            <img src="/img/bell.svg" alt="Уведомления" />
                            <span className="badge-count">14</span>
                        </button>
                        {/* Placeholder for notification dropdown */}
                    </div>

                    <div className="frame9" id="profile-menu" onClick={() => setProfileOpen(!profileOpen)}>
                        <img src="/img/Ellipse 146.svg" alt="" className="avatar" />
                        <span>Иван Иванов</span>
                        <img src="/img/Vector 2 (Stroke).svg" alt="" className="icon-dropdown" />
                        {/* Placeholder for profile dropdown */}
                    </div>
                </div>
            </div>
            <hr />
        </header>
    );
};

export default TopPanel;
