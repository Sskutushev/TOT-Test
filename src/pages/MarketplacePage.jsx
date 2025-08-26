import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import InvestCard from '../components/InvestCard';
import { educationProducts, investProducts } from '../data/marketplaceData';

const MarketplacePage = () => {
  const [eduTab, setEduTab] = useState('course');
  const [investTab, setInvestTab] = useState('fund');

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
          <button className={`tab ${eduTab === 'course' ? 'tab--active' : ''}`} onClick={() => setEduTab('course')}>Курсы</button>
          <button className={`tab ${eduTab === 'webinar' ? 'tab--active' : ''}`} onClick={() => setEduTab('webinar')}>Вебинары</button>
          <button className={`tab ${eduTab === 'consult' ? 'tab--active' : ''}`} onClick={() => setEduTab('consult')}>Консультации</button>
        </div>
        <div className="tab-content active">
            <div className="popular-list">
              {educationProducts.filter(p => p.type === eduTab).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
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
          <button className={`tab ${investTab === 'fund' ? 'tab--active' : ''}`} onClick={() => setInvestTab('fund')}>Фонды</button>
          <button className={`tab ${investTab === 'strategy' ? 'tab--active' : ''}`} onClick={() => setInvestTab('strategy')}>Стратегии</button>
          <button className={`tab ${investTab === 'moex' ? 'tab--active' : ''}`} onClick={() => setInvestTab('moex')}>Биржевые инструменты</button>
        </div>
        <div className="tab-content active">
            <div className="popular-list popular-list--invest">
              {investProducts.filter(p => p.type === investTab).map(item => (
                <InvestCard key={item.id} item={item} />
              ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default MarketplacePage;