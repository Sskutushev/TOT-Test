import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvestStrategyCard = ({ strategy }) => (
    <div className="invest-card-autofollow">
        <div className="invest-header"><span className="tag tag--strategy">Стратегия</span><span className="tag">{strategy.currency}</span></div>
        <div className="growth">
            <div className="growth-text">
                <span className="growth-value">{strategy.growth}</span>
                <span className="growth-period">Всё время</span>
            </div>
            <img src={strategy.chartImg} alt="Рост" className="growth-img" />
        </div>
        <div className="inf-rat_rew"><span className="rating">{strategy.rating} ★</span><span className="reviews">{strategy.reviews}</span></div>
        <div className="invest-card-body">
            <h4>{strategy.title}</h4>
            <ul className="invest-details">
                <li><span>Управляющий</span><span className="dot-separator"></span><strong>{strategy.manager}</strong></li>
                <li><span>Уровень риска</span><span className="dot-separator"></span><strong>{strategy.risk}</strong></li>
                <li><span>Количество инвесторов</span><span className="dot-separator"></span><strong>{strategy.investors}</strong></li>
            </ul>
        </div>
        <div className="invest-card-footer"><Link to="#" className="button-withicon">Подробнее <img src="/img/arrow-right.svg" alt="" /></Link></div>
    </div>
);

const MarketInvestPage = () => {
    const [activeTab, setActiveTab] = useState('pane-strategies');

    const strategies = [
        { id: 1, currency: 'EUR', growth: '+20,69%', chartImg: '/img/Chart Container.svg', rating: 3.8, reviews: 100, title: 'Название стратегии', manager: 'Виктор Алексеенко', risk: 'Низкий', investors: 154 },
        // ... more strategies
    ];

    const renderActivePane = () => {
        switch(activeTab) {
            case 'pane-strategies':
                return (
                    <div className="content-wrapper">
                        <div className="invest-grid">
                            {strategies.map(s => <InvestStrategyCard key={s.id} strategy={s} />)}
                        </div>
                        <aside className="filters-panel">{/* Filters for strategies */}</aside>
                    </div>
                );
            default:
                return <div className="content-wrapper"><h2 className="placeholder-title">Контент для этой вкладки скоро появится</h2></div>;
        }
    }

    return (
        <main className="market-subpage">
            <div className="page-header">
                <Link to="/marketplace" className="back-button">
                    <img src="/img/arrow back black.svg" alt="Назад" />
                    <span>Вернуться</span>
                </Link>
                <h1>Инвестиции</h1>
            </div>

            <nav className="market-invest-tabs">
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-funds')}} className={`invest-tab ${activeTab === 'pane-funds' ? 'active' : ''}`}>Фонды</a>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-strategies')}} className={`invest-tab ${activeTab === 'pane-strategies' ? 'active' : ''}`}>Стратегии</a>
                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-exchange')}} className={`invest-tab ${activeTab === 'pane-exchange' ? 'active' : ''}`}>Биржевые инструменты</a>
            </nav>

            <div className="market-invest-content">
                {renderActivePane()}
            </div>
        </main>
    );
};

export default MarketInvestPage;
