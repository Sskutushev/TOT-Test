import React, { useState } from 'react';
import './NewsSection.css';
import NewsModal from './NewsModal';

const newsData = [
  {
    id: 1,
    image: '/Frame 5285.svg',
    title: 'Интерактивный конструктор курсов',
    fullTitle: 'Представляем интерактивный конструктор курсов нового поколения',
    shortText: 'Улучшенный инструмент для создания курсов с поддержкой мультимедийных уроков и интерактивных заданий.',
    fullText: `
      <h4>Полная свобода для творчества</h4>
      <p>Наш новый конструктор курсов — это не просто редактор, а полноценная среда для создания уникального образовательного опыта. Теперь вы можете легко интегрировать видео, аудио, интерактивные тесты и даже встраивать сторонние веб-приложения прямо в уроки.</p>
      <ul>
        <li>Поддержка всех современных медиаформатов.</li>
        <li>Гибкая система модулей и уроков.</li>
        <li>Автоматическая проверка заданий и аналитика успеваемости.</li>
      </ul>
      <p>Мы верим, что образование должно быть увлекательным. С новым конструктором ваши курсы станут именно такими.</p>
    `,
  },
  {
    id: 2,
    image: '/Frame 5286.svg',
    title: 'Персональные консультации с...',
    fullTitle: 'Персональные консультации с экспертами стали еще доступнее',
    shortText: 'Расширенные возможности для индивидуальных консультаций с удобным расписанием и управлением встречами.',
    fullText: `
      <h4>Ваш личный наставник</h4>
      <p>Мы полностью переработали интерфейс для заказа и проведения персональных консультаций. Находите нужного эксперта, выбирайте удобное время в его календаре и получайте качественную помощь в решении ваших задач.</p>
      <p>Новая система включает в себя:</p>
      <ul>
        <li>Интегрированный календарь с доступными слотами.</li>
        <li>Безопасный видеочат прямо на платформе.</li>
        <li>Система отзывов и рейтингов для экспертов.</li>
      </ul>
    `,
  },
  {
    id: 3,
    image: '/Frame 5287.svg',
    title: 'Групповые вебинары с множеством спикеров',
    fullTitle: 'Запускайте масштабные онлайн-мероприятия: групповые вебинары с множеством спикеров',
    shortText: 'Новая функция для проведения вебинаров с возможностью приглашения нескольких спикеров и управления участниками.',
    fullText: `
      <h4>Больше спикеров — больше знаний</h4>
      <p>Организация крупных онлайн-конференций стала проще. Наша новая вебинарная платформа позволяет приглашать нескольких спикеров одновременно, переключаться между ними и проводить интерактивные сессии с аудиторией.</p>
      <ul>
        <li>До 10 спикеров в одной трансляции.</li>
        <li>Инструменты для модерации чата и проведения опросов.</li>
        <li>Запись вебинара и автоматическая выгрузка в облако.</li>
      </ul>
    `,
  },
  {
    id: 4,
    image: import.meta.env.BASE_URL + 'Frame 5289.svg',
    title: 'Расширение торговых стратегий и инструментов',
    fullTitle: 'Новые горизонты для инвесторов: расширение торговых стратегий и инструментов',
    shortText: 'Добавлены новые торговые стратегии и инвестиционные инструменты для более разнообразных и прибыльных вложений.',
    fullText: `
      <h4>Инвестируйте как профессионал</h4>
      <p>Мы значительно расширили арсенал доступных инструментов для алготрейдинга и инвестиций. Теперь вам доступны новые рынки, классы активов и готовые стратегии от ведущих экспертов.</p>
      <p>Что нового:</p>
      <ul>
        <li>Доступ к рынку криптовалют и IPO.</li>
        <li>Более 20 новых готовых торговых роботов.</li>
        <li>Инструменты для бэктестинга и оптимизации стратегий.</li>
      </ul>
    `,
  },
];

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const generateRandomDate = () => {
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = 2025;
    return `${day}.${month}.${year}`;
  };

  const openModal = (news) => {
    setSelectedNews({ ...news, date: generateRandomDate() });
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  const newsColumns = newsData.reduce((acc, item, index) => {
    const columnIndex = index % 2;
    if (!acc[columnIndex]) {
      acc[columnIndex] = [];
    }
    acc[columnIndex].push(item);
    return acc;
  }, []);

  return (
    <>
      <section className="news-section">
        <div className="news-container">
          <div className="news-columns">
            {newsColumns.map((column, colIndex) => (
              <div className="news-column" key={colIndex}>
                {column.map((news) => (
                  <div className="news-card" key={news.id}>
                    <img src={news.image} alt={news.title} className="news-card-image" />
                    <div className="news-card-content">
                      <h3 className="news-card-title">{news.title}</h3>
                      <span className="news-card-date">{generateRandomDate()}</span>
                      <p className="news-card-text">{news.shortText}</p>
                      <button className="news-card-button" onClick={() => openModal(news)}>
                        Подробнее
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="news-sidebar">
            <div className="news-sidebar-top">
              <h2 className="news-sidebar-title">Следи за обновлениями чтобы оставаться на волне инноваций</h2>
              <p className="news-sidebar-text">
                Мы продолжаем развивать платформу, выпускаем обновления на основе обратной связи пользователей. Подпишись, чтобы не пропускать новости
              </p>
              <button className="btn btn-primary news-sidebar-button">Больше новостей</button>
            </div>
            <div className="news-sidebar-bottom">
              <video className="news-video" src="/Новости.mp4" autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </section>
      <NewsModal news={selectedNews} onClose={closeModal} />
    </>
  );
};

export default NewsSection;
