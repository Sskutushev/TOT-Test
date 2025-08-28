import React from 'react';
import './FeaturesSection.css';

const ellipse48 = import.meta.env.BASE_URL + 'Ellipse 48.svg';
const ellipse49 = import.meta.env.BASE_URL + 'Ellipse 49.svg';
const frame4972 = import.meta.env.BASE_URL + 'Frame 4972.svg';
const frame4973 = import.meta.env.BASE_URL + 'Frame 4973.svg';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <img src={ellipse48} alt="" className="bg-ellipse ellipse-top-left" />
        <img src={ellipse49} alt="" className="bg-ellipse ellipse-bottom-right" />

        <div className="feature-main-content">
            <img src={frame4972} alt="Feature visual" className="feature-frame-left" />
            <img src={frame4973} alt="Feature visual" className="feature-frame-right" />
            
            <h2 className="features-title">TOT — это цифровой кристалл твоих возможностей</h2>
            
            <div className="text-box-right">
                <p>Каждая грань TOT открывает путь к реализации идей: создавай авторские курсы, запускай образовательные программы, продавай товары и услуги, инвестируй и развивай личный бренд</p>
            </div>

            <div className="text-box-left">
                <p>Присоединяйся прямо сейчас — регистрируйся и начни раскрывать все грани своих возможностей вместе с TOT!</p>
            </div>

            <p className="final-text">Никаких посредников и ограничений! TOT — платформа, созданная для свободы: продавайте, продвигайте и общайтесь с аудиторией напрямую, без лишних барьеров</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
