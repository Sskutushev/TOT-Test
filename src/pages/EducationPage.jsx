import React from 'react';
import { Link } from 'react-router-dom';
import './EducationPage.css';

const EducationPage = () => {
  return (
    <div className="education-hero-section">
      <div className="education-hero-container">
        <div className="education-hero-left">
          <h1>Платформа для учеников и преподавателей</h1>
          <p>Что ты можешь получить на TOT как ученик или преподаватель? Многообразие образовательных продуктов на любой вкус</p>
          <Link to="/login" className="education-hero-button">Начать сейчас</Link>
        </div>
        <div className="education-hero-right">
          <video
            className="education-hero-video"
            src={import.meta.env.BASE_URL + 'Обучение-блок1.mp4'}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
