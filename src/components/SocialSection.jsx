import React from 'react';
import './SocialSection.css';

const SocialSection = () => {
  const cardsData = [
    {
      icon: 'Социальная1.svg',
      title: 'Многообразие форматов для каждого пользователя',
      text: 'Проводи стримы, публикуй посты, загружай истории и делись отзывами — TOT адаптируется под любые потребности. Преподаватели и школы могут обмениваться опытом и лучшими практиками, а студенты — делиться впечатлениями о продуктах обучения из нашего маркетплейса.',
      inDevelopment: false,
    },
    {
      icon: 'Социальная2.svg',
      title: 'Сообщество единомышленников и партнеров',
      text: 'Присоединяйся к активному сообществу специалистов в разных областях. Обменивайся идеями, находи партнёров для совместных проектов и расширяй свою сеть контактов. Идеальные условия для взаимодействия с теми, кто разделяет твои цели и стремления.',
      inDevelopment: false,
    },
    {
      icon: 'Социальная3.svg',
      title: 'Удобная система поиска',
      text: 'Находи полезный контент и нужных людей. Подпишись на актуальные хештеги и будь в курсе событий.',
      inDevelopment: false,
    },
    {
      icon: 'Социальная4.svg',
      title: 'Интуитивно понятные инструменты продвижения',
      text: 'Современные, мощные и простые в использовании инструменты для продвижения товаров и услуг. Создавай, настраивай и отслеживай рекламные кампании в реальном времени. Независимо от твоей экспертности и ниши, наши инструменты помогут тебе найти свою аудиторию и увеличить продажи.',
      inDevelopment: true,
    },
  ];

  return (
    <section className="social-section">
      <div className="social-container">
        <div className="social-left-column">
          <div className="social-text-container">
            <h2 className="desktop-title">Социальная сеть -<br />для общения,<br />вдохновения и успеха</h2>
            <h2 className="mobile-title">Социальная сеть - для общения, вдохновения и успеха</h2>
            <p>Совершенно новая концепция социальной сети для саморазвития и бизнеса. Создавай, делись контентом, продвигай и продавай свой продукт, следи за лучшими в своей нише, общайся с единомышленниками, найди полезные связи и всё это на одной платформе.</p>
            {/* Кнопка для десктопа */}
            <a href="/social" className="social-details-btn desktop-only-btn">Подробнее</a>
          </div>
          <div className="social-video-container">
            <video src={import.meta.env.BASE_URL + 'социальная.mp4'} autoPlay loop muted playsInline></video>
          </div>
        </div>
        <div className="social-right-column">
          <div className="social-cards-container">
            {cardsData.map((card, index) => (
              <div className="social-card" key={index}>
                <div className="card-header">
                  <img src={import.meta.env.BASE_URL + card.icon} alt="" className="card-icon" />
                  <h3 style={{ color: card.inDevelopment ? '#868686' : 'inherit' }}>{card.title}</h3>
                   {card.inDevelopment && (
                    <div className="development-badge">
                      {/* Иконка песочных часов будет добавлена через CSS */}
                      <span>В разработке</span>
                    </div>
                  )}
                </div>
                <p className="card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Кнопка для мобильных */}
        <a href="/social" className="social-details-btn mobile-only-btn">Подробнее</a>
      </div>
    </section>
  );
};

export default SocialSection;
