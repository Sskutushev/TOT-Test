import React from 'react';
import './MarketplacePromoSection.css';

const MarketplacePromoSection = () => {
  const features = [
    'Инструменты для продвижения твоих продуктов',
    'Гибкие форматы для твоих образовательных продуктов',
    'Обновление продуктов без ограничений',
    'Простой способ начать зарабатывать на своих знаниях',
    'Поддержка и обратная связь от сообщества',
    'Большая аудитория, готовая учиться и развиваться',
  ];

  return (
    <section className="marketplace-promo-section">
      <div className="marketplace-promo-container">
        <div className="marketplace-promo-left">
          <h2>Создавай, продавай, зарабатывай: твои знания - твой доход</h2>
          <p className="promo-subtitle">Что такое маркетплейс в TOT? Это твой инструмент для монетизации профессионализма и опыта: здесь ты можешь предлагать инвестиционные услуги, создавать авторские курсы и выстраивать собственный бизнес, объединяя всё в рамках одной платформы.</p>
          <div className="promo-features-list">
            {features.map((feature, index) => (
              <div key={index} className="promo-feature-item">
                <img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <a href="/marketplace-landing" className="promo-details-btn btn btn-primary">Подробнее</a>
        </div>
        <div className="marketplace-promo-right">
          <video src={import.meta.env.BASE_URL + 'market1.mp4'} autoPlay loop muted playsInline></video>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePromoSection;
