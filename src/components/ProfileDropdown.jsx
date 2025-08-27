import React from 'react'; // Added comment to force recompile
import { Link } from 'react-router-dom';
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
                <Link to="/" className="profile-menu-item logout-link" onClick={() => setOpenMenu(null)}>
                    <img src={import.meta.env.BASE_URL + 'Union.svg'} alt="" />
                    <span>Выход из аккаунта</span>
                </Link>
            </div>
        </div>
    );
};

export default ProfileDropdown;