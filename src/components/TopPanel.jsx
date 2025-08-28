import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CreatePopup from './CreatePopup';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import CombinedDropdown from './CombinedDropdown';
import BurgerIcon from './icons/BurgerIcon';
import { mockNotifications } from '../data/notifications';
import { profileMenuItems } from '../data/profileMenu';
import './TopPanel.css';

const useIsMobile = (width = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= width);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return isMobile;
};

const TopPanel = ({ toggleSidebar }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isCreateOpen, setCreateOpen] = useState(false);
    const isMobile = useIsMobile();

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
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

    const notificationCount = mockNotifications.filter(n => n.isNew).length;

    return (
        <>
            <header className="toppanel">
                <div className="frame6996">
                    <div className="burger-menu" onClick={toggleSidebar}>
                        <BurgerIcon />
                    </div>
                    <div className="field-small-search">
                        <img src={import.meta.env.BASE_URL + 'img/search.svg'} alt="search icon" />
                        <input type="text" className="search-input" placeholder="Поиск…" />
                    </div>
                    <div className="header-actions">
                        <button className="button-small-withicon" onClick={() => setCreateOpen(true)}>
                            <img src={import.meta.env.BASE_URL + 'img/plus.svg'} alt="create icon" />
                            <span className="desktop-only">Создать</span>
                        </button>

                        {isMobile ? (
                            <div className="mobile-profile-wrapper" ref={menuRef}>
                                <button className="mobile-avatar-button" onClick={(e) => toggleMenu(e, 'combined')}>
                                    <img src={import.meta.env.BASE_URL + 'img/Ellipse 146.svg'} alt="" className="avatar" />
                                    {notificationCount > 0 && <span className="badge-count">{notificationCount}</span>}
                                </button>
                                {openMenu === 'combined' && (
                                    <CombinedDropdown 
                                        mockNotifications={mockNotifications} 
                                        profileMenuItems={profileMenuItems} 
                                        setOpenMenu={setOpenMenu} 
                                    />
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="notification-wrapper" ref={menuRef}>
                                    <button className="button-bell" onClick={(e) => toggleMenu(e, 'notifications')}>
                                        <img src={import.meta.env.BASE_URL + 'img/bell.svg'} alt="Уведомления" />
                                        {notificationCount > 0 && <span className="badge-count">{notificationCount}</span>}
                                    </button>
                                    
                                    {openMenu === 'notifications' && (
                                        <NotificationDropdown mockNotifications={mockNotifications} setOpenMenu={setOpenMenu} />
                                    )}
                                </div>

                                <div id="profile-menu" ref={menuRef}>
                                    <div className="profile-menu-container" onClick={(e) => toggleMenu(e, 'profile')}>
                                        <img src={import.meta.env.BASE_URL + 'img/Ellipse 146.svg'} alt="" className="avatar" />
                                        <span className="desktop-only">Иван Иванов</span>
                                        <img src={import.meta.env.BASE_URL + 'img/Vector 2 (Stroke).svg'} alt="" className="icon-dropdown desktop-only" />
                                    </div>
                                    
                                    {openMenu === 'profile' && (
                                        <ProfileDropdown profileMenuItems={profileMenuItems} setOpenMenu={setOpenMenu} />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
            {isCreateOpen && <CreatePopup onClose={() => setCreateOpen(false)} />}
        </>
    );
};

export default TopPanel;