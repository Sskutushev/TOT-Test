import React from 'react';
import { Link } from 'react-router-dom';
import './DirectionsSection.css';

const DirectionsSection = () => {

  const directions = [
    {
      title: 'Инвестиции',
      img: import.meta.env.BASE_URL + 'Investments.svg',
      link: '/investments'
    },
    {
      title: 'Обучение',
      img: import.meta.env.BASE_URL + 'study.svg',
      link: '/education'
    },
    {
      title: 'Маркетплейс',
      img: import.meta.env.BASE_URL + 'Basket.svg',
      link: '/marketplace-landing'
    },
    {
      title: 'Социальная сеть',
      img: import.meta.env.BASE_URL + 'social.svg',
      link: '/social'
    }
  ];

  return (
    <section className="directions-section">
      <div className="directions-container">
        <img src={import.meta.env.BASE_URL + 'Ellipse 56.svg'} alt="" className="bg-ellipse-directions" />
        
        <div className="directions-left">
          <h2>Начни знакомство<br/>с миром ТОТ</h2>
          <p>Перед тобой ключевые направления — Инвестиции, Социальная сеть, Образование и Маркетплейс, которые в многогранной экосистеме TOT объединяют заработок и обучение</p>
          <Link to="/login" className="directions-join-btn">Войти</Link>
        </div>

        <div className="directions-right">
          <div className="directions-grid">
            {directions.map((item, index) => (
              <Link to={item.link} key={index} className="direction-card">
                <div className="card-content">
                  <img src={item.img} alt={item.title} className="card-icon"/>
                  <h3>{item.title}</h3>
                  <div className="card-arrow">
                    <img src={import.meta.env.BASE_URL + 'Group 54.svg'} alt="Перейти" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DirectionsSection;
