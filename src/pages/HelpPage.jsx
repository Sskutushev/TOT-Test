import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => {
  return (
    <main className="help-page">
      <section className="help-search-bar">
        <form className="search-form">
          <div className="search-input-wrapper">
            <img src="img/search.svg" alt="Поиск" />
            <input type="search" placeholder="Поиск по базе знаний..." />
          </div>
          <select className="search-select">
            <option>Везде</option>
            <option>В статьях</option>
            <option>В видео</option>
          </select>
          <button type="submit" className="btn-find">Найти</button>
        </form>
      </section>

      <div className="help-top-section">
        <div className="contact-card support">
          <img src="img/Group 899.svg" alt="Поддержка" className="contact-illustration" />
          <div className="contact-card-content">
            <h3>Есть вопросы?</h3>
            <p>Обратитесь к нам за помощью и мы решим ваш вопрос в любое время суток.</p>
            <div className="contact-buttons">
              <button className="button-small-withicon">Написать в чат</button>
              <button className="btn-outline">Обращение</button>
            </div>
          </div>
        </div>
        <div className="contact-card start" style={{backgroundImage: "url('img/Frame 5673.svg')"}}>
          <div className="card-overlay"></div>
          <div className="contact-card-content">
            <h3>С чего начать?</h3>
            <p>Обзор основных функций платформы для быстрого старта.</p>
            <Link to="#" className="course-continue-btn">Смотреть <img src="img/arrow1.svg" alt="→" /></Link>
          </div>
          <img src="img/Frame 6091.svg" className="start-icon" alt="" />
        </div>
      </div>

      <section className="desk-section">
        <div className="section-header">
          <h2>Справочные материалы</h2>
          <Link to="#" className="btn-link">Смотреть все <img src="img/arrow.svg" alt="→" /></Link>
        </div>
        <div className="help-categories-grid">
          <Link to="#" className="help-category-card"><img src="img/user.svg" alt="" /><div><h3>Профиль</h3><span>12 статей</span></div></Link>
          <Link to="#" className="help-category-card"><img src="img/Homework.svg" alt="" /><div><h3>Личный кабинет</h3><span>8 статей</span></div></Link>
          {/* ... more categories */}
        </div>
      </section>

      <div className="help-bottom-row">
        <section className="desk-section video-section">
          <div className="section-header">
            <h2>Видеоинструкции</h2>
            <Link to="#" className="btn-link">Смотреть все <img src="img/arrow.svg" alt="→" /></Link>
          </div>
          <div className="video-grid content-box">
            {/* Video cards would be mapped here */}
          </div>
        </section>

        <section className="desk-section updates-section">
          <div className="section-header">
            <h2>Обновления и нововведения</h2>
            <Link to="#" className="btn-link">Смотреть все <img src="img/arrow.svg" alt="→" /></Link>
          </div>
          <div className="updates-list content-box">
            {/* Update items would be mapped here */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpPage;
