
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LangSelector from '../components/LangSelector';
import './LoginPage.css';

const slidesData = [
  {
    img: '/variant1.svg',
    title: 'Социальная сеть',
    subtitle: 'Совершенно новый формат взаимодействия между преподавателями и студентами'
  },
  {
    img: '/variant2.svg',
    title: 'Обучение',
    subtitle: 'Удобный интерфейс для обучения во всех форматах. Множество функций для планирования своего развития'
  },
  {
    img: '/variant3.svg',
    title: 'Маркетплейс',
    subtitle: 'Совершенно новый формат взаимодействия между преподавателями и студентами'
  },
  {
    img: '/variant4.svg',
    title: 'Инвестиции',
    subtitle: 'Откройте мир глобальных инвестиций с нашими инструментами.'
  }
];

const LoginPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loginMethod, setLoginMethod] = useState('phone');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { title, subtitle } = slidesData[currentSlide];

  return (
    <div className="login-page-container">
      {/* Левая панель */}
      <div className="login-left-panel desktop-only">
        <div className="login-carousel-backgrounds">
          {slidesData.map((slide, index) => (
            <div 
              key={index}
              className={`login-carousel-bg ${currentSlide === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>
          ))}
        </div>
        <div className="login-carousel-overlay">
          <div className="carousel-content-wrapper">
            <div className="carousel-text-content">
              <h2 className="carousel-title">{title}</h2>
              <p className="carousel-subtitle">{subtitle}</p>
            </div>
            <div className="carousel-dots">
              {slidesData.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="login-panel-buttons">
            <Link to="/" className="back-button">← Вернуться</Link>
            <LangSelector customClassName="login-page-selector" />
          </div>
        </div>
      </div>

      {/* Правая панель */}
      <div className="login-right-panel">
        <div className="mobile-login-header mobile-only">
            <Link to="/" className="back-button">← Вернуться</Link>
            <LangSelector customClassName="login-page-selector" />
        </div>
        <div className="login-form-container">
          <img src="/TOT Logo.svg" alt="Logo" className="login-form-logo" />
          <h1 className="login-form-title">Войти на платформу</h1>
          <p className="social-login-text">Использовать аккаунты для входа</p>
          <div className="social-login-buttons">
            <img src="/Group 633.svg" alt="Social Login" className="social-btn-img" />
            <img src="/Group 634.svg" alt="Social Login" className="social-btn-img" />
            <img src="/Group 635.svg" alt="Social Login" className="social-btn-img" />
            <img src="/Group 636.svg" alt="Social Login" className="social-btn-img" />
          </div>
          <div className="login-tabs-container">
            <button 
              className={`login-tab ${loginMethod === 'phone' ? 'active' : ''}`}
              onClick={() => setLoginMethod('phone')}
            >
              Номер телефона
            </button>
            <button 
              className={`login-tab ${loginMethod === 'email' ? 'active' : ''}`}
              onClick={() => setLoginMethod('email')}
            >
              E-mail
            </button>
          </div>
          <div className="login-input-container">
            {loginMethod === 'phone' ? (
              <div className="input-wrapper">
                <label htmlFor="phone-input">введите номер</label>
                <input id="phone-input" type="text" placeholder="+7(___) - ___ - __ - __" />
              </div>
            ) : (
              <div className="input-wrapper">
                <label htmlFor="email-input">Введите e-mail</label>
                <input id="email-input" type="email" placeholder="" />
              </div>
            )}
          </div>
          <button className="continue-button">
            <span>Продолжить</span>
            <span>→</span>
          </button>
          <p className="login-footer-text">
            Совершая вход, Вы соглашаетесь с&nbsp;
            <a href="#">Правилами пользования</a>
            &nbsp;и&nbsp;
            <a href="#">Политикой конфиденциальности</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
