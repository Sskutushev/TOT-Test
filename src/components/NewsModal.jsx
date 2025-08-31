import React from 'react';
import './NewsModal.css';

const NewsModal = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="news-modal-close" onClick={onClose}>&times;</button>
        <img src={news.image} alt={news.title} className="news-modal-image" />
        <div className="news-modal-body">
          <h2 className="news-modal-title">{news.fullTitle}</h2>
          <span className="news-modal-date">{news.date}</span>
          <div className="news-modal-full-text" dangerouslySetInnerHTML={{ __html: news.fullText }}></div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
