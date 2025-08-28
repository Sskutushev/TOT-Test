import React from 'react';
import { Link } from 'react-router-dom';
import './EducationSection.css';

const EducationSection = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        <div className="education-video-wrapper">
          <video src={import.meta.env.BASE_URL + 'обучение.mp4'} autoPlay loop muted playsInline className="education-video"></video>
        </div>

        <div className="education-content">
          <h2>Образовательная платформа -<br/>для развития и роста</h2>
          <p>Независимо от того, школьник ты, студент или взрослый — здесь ты найдёшь знания, которые помогут тебе расти и зарабатывать</p>
          <h3>Основные преимущества для учеников:</h3>
          <div className="features-list">
            <div className="features-column">
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Удобный личный кабинет</p>
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Возможность стать создателем курсов</p>
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Доступ к живому сообществу для участия в дискуссиях и поддержки</p>
            </div>
            <div className="features-column">
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Широкий выбор курсов, материалов и преподавателей</p>
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Геймификация и награды (Доступно скоро)</p>
              <p><img src={import.meta.env.BASE_URL + 'mark.svg'} alt="" />Реальные отзывы с живой системой рейтинга</p>
            </div>
          </div>
          <Link to="/education" className="education-details-btn">Подробнее</Link>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
