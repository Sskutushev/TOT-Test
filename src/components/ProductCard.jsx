import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { imageUrl, rating, reviews, title, tags, description, price, type } = product;

  const detailsLink = type === 'course' ? '/education_product_course' : '/education_product_consult';

  return (
    <div className="product-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
        <div className="inf-rat_rew">
          <span className="rating">{rating} ★</span>
          <span className="reviews">{reviews}</span>
        </div>
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag.text} className={`tag ${tag.modifier}`}>{tag.text}</span>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span className="price">$ {price}</span>
        <Link to={detailsLink} className="button-withicon">
          Подробнее <img src="/img/arrow-right.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;