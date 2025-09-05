import React from 'react';
import { Link } from 'react-router-dom';
import './MarketplaceLandingPage.css';

const MarketplaceLandingPage = () => {

  const leftFeatures = [
    {
      icon: '/1карточка.svg',
      title: 'Уникальные продукты',
      text: 'Широкий и специализированный ассортимент, включающий онлайн-курсы, вебинары, гайды, консультации, возможность инвестировать в фонды и автоследование, а также многое другое.'
    },
    {
      icon: '/2карточка.svg',
      title: 'Аналитика для бизнеса',
      text: 'Удобные аналитические инструменты для проектов и авторов продуктов - помогут наладить продажи.'
    },
    {
      icon: '/3карточка.svg',
      title: 'Курс на качество',
      text: 'Все продукты на нашем маркетплейсе проходят модерацию, чтобы гарантировать их соответствие высоким стандартам качества.'
    }
  ];

  const rightFeatures = [
    {
      icon: '/Перваякарточка.svg',
      title: 'Удобный поиск и фильтрация',
      text: 'Легко находи продукты интересные именно тебе при помощи мощной и функциональной системы фильтрации и сортировки.'
    },
    {
      icon: '/Втораякарточка.svg',
      title: 'Понятный интерфейс',
      text: 'Взаимодействие с платформой происходит легко и интуитивно, будь то создание продукта или же обучение.'
    },
    {
      icon: '/Третьякарточка.svg',
      title: 'Непрерывное развитие',
      text: 'Мы следим за трендами и учитываем мнение пользователей для улучшения ассортимента, добавляя новые категории и типы продуктов.'
    }
  ];


  return (
    <div className="marketplace-landing-page">
      <div style={{ backgroundColor: 'red', color: 'white', fontSize: '50px', textAlign: 'center', padding: '20px', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '9999' }}>
        TESTING DISPLAY
      </div>
      <main>
        {/* Hero Section */}
        <section className="mpl-hero-section">
          <div className="mpl-hero-container">
            <div className="mpl-hero-left">
              <h1>маркетплейс как<br />пространство для роста<br />и развития</h1>
              <p>Не нужно создавать сайт или тратить деньги на разработку платформы. Просто зарегистрируйся, загрузи свой продукт и начни продавать. Всё техническое обеспечение и продвижение уже на платформе</p>
              <Link to="/login" className="btn btn-primary">Присоединиться</Link>
            </div>
            <div className="mpl-hero-right">
              <video src="/Market2.mp4" autoPlay loop muted playsInline></video>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mpl-features-section">
          <img src="/Ellipse 56.svg" alt="" className="mpl-features-bg-left" />
          <img src="/Ellipse 56.svg" alt="" className="mpl-features-bg-right" />
          <div className="mpl-features-container">
            <div className="mpl-features-column">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="mpl-feature-card mpl-feature-card-left">
                  <img src={feature.icon} alt="" className="mpl-feature-icon" />
                  <div className="mpl-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mpl-features-column">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="mpl-feature-card mpl-feature-card-right">
                  <div className="mpl-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                  <img src={feature.icon} alt="" className="mpl-feature-icon" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Create Product Section */}
        <section className="mpl-create-section">
            <div className="mpl-create-container">
                <div className="mpl-create-left">
                    <h2>Создавай продукты, получай доступ к широкой аудитории и зарабатывай</h2>
                    <ul>
                        <li>
                            <img src="/mark.svg" alt="check mark"/>
                            <span>Никаких затрат на рекламу, твои продукты сразу видят тысячи пользователей</span>
                        </li>
                        <li>
                            <img src="/mark.svg" alt="check mark"/>
                            <span>Создай продукт один раз и зарабатывай на его продаже снова и снова</span>
                        </li>
                        <li>
                            <img src="/mark.svg" alt="check mark"/>
                            <span>Развитие личного бренда. С каждым новым продуктом ты укрепляешь свой авторитет и экспертность</span>
                        </li>
                    </ul>
                    <Link to="/login" className="btn btn-primary">Начать сейчас</Link>
                </div>
                <div className="mpl-create-right">
                    <video src="/Новая1.mp4" autoPlay loop muted playsInline></video>
                </div>
            </div>
        </section>

        {/* Placeholder Sections */}
        <section className="mpl-placeholder-section">
            <h2>Быстрый старт как для покупателей, так и для поставщиков услуг</h2>
        </section>
        <section className="mpl-placeholder-section">
            <h2>Какие продукты можно найти на нашем маркетплейсе?</h2>
        </section>
        <section className="mpl-placeholder-section">
            <h2>Готовы начать зарабатывать на своих знаниях и опыте?</h2>
        </section>

      </main>
    </div>
  );
};

export default MarketplaceLandingPage;
