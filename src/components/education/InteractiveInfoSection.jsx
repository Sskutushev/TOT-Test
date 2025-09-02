import React, { useEffect, useRef } from 'react';
import './InteractiveInfoSection.css';

const InteractiveInfoSection = () => {
  const cubeRef = useRef(null);
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  // Effect for scroll-based animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cubeRef.current || !lineRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      
      // --- CORRECTED SMOOTH ANIMATION LOGIC ---
      // The height of the scroll area that drives the animation
      const scrollableHeight = sectionRect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      // Current scroll position relative to the top of the section
      const scrollTop = sectionRef.current.getBoundingClientRect().top * -1;
      
      // The fraction of the section that has been scrolled (from 0 to 1)
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / scrollableHeight));

      // Ensure lineRef has height before calculating maxTravel
      if (lineRef.current.offsetHeight === 0) return;

      const maxTravel = lineRef.current.offsetHeight - cubeRef.current.offsetHeight;
      const newY = scrollFraction * maxTravel;
      const newRotation = scrollFraction * 360; // Complete one full rotation over the entire scroll

      cubeRef.current.style.transform = `translateY(${newY}px) rotate(${newRotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studentItems = [
    { title: 'Курсы', text: 'Полноценный онлайн-курс с заданиями, видео и теоретической частью' },
    { title: 'вебинары', text: 'Групповые онлайн мероприятия в реальном времени' },
    { title: 'Репетиторство', text: 'Личные консультации в формате видео звонка с преподавателем' },
    { title: 'Гайды', text: 'Файлы с пошаговой инструкцией на различные тематики' },
    { title: 'Чек-листы', text: 'Перечени, состоящие из пунктов, которые нужно выполнить либо проверить' },
  ];

  const teacherItems = [
    { title: 'Анализ приыбли', text: 'Общая статистика по прибыли с удобными графиками' },
    { title: 'Аналитика продукта', text: 'Детальная статистика по каждому продукту, как финансовая, так и по части контента' },
    { title: 'Статистика учеников', text: 'Мониторинг успеваемости учеников, с множеством показателей' },
    { title: 'Рассылки', text: 'Функция рекламных рассылок с целью продажи доп продуктов' },
    { title: 'Списки учеников', text: 'Список учеников по каждому продукту' },
  ];

  return (
    <section className="interactive-section" ref={sectionRef}>
      <img src={import.meta.env.BASE_URL + 'Group 898.svg'} className="interactive-section__bg-image" alt="Background Shape" />
      <div className="interactive-section__container">
        
        {/* Left Column */}
        <div className="interactive-section__column">
          <div className="interactive-section__badge">Для учеников</div>
          <h2 className="interactive-section__title">
            Получай <span className="highlight">знания</span> в<br/>удобном для тебя<br/>формате
          </h2>
          <p className="interactive-section__subtitle">
            В описании продуктов можно посмотреть уровень сложности, время прохождения и узнать подробности о любом из них
          </p>
          <ul className="interactive-section__list">
            {studentItems.map((item, index) => (
              <li key={index}>
                <img src={import.meta.env.BASE_URL + 'mark.svg'} alt="mark" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Line and Cube */}
        <div className="interactive-section__center-line-container">
            <div className="interactive-section__center-line" ref={lineRef}>
                <div className="interactive-section__cube" ref={cubeRef}>
                    <img src={import.meta.env.BASE_URL + 'cube.svg'} alt="cube" />
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="interactive-section__column">
            <div className="interactive-section__badge">Для преподавателей</div>
            <h2 className="interactive-section__title">
                Полный <span className="highlight">контроль</span> над<br/>образовательными<br/>продуктами
            </h2>
            <p className="interactive-section__subtitle">
                Собирай статистику, анализируй эффективность и улучшай свои курсы с помощью мощных дашбордов
            </p>
            <ul className="interactive-section__list">
                {teacherItems.map((item, index) => (
                <li key={index}>
                    <img src={import.meta.env.BASE_URL + 'mark.svg'} alt="mark" />
                    <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
};

export default InteractiveInfoSection;