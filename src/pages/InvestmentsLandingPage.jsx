import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InvestmentsLandingPage.css';

// Asset Imports
const heroImage = import.meta.env.BASE_URL + 'Frame 6070.svg';
const section2BgEllipse = import.meta.env.BASE_URL + 'img/Ellipse 56.svg';
const section2Icon = import.meta.env.BASE_URL + 'инвести.svg';
const section3Image = import.meta.env.BASE_URL + 'Frame 6071.svg';
const checkMarkIcon = import.meta.env.BASE_URL + 'img/mark.svg';
const hourglassIcon = import.meta.env.BASE_URL + 'hourglases.svg';
const cubeIcon = import.meta.env.BASE_URL + 'cube.svg';
const personsIcon = import.meta.env.BASE_URL + 'persons.svg';
const conservIcon = import.meta.env.BASE_URL + 'conserv.svg';
const profitChartIcon = import.meta.env.BASE_URL + 'Group 855.svg';
const warningIcon = import.meta.env.BASE_URL + 'warning.svg';

const personalInvestments = [
  { icon: import.meta.env.BASE_URL + 'Акции.svg', title: 'Акции / Облигации' },
  { icon: import.meta.env.BASE_URL + 'Крипто.svg', title: 'Криптовалюта' },
  { icon: import.meta.env.BASE_URL + 'Валюты.svg', title: 'Валюты' },
  { icon: import.meta.env.BASE_URL + 'Фьючерсы.svg', title: 'Фьючерсы' },
  { icon: import.meta.env.BASE_URL + 'Опционы.svg', title: 'Опционы' },
];

const projectInvestments = [
  { icon: import.meta.env.BASE_URL + 'Фонды и портфели.svg', title: 'Фонды и портфели' },
  { icon: import.meta.env.BASE_URL + 'Автоследование.svg', title: 'Автоследование' },
];

const oneAccountList = [
    { title: 'Глобальный доступ к мировым рынкам', text: 'Акции, облигации, криптовалюты, сложные структурные продукты, портфели фондов — всё это доступно тебе в одном месте' },
    { title: 'Полная свобода выбора', text: 'Хочешь вложиться в перспективные облигации Китая? Приобрести доллары США? Или, может быть, рискнуть с новым модным мем-коином? Всё это и даже больше доступно с единым счётом!' },
    { title: 'Просто и удобно', text: 'Управляй своими инвестициями из любой точки мира, когда тебе удобно. Простой и дружелюбный интерфейс поможет тебе делать это всего в пару кликов.' },
    { title: 'Надежность и безопасность', text: 'Твои средства под защитой. Мы гарантируем безопасность операций и сохранность твоих инвестиций.' },
];

const investmentProducts = [
  {
    image: import.meta.env.BASE_URL + 'Group 857.svg',
    title: 'Сырьевые дейтрейдеры',
    strategy: { text: 'Торговая стратегия', color: '#8A8FD8', width: '145px' },
    investors: 57,
    risk: 'Умеренные',
    rating: 4.5,
    profit: '+100%'
  },
  {
    image: import.meta.env.BASE_URL + 'Group 858.svg',
    title: 'ТОТ золото',
    strategy: { text: 'Фонды и портфели', color: '#CC809F', width: '145px' },
    investors: 123,
    risk: 'Умеренные',
    rating: 5.0,
    profit: '+88%'
  },
  {
    image: import.meta.env.BASE_URL + 'Group 859.svg',
    title: 'Голубые фишки РФ',
    strategy: { text: 'Структурные продукты', color: '#78BC58', width: '165px' },
    investors: 241,
    risk: 'Умеренные',
    rating: 3.8,
    profit: '+43%'
  },
  {
    image: import.meta.env.BASE_URL + 'Group 860.svg',
    title: 'IPO Рынка РФ 2024-2025',
    strategy: { text: 'Первичные размещения', color: '#76BBEF', width: '175px' },
    investors: 369,
    risk: 'Умеренные',
    rating: 4.2,
    profit: '+125%'
  }
];

const Star = ({ filled }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" className={`star ${filled ? 'filled' : ''}`}>
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
              fill={filled ? "#FF7255" : "none"}
              stroke="#FF7255" strokeWidth="1.5" />
    </svg>
);

const StarRating = ({ rating }) => {
    const stars = [];
    const roundedRating = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} filled={i <= roundedRating} />);
    }
    return <div className="star-rating-container">{stars}</div>;
};

const InvestmentsLandingPage = () => {
  return (
    <div className="invest-landing-page">
      {/* Section 1: Hero */}
      <section className="invest-hero-section">
        <div className="invest-container-1240 invest-hero-container">
          <div className="invest-hero-left">
            <h1>Инвестиционная платформа будущего</h1>
            <div className="invest-dev-badge">
              <span>в разработке</span>
            </div>
            <p className="hero-subtitle">Один счёт — тысячи возможностей. Открой для себя удивительный мир инвестиций, где ты сможешь заработать, не имея никаких специальных знаний.</p>
            <Link to="/login" className="btn btn-primary">Подать заявку</Link>
          </div>
          <div className="invest-hero-right">
            <img src={heroImage} alt="Investments Platform" />
          </div>
        </div>
      </section>

      {/* Section 2: Boundless Possibilities */}
      <section className="invest-possibilities-section">
        <img src={section2BgEllipse} alt="" className="bg-ellipse-bl" />
        <img src={section2BgEllipse} alt="" className="bg-ellipse-tr" />
        <div className="invest-container-1240-740">
          <div className="possibilities-top">
            <img src={section2Icon} alt="" className="possibilities-icon" />
            <div className="possibilities-top-text">
              <h2>Безграничные возможности твоего<br />портфеля</h2>
              <p>Ассортимент продуктов, который включит всё необходимое для диверсификации и роста твоих инвестиций</p>
            </div>
          </div>
          <div className="possibilities-bottom">
            <div className="investment-category">
              <h3>Личные инвестиции:</h3>
              <div className="invest-cards-container">
                {personalInvestments.map((item, index) => (
                  <div className="invest-card" key={index}>
                    <img src={item.icon} alt={item.title} className="invest-card-icon" />
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="investment-category">
              <h3>Инвестиции в проекты:</h3>
              <div className="invest-cards-container">
                {projectInvestments.map((item, index) => (
                  <div className="invest-card" key={index}>
                    <img src={item.icon} alt={item.title} className="invest-card-icon" />
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: One Account */}
      <section className="invest-one-account-section">
        <div className="invest-container-1335">
          <div className="one-account-left">
            <h2>Один счет-безграничные<br />возможности</h2>
            <p>Универсальный инвестиционный счет TOT – это волшебный ключ, который открывает двери ко всем финансовым рынкам мира. Забудь о границах и ограничениях, инвестируй куда душе угодно!</p>
            <ul className="one-account-list">
              {oneAccountList.map((item, index) => (
                <li key={index}>
                  <img src={checkMarkIcon} alt="checkmark" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="one-account-right">
            <img src={section3Image} alt="One Account Possibilities" />
          </div>
        </div>
      </section>

      {/* Section 4: Security */}
      <section className="invest-security-section">
        <div className="invest-container-1240 security-container">
          <div className="security-left">
            <img src={import.meta.env.BASE_URL + 'Frame 5504.svg'} alt="Security" />
          </div>
          <div className="security-right">
            <h2>Твоя безопасность<br />- наш приоритет!</h2>
            <p>Мы разрабатываем системы, которые обеспечат надёжную защиту инвестиций. Включая многофакторную аутентификацию, международные лицензии, блокчейн и строгие протоколы безопасности.</p>
            <Link to="/login" className="btn btn-primary">Подать заявку</Link>
          </div>
        </div>
      </section>

      {/* Section 5: Profitable Investments */}
      <section className="invest-profitable-section">
        <div className="invest-container-1240 profitable-container">
          <h2>Выбирай самые выгодные инвестиции</h2>
          <p className="profitable-subtitle">Мы отбираем для тебя лучшие инвестиционные решения. Скоро ты легко сможешь начать зарабатывать с нами. Позволь своим сбережениям приносить пассивный доход.</p>
          
          <div className="profitable-tabs">
            <button className="tab-btn active">Акции/Облигации</button>
            <button className="tab-btn" disabled>Индексы (в разработке)</button>
            <button className="tab-btn" disabled>Криптовалюты (в разработке)</button>
            <button className="tab-btn" disabled>Валюты (в разработке)</button>
            <button className="tab-btn" disabled>Фьючерсы (в разработке)</button>
            <button className="tab-btn" disabled>Опционы (в разработке)</button>
          </div>

          <div className="profitable-content">
            {investmentProducts.map((product, index) => (
              <div className="investment-product-card" key={index}>
                <div className="card-left">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-details">
                    <h4>{product.title}</h4>
                    <div className="product-pills">
                      <span className="pill" style={{ backgroundColor: product.strategy.color, width: product.strategy.width }}>{product.strategy.text}</span>
                      <span className="pill pill-gray">
                        <img src={personsIcon} alt="investors" />
                        {product.investors}
                      </span>
                      <span className="pill pill-gray" style={{ width: '125px' }}>
                        <img src={conservIcon} alt="risk" />
                        {product.risk}
                      </span>
                      <div className="pill star-pill">
                        <StarRating rating={product.rating} />
                        <span className="rating-number">{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-right">
                  <img src={profitChartIcon} alt="profit chart" className="profit-chart" />
                  <div className="profit-details">
                    <span className="profit-value" style={{ color: product.profit.startsWith('+') ? '#25DE85' : '#FF2B00' }}>{product.profit}</span>
                    <span className="profit-label">Доходность</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="profitable-footer">
            <div className="disclaimer">
              <img src={warningIcon} alt="warning" />
              <div>
                <p className="disclaimer-title">Важно:</p>
                <p className="disclaimer-text">Все инвестиции несут риски потери средств. Рекомендуем проконсультироваться с финансовым консультантом перед принятием решений. На нашей платформе вы можете найти подходящих специалистов.</p>
              </div>
            </div>
            <Link to="/login" className="btn btn-primary">Подать заявку</Link>
          </div>
        </div>
      </section>

      {/* Section 6: Placeholder */}
      <section className="invest-placeholder-section dual-title-section">
          <div className="dual-title-container">
            <h3>Лучшие условия для инвесторов</h3>
            <div className="dual-title-divider"></div>
            <img src={cubeIcon} alt="Cube Icon" />
            <h3>Широкие возможности для создателей</h3>
          </div>
      </section>

      {/* Section 7: Placeholder */}
      <section className="invest-placeholder-section">
        <h2>Инвестиции доступные каждому</h2>
      </section>

    </div>
  );
};

export default InvestmentsLandingPage;