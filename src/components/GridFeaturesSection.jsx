import React from 'react';
import './GridFeaturesSection.css';

const GridFeaturesSection = () => {
  const cardData = [
    { id: 1, icon: 'целая.svg', title: 'Целая экосистема', text: 'Инвестиции, социальная сеть, обучение и маркетплейс в многогранной платформе.', gridArea: 'card1' },
    { id: 2, icon: 'широкий.svg', title: 'Широкий выбор образовательных продуктов', text: 'Курсы, вебинары, частные консультации, репетиторство и прочие продукты.', gridArea: 'card2' },
    { id: 3, icon: 'инструменты.svg', title: 'Инструменты для преподавателей', text: 'Удобный и простой конструктор курсов, широкие возможности аналитики.', gridArea: 'card3' },
    { id: 4, icon: 'Инвестиционные.svg', title: 'инвестиционные продукты', text: 'Фонды, автоследование, валюты, акции, облигации и многое другое', inDevelopment: true, gridArea: 'card4' },
    { id: 5, icon: 'Курс.svg', title: 'Курс на масштабируемость', text: 'Мы не стоим на месте. В наши планы входит постоянное расширение функционала платформы.', gridArea: 'card5' },
  ];

  return (
    <section className="grid-features-section">
      <div className="video-bg-container">
        <video src={import.meta.env.BASE_URL + 'left.mp4'} autoPlay loop muted playsInline className="left-video"></video>
        <video src={import.meta.env.BASE_URL + 'right.mp4'} autoPlay loop muted playsInline className="right-video"></video>
      </div>
      <div className="grid-features-container">
        <div className="grid-features-title-block">
          <h2>Погрузись в мир безграничных возможностей</h2>
          <a href="/login" className="grid-features-btn btn btn-primary">Начать сейчас</a>
          <img src={import.meta.env.BASE_URL + 'Кубок.svg'} alt="" className="cup-overlay" />
        </div>
        {cardData.map(card => (
          <div key={card.id} className="feature-card" style={{ gridArea: card.gridArea }}>
            <div className="feature-card-header">
                <img src={import.meta.env.BASE_URL + card.icon} alt="" className="feature-card-icon" />
            </div>
            {card.inDevelopment ? (
              <>
                <div className="feature-dev-badge"><span>В разработке</span></div>
                <h3>{card.title}</h3>
              </>
            ) : (
              <h3>{card.title}</h3>
            )}
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridFeaturesSection;
