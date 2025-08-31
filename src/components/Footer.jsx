import React from 'react';
import './Footer.css';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { name: 'Обучение', path: '/education' },
    { name: 'Соц сеть', path: '/social' },
    { name: 'Инвестиции', path: '/investments' },
    { name: 'Маркетплейс', path: '/marketplace-landing' },
    { name: 'Новости', path: '/news' },
    { name: 'Партнёрка', path: '/partnership' },
  ];

  const socialIcons = [
    { name: 'rutube', icon: 'rutube.svg', path: '#' },
    { name: 'tenchat', icon: 'tenchat.svg', path: '#' },
    { name: 'vk', icon: 'VK.svg', path: '#' },
    { name: 'telegram', icon: 'TG.svg', path: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo, Legal, Mail */}
        <div className="footer-column-1">
          <div className="footer-logo-container">
                        <img src={import.meta.env.BASE_URL + 'TOT Logo футер.svg'} alt="TOT Logo" className="footer-logo" onClick={scrollToTop} />
            <div className="footer-legal-info">
              <p>ООО "Технологии.Обучение.Трейдинг."</p>
              <p>ИНН 1234567890, ОГРН 1234567890123</p>
              <p>Все права защищены 2025 ©</p>
            </div>
          </div>
          <a href="mailto:MailAdress@totcompany.com" className="footer-mail-link">
            <img src={import.meta.env.BASE_URL + 'mail.svg'} alt="Email" />
            <span>MailAdress@totcompany.com</span>
          </a>
        </div>

        {/* Column 2: Menu */}
        <div className="footer-column-2">
          <h4 className="footer-menu-title">Меню:</h4>
          <nav className="footer-menu">
            {menuItems.map(item => (
              <a key={item.name} href={item.path}>{item.name}</a>
            ))}
          </nav>
        </div>

        {/* Column 3: Social & App Banner */}
        <div className="footer-column-3">
          <div className="footer-social">
            <h4 className="footer-social-title">Оставайся на связи:</h4>
            <div className="footer-social-icons">
              {socialIcons.map(social => (
                <a key={social.name} href={social.path} target="_blank" rel="noopener noreferrer">
                  <img src={import.meta.env.BASE_URL + social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-app-banner">
            <div className="app-banner-text">
              <h4>Удобное приложение</h4>
              <p>Используй TOT на своем IOS и Android устройстве</p>
              <a href="#">Скачать &rarr;</a>
            </div>
            <img src="/Group 49.svg" alt="Phone 1" className="app-banner-img1" />
            <img src={import.meta.env.BASE_URL + 'Group 48.svg'} alt="Phone 2" className="app-banner-img2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;