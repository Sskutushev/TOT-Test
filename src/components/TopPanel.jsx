import React from 'react';
import { Link } from 'react-router-dom';

// Reverted to the most basic, stable version to fix rendering errors.
const TopPanel = () => {
    return (
        <header className="toppanel">
            <div className="frame6996">
                <div className="field-small-search">
                    <img src="/img/search.svg" alt="search icon" />
                    <input type="text" className="search-input" placeholder="Поиск…" />
                </div>
                <div className="header-actions">
                    <button className="button-small-withicon">
                        <img src="/img/plus.svg" alt="create icon" />Создать
                    </button>

                    <div className="notification-wrapper">
                        <button className="button-bell">
                            <img src="/img/bell.svg" alt="Уведомления" />
                            <span className="badge-count">14</span>
                        </button>
                    </div>

                    <div className="frame9" id="profile-menu">
                        <img src="/img/Ellipse 146.svg" alt="" className="avatar" />
                        <span>Иван Иванов</span>
                        <img src="/img/Vector 2 (Stroke).svg" alt="" className="icon-dropdown" />
                    </div>
                </div>
            </div>
            <hr />
        </header>
    );
};

export default TopPanel;