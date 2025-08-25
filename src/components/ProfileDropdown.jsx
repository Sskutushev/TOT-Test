import React from 'react';
import { Link } from 'react-router-dom';
import logout from '/img/logout.svg';

const ProfileDropdown = ({ profileMenuItems, setOpenMenu }) => {
    return (
        <div className="profile-dropdown">
            <div className="profile-menu-list">
                {profileMenuItems.map(item => (
                    <Link to={item.link} key={item.text} className="profile-menu-item" onClick={() => setOpenMenu(null)}>
                        <img src={item.icon} alt="" />
                        <span>{item.text}</span>
                    </Link>
                ))}
                <a href="https://ssikutushev.github.io/TOT-Test/" className="profile-menu-item logout-link">
                    <img src={logout} alt="" />
                    <span>Выход из аккаунта</span>
                </a>
            </div>
        </div>
    );
};

export default ProfileDropdown;
