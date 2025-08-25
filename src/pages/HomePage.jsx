import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [eduTab, setEduTab] = useState('edu-student');
  const [investTab, setInvestTab] = useState('inv-investor');

  return (
    <main className="startpage">
      <div className="top-row">
        <section className="banner">
          <div className="banner-text">
            <h1>Добро пожаловать</h1>
            <p>Ознакомься с основными возможностями платформы и выбери то, что нужно именно тебе!</p>
          </div>
          <div className="banner-illustration">
            <img src="img/Group 995 (1).svg" alt="" />
          </div>
        </section>
        <section className="help-card">
          <h2>Раздел помощи</h2>
          <p>Если остались вопросы, всегда можно обратиться к нашему разделу помощи</p>
          <Link to="/help" className="btn-outline">Смотреть</Link>
        </section>
      </div>

      <section className="social-features">
        <h2>Социальная сеть</h2>
        <div className="cards-row">
          <article className="card">
            <img src="img/rocket.svg" alt="" className="icon" />
            <div className="content">
              <h3>С чего начать?</h3>
              <p>Заполни данные своей страницы и расскажи про себя больше. Установи аватар и обложку, добавь фото, видео и напиши первый пост</p>
              <Link to="/profile" className="card-btn">К профилю →</Link>
            </div>
          </article>
          <article className="card">
            <img src="img/chat1.svg" alt="" className="icon" />
            <div className="content">
              <h3>Удобные чаты</h3>
              <p>Пиши в личных сообщениях преподавателям или в групповых чатах</p>
              <Link to="/messages" className="card-btn">К чатам →</Link>
            </div>
          </article>
          <article className="card">
            <img src="img/subscribtions.svg" alt="" className="icon" />
            <div className="content">
              <h3>Настройка подписок</h3>
              <p>В нашей социальной сети можно подписаться на школы, преподавателей или просто на интересных личностей и следить за их обновлениями</p>
              <div className="two-btns">
                <Link to="/persons" className="card-btn">Искать персон</Link>
                <Link to="/projects" className="card-btn">Искать проекты</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs-block education-section">
            <h2>Образование</h2>
            <div className="tabs">
              <button className={`tab ${eduTab === 'edu-student' ? 'active' : ''}`} onClick={() => setEduTab('edu-student')}>Ученикам</button>
              <button className={`tab ${eduTab === 'edu-teacher' ? 'active' : ''}`} onClick={() => setEduTab('edu-teacher')}>Преподавателям</button>
            </div>
            {eduTab === 'edu-student' && (
              <div className="tab-content active">
                <div className="education-cards">
                  <article className="large-card">
                    <img src="img/translations.png" className="icon-lg" alt="" />
                    <div>
                      <h3>Онлайн трансляции</h3>
                      <p>Просмотр трансляций в режиме онлайн и в записи. Большой выбор бесплатных трансляций</p>
                      <Link to="/streams" className="link-btn">К трансляциям →</Link>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/catalog.png" className="icon-lg" alt="" />
                    <div>
                      <h3>Маркетплейс</h3>
                      <p>Курсы, вебинары, консультации и многое другое доступно на нашем маркетплейсе. Удобная фильтрация поможет ускорить выбор нужного продукта</p>
                      <Link to="/marketplace" className="link-btn">К продуктам →</Link>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/calendar.png" className="icon-lg" alt="" />
                    <div>
                      <h3>Личное расписание</h3>
                      <p>Удобный календарь, где можно выстроить своё расписание. Уведомления помогут не пропустить ни одного важного события</p>
                      <Link to="/calendar" className="link-btn">В календарь →</Link>
                    </div>
                  </article>
                </div>
              </div>
            )}
            {eduTab === 'edu-teacher' && (
              <div className="tab-content active">
                <div className="education-cards">
                  <article className="large-card">
                    <img src="img/Group 976.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Создание и продажа продуктов</h3>
                      <p>Конструктор курсов, платные вебинары, консультации и многое другое. Доступно на тарифах «Профи» и «Бизнес»</p>
                      <button className="link-btn">Смотреть тарифы →</button>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/analitycs.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Аналитика продуктов</h3>
                      <p>Доступ к финансовой аналитике по всем продуктам и по каждому в частности. Аналитика по процессу обучения и по ученикам. Доступно на тарифах «Профи» и «Бизнес»</p>
                      <button className="link-btn">Смотреть тарифы →</button>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/tarif 2.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Собственная школа</h3>
                      <p>Возможность открыть собственную школу, нанимать персонал и развивать медийность. Доступно на тарифах «Профи» и «Бизнес»</p>
                      <button className="link-btn">Смотреть тарифы →</button>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </div>

          <div className="tabs-block investment-section">
            <h2>Инвестиции</h2>
            <div className="tabs">
              <button className={`tab ${investTab === 'inv-investor' ? 'active' : ''}`} onClick={() => setInvestTab('inv-investor')}>Инвестор</button>
              <button className={`tab ${investTab === 'inv-trader' ? 'active' : ''}`} onClick={() => setInvestTab('inv-trader')}>Трейдер</button>
            </div>
            {investTab === 'inv-investor' && (
              <div className="tab-content active">
                <div className="investment-cards">
                  <article className="large-card">
                    <img src="img/Account.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Единый счёт</h3>
                      <p>Инвестору доступен весь мировой финансовый рынок через единый счёт. Вся инфраструктура соответствует требованиям юрисдикций и лицензий стран, где совершаются сделки, обеспечивая законность и безопасность инвестиций</p>
                      <button className="link-btn">Открыть счёт →</button>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/Invest products.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Инвестиционные продукты</h3>
                      <p>Платформа для подключения к стратегиям управляющих, фондов и покупка финансовых инструментов с рекомендациями</p>
                      <Link to="/market_invest" className="link-btn">Выбрать продукт →</Link>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/WORK invest.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Личный рабочий стол</h3>
                      <p>Доступ к аналитике и управлению всеми приобретенными инвестиционными продуктами. Отслеживание доходности и уведомления.</p>
                      <Link to="/desk" className="link-btn">К рабочему столу →</Link>
                    </div>
                  </article>
                </div>
              </div>
            )}
            {investTab === 'inv-trader' && (
              <div className="tab-content active">
                <div className="investment-cards">
                  <article className="large-card">
                    <img src="img/create invest.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Создание и продажа</h3>
                      <p>Возможность создавать инвестиционные стратегии, настраивать подписки, проводить вебинары и размещать продукты на маркетплейсе</p>
                      <button className="link-btn">Смотреть тарифы →</button>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/Analytics_set.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Аналитика по стратегиям</h3>
                      <p>Расширенная аналитика по вашим инвестиционным продуктам: доходность, поведение подписчиков, обратная связь и детализация по каждому инструменту</p>
                      <button className="link-btn">Подробнее →</button>
                    </div>
                  </article>
                  <article className="large-card">
                    <img src="img/invest tools.svg" className="icon-lg" alt="" />
                    <div>
                      <h3>Платформа трейдера</h3>
                      <p>Доступ к единой платформе с инструментами для торговли, выбора брокеров и создания собственных стратегий. Всё в одном месте.</p>
                      <button className="link-btn">Подробнее →</button>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="updates">
        <h2>Обновления платформы</h2>
        <div className="updates-row">
          <article className="upd-card">
            <img src="img/2345к23 1.svg" alt="" />
            <h3>Интерактивный конструктор курсов</h3>
            <div className="date">10.05.2024</div>
            <p>Улучшенный инструмент для создания курсов с поддержкой мультимедийных уроков и интерактивных заданий.</p>
            <button className="btn-text">Подробнее →</button>
          </article>
          <article className="upd-card">
            <img src="img/453ц 1.svg" alt="" />
            <h3>Групповые вебинары с множеством спикеров</h3>
            <div className="date">10.05.2024</div>
            <p>Новая функция для проведения вебинаров с возможностью приглашения нескольких спикеров и управления...</p>
            <button className="btn-text">Подробнее →</button>
          </article>
          <article className="upd-card">
            <img src="img/3452 1.png" alt="" />
            <h3>Персональные консультации</h3>
            <div className="date">10.05.2024</div>
            <p>Расширенные возможности для индивидуальных консультаций с удобным расписанием и управлением встречами.</p>
            <button className="btn-text">Подробнее →</button>
          </article>
          <article className="upd-card">
            <img src="img/3452 1.png" alt="" />
            <h3>Персональные консультации</h3>
            <div className="date">10.05.2024</div>
            <p>Расширенные возможности для индивидуальных консультаций с удобным расписанием и управлением встречами.</p>
            <button className="btn-text">Подробнее →</button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default HomePage;