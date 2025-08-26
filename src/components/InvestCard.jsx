import React from 'react';
import { Link } from 'react-router-dom';
import arrowRightIcon from '/img/arrow-right.svg';

const labelColorMap = {
  опиф: 'bg-blue-400 text-white',
  етф: 'bg-teal-400 text-white',
  епиф: 'bg-purple-400 text-white',
  автослед: 'bg-orange-400 text-white',
  биржа: 'bg-gray-500 text-white',
};

const InvestCard = ({ item }) => {
  const { label, currency, asset, growthValue, growthPeriod, chartUrl, rating, reviews, title, recommendedTerm, riskLevel } = item;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col min-w-[260px] flex-shrink-0 basis-64 p-4 gap-3">
        <div className="flex gap-2 text-xs">
            <span className={`px-2 py-1 rounded-full font-bold ${labelColorMap[label.toLowerCase()] || 'bg-gray-200'}`}>{label}</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600">{currency}</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600">{asset}</span>
        </div>
        <div className="relative">
            <span className="text-green-500 text-xl font-bold">{growthValue}</span>
            <span className="text-xs text-gray-500 ml-2">{growthPeriod}</span>
            <img src={chartUrl} alt="Рост" className="w-full h-16 mt-1" />
        </div>
        <div className="text-xs text-gray-500 flex items-center">
            <span className="font-bold text-yellow-500 mr-1">★</span>
            <span>{rating}</span>
            <span className="ml-1">({reviews})</span>
        </div>
        <h4 className="font-bold text-base">{title}</h4>
        <ul className="list-none p-0 m-0 text-xs text-gray-600">
            <li className="mb-1">Рекомендованный срок: <strong>{recommendedTerm}</strong></li>
            <li>Уровень риска: <strong>{riskLevel}</strong></li>
        </ul>
        <Link to="/market_invest" className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 text-xs inline-flex items-center gap-1 cursor-pointer no-underline self-start mt-auto">
            Подробнее <img src={arrowRightIcon} alt="" className="w-3 h-3" />
        </Link>
    </div>
  );
};

export default InvestCard;
