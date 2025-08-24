import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CreatePopup from './CreatePopup'; // Import the new popup component

const TopPanel = () => {
    const [openMenu, setOpenMenu] = useState(null); // can be 'notifications', 'profile', or null
    const [isCreateOpen, setCreateOpen] = useState(false);

    const notificationsRef = useRef(null);
    const profileRef = useRef(null);

    // Effect to handle clicks outside of the open menus
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = (e, menuName) => {
        e.stopPropagation();
        setOpenMenu(prev => (prev === menuName ? null : menuName));
    };

    const mockNotifications = [
        { id: 1, icon: '_more_1.svg', title: 'Новый комментарий', text: 'Егор Потанин оставил комментарий...' },
        { id: 2, icon: '_more_2.svg', title: 'Новый ответ', text: 'Анна Смек ответила на ваш комментарий...' },
        { id: 3, icon: '_more_3.svg', title: 'Вас упомянули', text: 'Иван Иванов упомянул вас в посте...' },
    ];

    return (
        <>
            <header className="toppanel">
                <div className="frame6996">
                    <div className="field-small-search">
                        <img src="/img/search.svg" alt="search icon" />
                        <input type="text" className="search-input" placeholder="Поиск…" />
                    </div>
                    <div className="header-actions">
                        <button className="button-small-withicon" onClick={() => setCreateOpen(true)}>
                            <img src="/img/plus.svg" alt="create icon" />Создать
                        </button>

                        <div className="notification-wrapper" ref={notificationsRef}>
                            <button className="button-bell" onClick={(e) => toggleMenu(e, 'notifications')}>
                                <img src="/img/bell.svg" alt="Уведомления" />
                                <span className="badge-count">14</span>
                            </button>
                            
                            {openMenu === 'notifications' && (
                                <div id="notificationcontainer" className="notification-dropdown">
                                    <header className="notification-header">
                                        <h3>Уведомления</h3>
                                        <Link to="/notifications?settings=true" className="settings-btn" title="Настройки" onClick={() => setOpenMenu(null)}>
                                            <img src="/img/Settings Icon.svg" alt="Настройки" />
                                        </Link>
                                    </header>
                                    <div className="notification-list">
                                        {mockNotifications.map(n => (
                                            <Link to="/notifications" key={n.id} className="notification-item new" onClick={() => setOpenMenu(null)}>
                                                <div className="notification-icon"><img src={`/img/${n.icon}`} alt="" /></div>
                                                <div className="notification-text"><h4>{n.title}</h4><p>{n.text}</p></div>
                                            </Link>
                                        ))}
                                    </div>
                                    <footer className="notification-footer">
                                        <Link to="/notifications" className="btn-link" onClick={() => setOpenMenu(null)}>Смотреть все уведомления <img src="/img/arrow.svg" alt="→" /></Link>
                                    </footer>
                                </div>
                            )}
                        </div>

                        <div className="frame9" id="profile-menu" ref={profileRef}>
                            <div onClick={(e) => toggleMenu(e, 'profile')} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                <img src="/img/Ellipse 146.svg" alt="" className="avatar" />
                                <span>Иван Иванов</span>
                                <img src="/img/Vector 2 (Stroke).svg" alt="" className="icon-dropdown" />
                            </div>
                            
                            {openMenu === 'profile' && (
                                <div className="frame3953">
                                    <Link to="/payments" className="frame3957" onClick={() => setOpenMenu(null)}><div>Платежи</div></Link>
                                    <Link to="/account-settings" className="frame3954" onClick={() => setOpenMenu(null)}><div>Настройки аккаунта</div></Link>
                                    <Link to="/tariffs" className="frame3959" onClick={() => setOpenMenu(null)}><div>Тарифы</div></Link>
                                    <Link to="/partner-program" className="frame3960" onClick={() => setOpenMenu(null)}><div>Партнёрская программа</div></Link>
                                    <Link to="/" className="frame3961" onClick={() => setOpenMenu(null)}><div>Выход из аккаунта</div></Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr />
            </header>
            {isCreateOpen && <CreatePopup onClose={() => setCreateOpen(false)} />}
        </>
    );
};

export default TopPanel;
