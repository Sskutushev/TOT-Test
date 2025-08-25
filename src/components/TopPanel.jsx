import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CreatePopup from './CreatePopup';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import { mockNotifications } from '../data/notifications';
import { profileMenuItems } from '../data/profileMenu';
import './TopPanel.css';
import menu2 from '/img/menu2.svg';
import search from '/img/search.svg';
import plus from '/img/plus.svg';
import bell from '/img/bell.svg';
import ellipse146 from '/img/Ellipse 146.svg';
import vector2 from '/img/Vector 2 (Stroke).svg';

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
                        <img src={menu2} alt="menu" />
                    </div>
                    <div className="field-small-search">
                        <img src={search} alt="search icon" />
                        <input type="text" className="search-input" placeholder="Поиск…" />
                    </div>
                    <div className="header-actions">
                        <button className="button-small-withicon" onClick={() => setCreateOpen(true)}>
                            <img src={plus} alt="create icon" /><span>Создать</span>
                        </button>

                        <div className="notification-wrapper" ref={notificationsRef}>
                            <button className="button-bell" onClick={(e) => toggleMenu(e, 'notifications')}>
                                <img src={bell} alt="Уведомления" />
                                <span className="badge-count">{mockNotifications.filter(n => n.isNew).length}</span>
                            </button>
                            
                            {openMenu === 'notifications' && (
                                <NotificationDropdown mockNotifications={mockNotifications} setOpenMenu={setOpenMenu} />
                            )}
                        </div>

                        <div id="profile-menu" ref={profileRef}>
                            <div className="profile-menu-container" onClick={(e) => toggleMenu(e, 'profile')}>
                                <img src={ellipse146} alt="" className="avatar" />
                                <span>Иван Иванов</span>
                                <img src={vector2} alt="" className="icon-dropdown" />
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