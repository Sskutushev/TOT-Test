
import React, { useState, useEffect, useRef } from 'react'; // Added a comment to force recompile // Added a comment to force recompile
import { Link, NavLink } from 'react-router-dom';
import LangSelector from './LangSelector';
import './LandingHeader.css';

const logo = import.meta.env.BASE_URL + 'TOT Logo.svg';
const userIcon = import.meta.env.BASE_URL + 'schoolteacher.svg';

// Иконки для бургера
const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LandingHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="landing-header">
        <div className="header-container">
          <div className="header-left">
            <Link to="/">
              <img src={logo} alt="TOT Logo" className="logo" />
            </Link>
            <nav className="header-nav desktop-only">
              <NavLink to="/education" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Обучение</NavLink>
              <NavLink to="/social" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Соц сеть</NavLink>
              <NavLink to="/investments" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Инвестиции</NavLink>
              <NavLink to="/marketplace-landing" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Маркетплейс</NavLink>
              <NavLink to="/news" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Новости</NavLink>
              <NavLink to="/partnership" className={({ isActive }) => isActive ? "active-nav-link" : ""}>Партнёрская</NavLink>
            </nav>
          </div>
          <div className="header-right desktop-only">
            <Link to="/login" className="login-btn">
              <img src={userIcon} alt="Войти" />
              <span>Войти</span>
            </Link>
            <LangSelector />
          </div>
          <div className="burger-menu-button mobile-only" onClick={toggleMenu}>
            <BurgerIcon />
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}></div>
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
            <Link to="/" onClick={handleLinkClick}>
                <img src={logo} alt="TOT Logo" className="logo" />
            </Link>
            <div className="mobile-menu-close" onClick={toggleMenu}>
                <CloseIcon />
            </div>
        </div>
        <div className="mobile-menu-content">
            <nav className="mobile-nav">
                <NavLink to="/education" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Обучение</NavLink>
                <NavLink to="/social" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Соц сеть</NavLink>
                <NavLink to="/investments" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Инвестиции</NavLink>
                <NavLink to="/marketplace-landing" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Маркетплейс</NavLink>
                <NavLink to="/news" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Новости</NavLink>
                <NavLink to="/partnership" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-nav-link" : ""}>Партнёрская</NavLink>
            </nav>
            <div className="mobile-menu-footer">
                <Link to="/login" className="login-btn" onClick={handleLinkClick}>
                    <img src={userIcon} alt="Войти" />
                    <span>Войти</span>
                </Link>
                <LangSelector />
            </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
