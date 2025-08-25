import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="landing-header">
        <Link to="/" className="landing-logo">
            <img src="/img/лого=Черный (1).svg" alt="TOT Logo" />
        </Link>
        <div className="burger-menu-landing" onClick={toggleMenu}>
            <img src="/img/menu2.svg" alt="menu" />
        </div>
        <nav className={`landing-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/home" className="btn login-button">Войти</Link>
          <Link to="/register" className="btn register-button">Регистрация</Link>
        </nav>
      </header>
      <main className="main-content">
        <h1>Добро пожаловать на платформу TOT!</h1>
        <p>Ваш универсальный инструмент для инвестиций и трейдинга.</p>
      </main>
    </div>
  );
};

export default LandingPage;