import React from 'react';
import { Link } from 'react-router-dom';

const EducationProductConsultPage = () => {
  return (
    <main className="product-page">
      <div className="page-header">
        <Link to="/market_education" className="back-button">
          <img src="/img/arrow back black.svg" alt="Назад" />
          <span>Вернуться</span>
        </Link>
        <h1>Консультация</h1>
      </div>
      <div style={{ padding: '2rem' }}>
        <h2>Страница в разработке</h2>
        <p>Содержимое для этой страницы скоро появится.</p>
      </div>
    </main>
  );
};

export default EducationProductConsultPage;
