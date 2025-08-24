import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MarketplacePage = () => {
  const [eduTab, setEduTab] = useState('edu-courses');
  const [investTab, setInvestTab] = useState('inv-funds');

  const renderProductCards = (type) => (
    <div className="popular-list">
      <div className="product-card">
        <div className="card-image">
          <img src="/img/investment-course-promo.svg" alt="" />
          <div className="inf-rat_rew"><span className="rating">3.8 ★</span><span className="reviews">100</span></div>
        </div>
        <div className="card-body">
          <h4>Умный инвестор в криптовалютах</h4>
          <div className="tags">
            <span className={`tag tag--${type}`}>{type}</span>
            <span className="tag tag--level">Нач</span>
            <span className="tag tag--time">1 мес</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae porta sapien, quis euismod mauris.</p>
        </div>
        <div className="card-footer">
          <span className="price">$ 567</span>
          <button className="button-withicon">Подробнее <img src="/img/arrow-right.svg" alt="" /></button>
        </div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );

  const renderInvestCards = () => (
    <div className="popular-list popular-list--invest">
        <div className="invest-card">
            <div className="invest-header">
                <span className="label label--opif">ОПИФ</span>
                <span className="currency">EUR</span>
                <span className="asset">Облигации</span>
            </div>
            <div className="growth">
                <span className="growth-value">+ 20,69%</span>
                <span className="growth-period">Всё время</span>
                <img src="/img/Chart Container.svg" alt="Рост" className="growth-img" />
            </div>
            <div className="rating">
                <span className="rating">3.8 ★</span>
                <span className="reviews">100</span>
            </div>
            <h4>Еврооблигации</h4>
            <ul className="invest-info">
                <li>Рекомендованный срок инвестирования: <strong>от 2 лет</strong></li>
                <li>Уровень риска: <strong>Низкий</strong></li>
            </ul>
            <button className="button-small-withicon">Подробнее <img src="/img/arrow-right.svg" alt="" /></button>
        </div>
        {/* Add more cards as needed */}
    </div>
  );

  return (
    <main className="marketpage">
      <section className="categories">
        <div className="category-card">
          <Link to="/market_education" className="category-link">
            <div className="category-bg" style={{backgroundImage: "url('/img/Category card (1).svg')"}}></div>
            <div className="category-text">
              <h2>Обучение</h2>
              <p>Курсы, вебинары, консультации, чек-листы, гайды и др.</p>
            </div>
            <div className="category-img">
              <img src="/img/Image Category.png" alt="" />
            </div>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/market_invest" className="category-link">
            <div className="category-bg" style={{backgroundImage: "url('/img/Category card.svg')"}}></div>
            <div className="category-text">
              <h2>Инвестиции</h2>
              <p>Фонды, автоследование, ценные бумаги, валюты и др.</p>
            </div>
            <div className="category-img">
              <img src="/img/Image Category.svg" alt="" />
            </div>
          </Link>
        </div>
      </section>

      <section className="popular popular--education">
        <div className="popular-header">
          <h3>Популярное обучение:</h3>
          <Link to="/market_education" className="btn-link">
            Перейти в раздел <img src="/img/arrow.svg" alt="" />
          </Link>
        </div>
        <div className="popular-tabs">
          <button className={`tab ${eduTab === 'edu-courses' ? 'tab--active' : ''}`} onClick={() => setEduTab('edu-courses')}>Курсы</button>
          <button className={`tab ${eduTab === 'edu-webinars' ? 'tab--active' : ''}`} onClick={() => setEduTab('edu-webinars')}>Вебинары</button>
          <button className={`tab ${eduTab === 'edu-consults' ? 'tab--active' : ''}`} onClick={() => setEduTab('edu-consults')}>Консультации</button>
        </div>
        <div className="tab-content active">
            { eduTab === 'edu-courses' && renderProductCards('course') }
            { eduTab === 'edu-webinars' && renderProductCards('webinar') }
            { eduTab === 'edu-consults' && renderProductCards('consult') }
        </div>
      </section>

      <section className="popular popular--invest">
        <div className="popular-header">
          <h3>Популярные инвестиции:</h3>
          <Link to="/market_invest" className="btn-link">
            Перейти в раздел <img src="/img/arrow.svg" alt="" />
          </Link>
        </div>
        <div className="popular-tabs">
          <button className={`tab ${investTab === 'inv-funds' ? 'tab--active' : ''}`} onClick={() => setInvestTab('inv-funds')}>Фонды</button>
          <button className={`tab ${investTab === 'inv-auto' ? 'tab--active' : ''}`} onClick={() => setInvestTab('inv-auto')}>Стратегии</button>
          <button className={`tab ${investTab === 'inv-moex' ? 'tab--active' : ''}`} onClick={() => setInvestTab('inv-moex')}>Биржевые инструменты</button>
        </div>
        <div className="tab-content active">
            { investTab === 'inv-funds' && renderInvestCards() }
            { investTab === 'inv-auto' && renderInvestCards() }
            { investTab === 'inv-moex' && renderInvestCards() }
        </div>
      </section>
    </main>
  );
};

export default MarketplacePage;