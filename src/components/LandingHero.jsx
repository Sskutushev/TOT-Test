
import React from 'react';
import './LandingHero.css';

// Используем точные имена файлов, включая .png и .svg, из папки /public.
const t1_img = '/Union.svg';
const t2_img = import.meta.env.BASE_URL + 'Union.svg'; // Дублируем рабочий треугольник
const t3_img = import.meta.env.BASE_URL + 'Union.svg'; // Дублируем рабочий треугольник
const t4_img = '/Union.svg';
const group940 = import.meta.env.BASE_URL + 'Group 940.svg';
const group941 = import.meta.env.BASE_URL + 'Group 941.svg';
const group942 = '/Group 942.svg';

const LandingHero = () => {
  return (
    <section className="landing-hero">
      <div className="hero-content-container">
        <div className="hero-left">
          <h1>Торгуй. Обучай. Твори</h1>
          <h2>- всё в одном месте</h2>
          <p>Открой для себя новый многогранный мир, где твои идеи становятся глобальными проектами</p>
          <button className="join-btn">Присоединиться</button>
        </div>
        <div className="hero-separator"></div>
        <div className="hero-right">
          <div className="mini-banner">
            <div className="banner-decorations">
                <img src={t1_img} alt="" className="triangle t1" />
                <img src={t2_img} alt="" className="triangle t2" />
                <img src={t3_img} alt="" className="triangle t3" />
                <img src={t4_img} alt="" className="triangle t4" />

                <img src={group940} alt="" className="deco-icon i1" />
                <img src={group942} alt="" className="deco-icon i2" />
                <img src={group941} alt="" className="deco-icon i3" />
              </div>
            <div className="banner-content">
              <h3>Сообщество. Знания. Рост</h3>
              <p>Объединяем креаторов, учеников и инвесторов. Создавай курсы, монетизируй знания и расти вместе с сообществом.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-video-container">
        <video src={import.meta.env.BASE_URL + "1.mp4"} autoPlay loop muted playsInline className="hero-video"></video>
      </div>
    </section>
  );
};

export default LandingHero;
