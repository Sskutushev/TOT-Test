import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CreatePopup from './CreatePopup';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import { mockNotifications } from '../data/notifications';
import { profileMenuItems } from '../data/profileMenu';
import './TopPanel.css';

const TopPanel = ({ toggleSidebar }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isCreateOpen, setCreateOpen] = useState(false);

    const notificationsRef = useRef(null);
    const profileRef = useRef(null);

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

    return (
        <>
            <header className="toppanel">
                <div className="frame6996">
                    <div className="burger-menu" onClick={toggleSidebar}>
                        <img src="/img/menu2.svg" alt="menu" />
                    </div>
                    <div className="field-small-search">
                        <img src="/img/search.svg" alt="search icon" />
                        <input type="text" className="search-input" placeholder="Поиск…" />
                    </div>
                    <div className="header-actions">
                        <button className="button-small-withicon" onClick={() => setCreateOpen(true)}>
                            <img src="/img/plus.svg" alt="create icon" /><span>Создать</span>
                        </button>

                        <div className="notification-wrapper" ref={notificationsRef}>
                            <button className="button-bell" onClick={(e) => toggleMenu(e, 'notifications')}>
                                <img src="/img/bell.svg" alt="Уведомления" />
                                <span className="badge-count">{mockNotifications.filter(n => n.isNew).length}</span>
                            </button>
                            
                            {openMenu === 'notifications' && (
                                <NotificationDropdown mockNotifications={mockNotifications} setOpenMenu={setOpenMenu} />
                            )}
                        </div>

                        <div id="profile-menu" ref={profileRef}>
                            <div className="profile-menu-container" onClick={(e) => toggleMenu(e, 'profile')}>
                                <img src="/img/Ellipse 146.svg" alt="" className="avatar" />
                                <span>Иван Иванов</span>
                                <img src="/img/Vector 2 (Stroke).svg" alt="" className="icon-dropdown" />
                            </div>
                            
                            {openMenu === 'profile' && (
                                <ProfileDropdown profileMenuItems={profileMenuItems} setOpenMenu={setOpenMenu} />
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {isCreateOpen && <CreatePopup onClose={() => setCreateOpen(false)} />}
        </>
    );
};

export default TopPanel;