import React, { useState } from 'react';
import './RoadmapSection.css';

const roadmapData = [
  {
    id: 1,
    phase: 'Фаза 1',
    phaseCard: {
      title: 'Запуск и основные функции',
      image: 'Rock.svg',
      size: { width: 'auto', height: 'auto' } // Special case
    },
    cards: [
      { title: 'Социальная сеть', text: 'Обеспечить безопасность и конфиденциальность пользовательских данных', icon: 'socialnet.svg' },
      { title: 'Инструменты для преподавателей', text: 'Предоставить качественные образовательные ресурсы и инструменты для преподавателей', icon: 'порт.svg' },
      { title: 'Модуль обучения', text: 'Обеспечить пользователям удобный интерфейс для прохождения обучения', icon: 'шап.svg' },
      { title: 'Запуск маркетплейса', text: 'Обеспечить пользователям доступ к основным продуктам и услугам платформы', icon: 'теле.svg' },
      { title: 'Календарь', text: 'Обеспечить учеников и преподавателей удобным календарем-планировщиком', icon: 'кален.svg' },
    ]
  },
  {
    id: 2,
    phase: 'Фаза 2',
    phaseCard: {
      title: 'Инвестиционный модуль и расширение',
      image: 'инв.svg',
      size: { width: 190, height: 190 }
    },
    cards: [
      { title: 'Запуск инвестиционного модуля', text: 'Фонды, Автоследование, Биржевые покупки', icon: 'меш.svg' },
      { title: 'Расширение функционала маркетплейса', text: 'Повысить разнообразие и привлекательность продуктов для пользователей', icon: 'shop.svg' },
      { title: 'Уникальная партнерская система', text: 'Предоставить пользователям многоступенчатую реферальную систему', icon: 'handshake.svg' },
      { title: 'Расширенные аналитические инструменты', text: 'Обеспечить пользователей мощными инструментами для мониторинга и улучшения их деятельности', icon: 'Analytics_set.svg' },
      { title: 'Усиление безопасности', text: 'Повысить уровень защиты данных и транзакций на платформе', icon: 'щит.svg' },
    ]
  },
  {
    id: 3,
    phase: 'Фаза 3',
    phaseCard: {
      title: 'Масштаби<br />рование и<br />геймификация',
      image: 'Frame 6064.svg',
      size: { width: 200, height: 200 }
    },
    cards: [
      { title: 'Глобальное расширение', text: 'Привлечь пользователей из разных стран и регионов', icon: 'Society.svg' },
      { title: 'Геймификация', text: 'Сделать использование платформы более увлекательным и мотивирующим', icon: 'gamefication.svg' },
      { title: 'Система сертификации', text: 'Повысить доверие студентов и работодателей к образовательным программам', size: 'large', icon: 'sert.svg' },
      { title: 'Поддержка документации', text: 'Упростить процесс сертификации и повысить удовлетворённость пользователей', size: 'large', icon: 'Doc_Sup.svg' },
    ]
  },
  {
    id: 4,
    phase: 'Фаза 4',
    phaseCard: {
      title: 'Инновации и будущее развитие',
      image: 'Иннов.svg',
      size: { width: 190, height: 190 }
    },
    cards: [
      { title: 'Искусственный интеллект и автоматизация', text: 'Повысить эффективность и качество взаимодействия с пользователями', icon: 'AI.svg' },
      { title: 'Развитие функционала социальной сети', text: 'Обеспечить пользователям все самые современные и трендовые возможности соцсети', icon: 'stock.svg' },
      { title: 'Рекламный кабинет', text: 'Удобный интерфейс для продвижения себя и своих продуктов', icon: 'megaphone.svg' },
            { title: 'Постоянное улучшение и обновления', text: 'Поддерживать актуальность и конкурентоспособность платформы TOT', icon: import.meta.env.BASE_URL + 'Upgrade.svg' },,
      { title: 'Сообщество и взаимодействие', text: 'Содействовать созданию активного и вовлечённого сообщества', icon: import.meta.env.BASE_URL + 'people connect.svg' },
    ]
  },
];

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(1);

  const handleTabClick = (phaseId) => {
    setActivePhase(phaseId);
  };

  const handleNext = () => {
    if (activePhase < roadmapData.length) {
      setActivePhase(activePhase + 1);
    }
  };

  const handlePrev = () => {
    if (activePhase > 1) {
      setActivePhase(activePhase - 1);
    }
  };

  const currentPhaseData = roadmapData.find(p => p.id === activePhase);
  console.log('Phase Card Image:', currentPhaseData.phaseCard.image);
  const topCards = currentPhaseData.cards.slice(0, 2);
  const bottomCards = currentPhaseData.id === 3 ? currentPhaseData.cards.slice(2) : currentPhaseData.cards.slice(2).reverse();

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h2 className="roadmap-title">ТОТ план развития</h2>
          <div className="roadmap-tabs">
            {roadmapData.map(phase => (
              <button 
                key={phase.id}
                className={`roadmap-tab ${activePhase === phase.id ? 'active' : ''}`}
                onClick={() => handleTabClick(phase.id)}
              >
                {phase.phase}
              </button>
            ))}
          </div>
        </div>

        <div className="roadmap-content">
          <img src={import.meta.env.BASE_URL + 'Беки.svg'} alt="Background" className="roadmap-bg-image" />
          <img src={import.meta.env.BASE_URL + 'Vector 156.svg'} alt="Vector" className="roadmap-vector-image" />

          <div className="roadmap-cards-container">
            <div className="roadmap-cards-row">
              <div className="roadmap-card phase-card">
                <div className="phase-card-badge">{currentPhaseData.phase}</div>
                <h3 className="phase-card-title" dangerouslySetInnerHTML={{ __html: currentPhaseData.phaseCard.title }}></h3>
                <img 
                  src={currentPhaseData.phaseCard.image}
                  alt=""
                  className={`phase-card-image phase-image-${currentPhaseData.id}`}
                  style={{ 
                    width: currentPhaseData.phaseCard.size.width,
                    height: currentPhaseData.phaseCard.size.height
                  }}
                />
              </div>
              {topCards.map((card, index) => (
                <div className="roadmap-card" key={index}>
                    <div className="card-icon-container">
                        <img src={import.meta.env.BASE_URL + 'Group 869.svg'} alt="" className="card-icon-persistent" />
                        <img src={card.icon} alt="" className="card-icon-specific" />
                        {console.log('Roadmap Card Icon:', card.icon)}
                    </div>
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.text}</p>
                </div>
              ))}
            </div>
            <div className={`roadmap-cards-row bottom-row phase-${currentPhaseData.id}`}>
              {bottomCards.map((card, index) => (
                <div className={`roadmap-card ${card.size === 'large' ? 'large-card' : ''}`} key={index}>
                    <div className="card-icon-container">
                        <img src={import.meta.env.BASE_URL + 'Group 869.svg'} alt="" className="card-icon-persistent" />
                        <img src={card.icon} alt="" className="card-icon-specific" />
                        {console.log('Roadmap Card Icon:', card.icon)}
                    </div>
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="roadmap-navigation">
            {activePhase > 1 && <button className="roadmap-nav-btn prev-btn" onClick={handlePrev}>&larr; Назад</button>}
            {activePhase < roadmapData.length && <button className="roadmap-nav-btn next-btn" onClick={handleNext}>Далее &rarr;</button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
