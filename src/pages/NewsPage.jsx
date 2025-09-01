import React, { useState } from 'react';
import './NewsPage.css';
import NewsModal from '../components/NewsModal'; // Assuming NewsModal is in components

const newsData = [
  {
    id: 1,
    image: import.meta.env.BASE_URL + 'Интерактивный.svg',
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
    image: import.meta.env.BASE_URL + 'Персональные.svg',
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
    image: import.meta.env.BASE_URL + 'Групповые.svg',
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
    image: import.meta.env.BASE_URL + 'Frame_news4.svg',
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
  {
    id: 5,
    image: import.meta.env.BASE_URL + 'щит.svg',
    title: 'Новый уровень безопасности',
    fullTitle: 'Новый уровень безопасности для ваших данных и средств',
    shortText: 'Мы внедрили двухфакторную аутентификацию и расширенные протоколы шифрования для защиты ваших данных.',
    fullText: `
      <h4>Ваша безопасность — наш приоритет</h4>
      <p>С последним обновлением мы представляем комплексную систему защиты, включающую двухфакторную аутентификацию (2FA) через приложение или SMS, а также полное шифрование всех пользовательских данных. Ваши активы и личная информация теперь под еще более надежной защитой.</p>
    `,
  },
  {
    id: 6,
    image: import.meta.env.BASE_URL + 'AI.svg',
    title: 'ИИ-помощник для анализа портфеля',
    fullTitle: 'Встречайте нашего нового ИИ-помощника для анализа инвестиционного портфеля',
    shortText: 'Наш новый ИИ-ассистент поможет вам анализировать риски и находить новые возможности для инвестиций.',
    fullText: `
      <h4>Умный анализ на основе данных</h4>
      <p>Искусственный интеллект теперь работает на вас. Наш новый ассистент анализирует ваш текущий портфель, сравнивает его с рыночными трендами и предлагает персонализированные рекомендации. Получайте отчеты о рисках, потенциальной доходности и точках для диверсификации в один клик.</p>
    `,
  },
];

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const generateRandomDate = () => {
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const month = String(Math.floor(Math.random() * 8) + 1).padStart(2, '0'); // Months up to August
    const year = 2025;
    return `${day}.${month}.${year}`;
  };

  const openModal = (news) => {
    setSelectedNews({ ...news, date: generateRandomDate() });
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <>
      <div className="news-page">
        <section className="news-page__banner-section">
          <div className="news-page__banner-container">
            <video src={import.meta.env.BASE_URL + 'Новости_видео.mp4'} autoPlay loop muted playsInline className="news-page__banner-video" />
            <div className="news-page__banner-content">
              <h1 className="news-page__banner-title">Будь в курсе последних обновлений</h1>
              <p className="news-page__banner-text">
                Подпишись на нашу новостную рассылку прямо сейчас и и будь в курсе новых технологий
              </p>
              <div className="news-page__subscribe-form">
                <input type="email" placeholder="Ваш e-mail" className="news-page__subscribe-input" />
                <button className="btn btn-primary news-page__subscribe-button">Подписаться</button>
              </div>
            </div>
          </div>
        </section>

        <section className="news-page__updates-section">
            <div className="news-page__updates-container">
                <h2 className="news-page__updates-title">Последние обновления</h2>
                <div className="news-page__grid">
                    {newsData.map((news) => (
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
            </div>
        </section>
      </div>
      <NewsModal news={selectedNews} onClose={closeModal} />
    </>
  );
};

export default NewsPage;