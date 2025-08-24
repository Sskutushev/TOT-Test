import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <div className="card-image">
            <img src={product.image} alt="" />
            <div className="inf-rat_rew"><span className="rating">{product.rating} ★</span><span className="reviews">{product.reviews}</span></div>
        </div>
        <div className="card-body">
            <h4>{product.title}</h4>
            <div className="tags">
                <span className={`tag ${product.tagClass}`}>{product.tagText}</span>
                <span className="tag tag--level">{product.level}</span>
                <span className="tag tag--time">{product.duration}</span>
            </div>
            <p>{product.description}</p>
        </div>
        <div className="card-footer">
            <span className="price">$ {product.price}</span>
            <Link to={product.link} className="button-withicon">Подробнее <img src="/img/arrow-right.svg" alt="" /></Link>
        </div>
    </div>
);

const MarketEducationPage = () => {
    const products = [
        { id: 1, image: '/img/investment-course-promo.svg', rating: 3.8, reviews: 100, title: 'Умный инвестор в криптовалютах', tagClass: 'tag--course', tagText: 'Курс', level: 'Нач', duration: '1 мес', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae porta sapien...', price: 567, link: '/education_product_course' },
        // ... more products
    ];

    return (
        <main className="market-subpage">
            <div className="page-header">
                <Link to="/marketplace" className="back-button">
                    <img src="/img/arrow back black.svg" alt="Назад" />
                    <span>Вернуться</span>
                </Link>
                <h1>Обучение</h1>
            </div>

            <div className="search-row">
                {/* Search and filter elements are static for now */}
            </div>

            <div className="content-wrapper">
                <div className="product-grid">
                    {products.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
                <aside className="filters-panel">
                    {/* Filters are static for now */}
                </aside>
            </div>
        </main>
    );
};

export default MarketEducationPage;
