import React from 'react';
import { Link } from 'react-router-dom';

const tagColorMap = {
  'tag--course': 'bg-blue-400 text-white',
  'tag--consult': 'bg-green-500 text-white',
  'tag--webinar': 'bg-red-400 text-white',
  'tag--check': 'bg-purple-400 text-white',
  'tag--guide': 'bg-indigo-400 text-white',
  'tag--soft': 'bg-yellow-500 text-white',
  'tag--level': 'bg-gray-100 text-gray-800',
  'tag--time': 'bg-gray-100 text-gray-800',
};

const ProductCard = ({ product }) => {
  const { imageUrl, rating, reviews, title, tags, description, price, type } = product;

  const detailsLink = type === 'course' ? '/education_product_course' : '/education_product_consult';

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col min-w-[260px] flex-shrink-0 basis-60 overflow-hidden">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
        <div className="absolute top-2 right-2 bg-white/80 rounded-full px-2 py-1 flex items-center gap-1 text-xs">
          <span className="font-bold text-yellow-500">★</span>
          <span>{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h4 className="font-bold text-sm mb-2 truncate">{title}</h4>
        <div className="flex gap-1.5 mb-2">
          {tags.map(tag => (
            <span key={tag.text} className={`text-[10px] px-1.5 py-0.5 rounded-full whitespace-nowrap ${tagColorMap[tag.modifier] || 'bg-gray-200'}`}>
              {tag.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-600 flex-grow">{description}</p>
      </div>
      <div className="p-3 flex justify-between items-center border-t border-gray-100 mt-auto">
        <span className="text-lg font-bold text-orange-500">${price}</span>
        <Link to={detailsLink} className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-3 py-1.5 text-xs inline-flex items-center gap-1 cursor-pointer no-underline">
          Подробнее <img src="/img/arrow-right.svg" alt="" className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
