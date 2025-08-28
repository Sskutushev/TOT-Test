import React from 'react';
import { Link } from 'react-router-dom';

const InvestCard = ({ item }) => {
  const { label, currency, asset, growthValue, growthPeriod, chartUrl, rating, reviews, title, recommendedTerm, riskLevel } = item;

  return (
    <div className="invest-card">
        <div className="invest-header">
            <span className={`label label--${label.toLowerCase()}`}>{label}</span>
            <span className="currency">{currency}</span>
            <span className="asset">{asset}</span>
        </div>
        <div className="growth">
            <span className="growth-value">{growthValue}</span>
            <span className="growth-period">{growthPeriod}</span>
            <img src={chartUrl} alt="Рост" className="growth-img" />
        </div>
        <div className="rating">
            <span className="rating">{rating} ★</span>
            <span className="reviews">{reviews}</span>
        </div>
        <h4>{title}</h4>
        <ul className="invest-info">
            <li>Рекомендованный срок инвестирования: <strong>{recommendedTerm}</strong></li>
            <li>Уровень риска: <strong>{riskLevel}</strong></li>
        </ul>
        <Link to="/market_invest" className="button-small-withicon">
            Подробнее <img src={import.meta.env.BASE_URL + "img/arrow-right.svg"} alt="" />
        </Link>
    </div>
  );
};

export default InvestCard;