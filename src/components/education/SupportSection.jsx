import React from 'react';
import { Link } from 'react-router-dom';
import './SupportSection.css';

const SupportSection = () => {
  return (
    <section className="support-section">
      <img src={import.meta.env.BASE_URL + 'Ellipse 52.svg'} className="support-section__bg-ellipse support-section__bg-ellipse--tl" alt="" />
      <img src={import.meta.env.BASE_URL + 'Ellipse 53.svg'} className="support-section__bg-ellipse support-section__bg-ellipse--br" alt="" />
      <div className="support-section__container">
        
        {/* Top-Left */}
        <div className="support-section__item support-section__item--top-left">
          <h2 className="support-section__title">Круглосуточная поддержка</h2>
          <p className="support-section__text">
            Мы всегда рядом, чтобы помочь. Наша команда готова оказать поддержку в любое время суток. Специалисты готовы помочь каждому в любом взаимодействии с платформой. Наши менеджеры никогда не оставят вас в сложной ситуации и оперативно решат ваш вопрос.
          </p>
        </div>

        {/* Top-Right */}
        <div className="support-section__item support-section__item--top-right">
          <video src={import.meta.env.BASE_URL + 'видео 1.mp4'} autoPlay loop muted playsInline className="support-section__video" />
        </div>

        {/* Bottom-Left */}
        <div className="support-section__item support-section__item--bottom-left">
          <video src={import.meta.env.BASE_URL + 'Видео 2.mp4'} autoPlay loop muted playsInline className="support-section__video" />
        </div>

        {/* Bottom-Right */}
        <div className="support-section__item support-section__item--bottom-right">
          <h2 className="support-section__title">Откройте для себя новый путь к безграничным знаниям</h2>
          <p className="support-section__text">
            Присоединяйся к нашей платформе, создавай и проходи курсы, достигай новых высот. Не упусти шанс построить своё успешное будущее!
          </p>
          <Link to="/login" className="btn btn-primary support-section__button">
            Присоединиться
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SupportSection;
