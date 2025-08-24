import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EducationProductCoursePage = () => {
    const [activeTab, setActiveTab] = useState('pane-description');

    const renderActivePane = () => {
        switch(activeTab) {
            case 'pane-description':
                return (
                    <div id="pane-description" className="product-tab-pane active">
                        <div className="description-section">
                            <h3>Общее описание:</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis quam, aliquet ullamcorper justo ac, ultrices blandit felis. In hac habitasse platea dictumst. Aliquam gravida varius semper...</p>
                        </div>
                    </div>
                );
            case 'pane-teachers':
                 return <div className="product-tab-pane active"><h3>Преподаватели</h3></div>;
            case 'pane-program':
                 return <div className="product-tab-pane active"><h3>Программа</h3></div>;
            case 'pane-reviews':
                 return <div className="product-tab-pane active"><h3>Отзывы</h3></div>;
            default:
                return null;
        }
    }

    return (
        <main className="product-page">
            <div className="page-header">
                <Link to="/market_education" className="back-button">
                    <img src="/img/arrow back black.svg" alt="Назад" />
                    <span>Вернуться</span>
                </Link>
                <h1>Подробная информация</h1>
            </div>

            <div className="product-layout">
                <div className="product-main-content">
                    <img src="/img/DALL·E 2024-08-06 15.01.41 - A modern and sophisticated image representing investment courses. The scene is set in a virtual classroom with a large, sleek computer screen at the c 1.svg" alt="Обложка курса" className="product-cover-image" />
                    <div className="product-info-body">
                        <div className="product-tags">
                            <span className="tag tag--course">Курс</span>
                            <span className="tag">Инвестиции и финансы</span>
                        </div>
                        <h2 className="product-title">Умный инвестор в криптовалютах</h2>
                        <div className="product-tabs-wrapper">
                            <nav className="product-tabs">
                                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-description')}} className={`product-tab ${activeTab === 'pane-description' ? 'active' : ''}`}>Описание</a>
                                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-teachers')}} className={`product-tab ${activeTab === 'pane-teachers' ? 'active' : ''}`}>Преподаватели</a>
                                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-program')}} className={`product-tab ${activeTab === 'pane-program' ? 'active' : ''}`}>Программа</a>
                                <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('pane-reviews')}} className={`product-tab ${activeTab === 'pane-reviews' ? 'active' : ''}`}>Отзывы</a>
                            </nav>
                            <div className="product-panes">
                                {renderActivePane()}
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="product-sidebar">
                    <div className="sidebar-widget">
                        <div className="widget-header">
                            <div className="inf-rat_rew">
                                <span className="rating">3.8 ★</span><span className="reviews">100</span>
                            </div>
                            <button className="card-menu-btn"></button>
                        </div>
                        <div className="price-block">
                            <span>Стоимость:</span>
                            <strong className="price">$ 500</strong>
                        </div>
                        <div className="buy-actions">
                            <button className="btn-outline">Демо</button>
                            <button className="button-small-withicon">Купить</button>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default EducationProductCoursePage;
