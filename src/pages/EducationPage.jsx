import React from 'react';
import { Link } from 'react-router-dom';
import './EducationPage.css';
import PlatformSection from '../components/education/PlatformSection';
import InteractiveInfoSection from '../components/education/InteractiveInfoSection';
import HowToStartSection from '../components/education/HowToStartSection';
import SupportSection from '../components/education/SupportSection';

const EducationPage = () => {
  return (
    <>
      <div className="education-hero-section">
        <div className="education-hero-container">
          <div className="education-hero-left">
            <h1>Платформа для учеников и преподавателей</h1>
            <p>Что ты можешь получить на TOT как ученик или преподаватель? Многообразие образовательных продуктов на любой вкус</p>
            <Link to="/login" className="education-hero-button btn btn-primary">Начать сейчас</Link>
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
      <div className="platform-section-wrapper">
        <PlatformSection />
      </div>
      <InteractiveInfoSection />
      <HowToStartSection />
      <SupportSection />
    </>
  );
};

export default EducationPage;