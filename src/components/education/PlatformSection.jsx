
import React, { useState } from 'react';
import './PlatformSection.css';

const StudentsContent = () => (
  <>
    <div className="platform-section__main-wrapper">
      {/* TOP ROW */}
      <div className="platform-section__row">
        <div className="platform-section__header">
          <h2 className="platform-section__title">Лучшее для твоего <br/>развития</h2>
          <img src={import.meta.env.BASE_URL + 'Frame 6065.svg'} alt="Decorative Frame" className="platform-section__header-img" />
        </div>
        <div className="platform-section__card-group">
            {/* Card 1 */}
            <div className="platform-section__card">
                <img src={import.meta.env.BASE_URL + 'assortiment.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Широкий выбор</h3>
                <p className="platform-section__card-text">Наша образовательная платформа объединена с маркетплейсом. Поэтому на ней можно найти образовательный контент абсолютно для любого.</p>
            </div>
            {/* Card 2 */}
            <div className="platform-section__card">
                <img src={import.meta.env.BASE_URL + 'empty.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Система рейтинга</h3>
                <p className="platform-section__card-text">Делись впечатлениями о любом образовательном продукте и изучай отзывы других учеников. Это поможет сделать правильный выбор. Модерация отзывов позволяет не допускать накруток.</p>
            </div>
            {/* Card 3 */}
            <div className="platform-section__card">
                <img src={import.meta.env.BASE_URL + 'Календ.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Личный календарь</h3>
                <p className="platform-section__card-text">Планируй время для изучения, составляй своё личное расписание. Уведомления помогут не пропустить онлайн занятия и напомнят о твоих планах.</p>
            </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="platform-section__row">
         <div className="platform-section__card-group">
            {/* Card 4 */}
            <div className="platform-section__card">
                <img src={import.meta.env.BASE_URL + 'гал.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Высокие стандарты</h3>
                <p className="platform-section__card-text">Мы проверяем каждый образовательный продукт и оставляем только лучшее. Мы реагируем на обращения от учеников и следим за качеством контента на нашей платформе.</p>
            </div>
            {/* Card 5 */}
            <div className="platform-section__card">
                <img src={import.meta.env.BASE_URL + 'Сфт.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Удобный интерфейс</h3>
                <p className="platform-section__card-text">Интуитивно понятный процесс обучения. Все купленные продукты в одном месте. Отслеживай прогресс обучения и проходи курсы с любого устройства.</p>
            </div>
            {/* Card 6 */}
            <div className="platform-section__card">
                <div className="platform-section__dev-badge"><span>В разработке</span></div>
                <img src={import.meta.env.BASE_URL + 'gam.svg'} alt="Icon" className="platform-section__card-icon" />
                <h3 className="platform-section__card-title">Геймификация и поощрения</h3>
                <p className="platform-section__card-text">Зарабатывай баллы и получай бонусы. Дополнительная мотивация для саморазвития ждет тебя здесь.</p>
            </div>
        </div>
        <div className="platform-section__side-image">
            <img src={import.meta.env.BASE_URL + 'Учен.svg'} alt="Student" className="fade-in-image" />
        </div>
      </div>
    </div>

    <div className="platform-section__bottom-block">
      <h2 className="platform-section__bottom-title">Для кого подходит ТОТ?</h2>
      <div className="platform-section__bottom-cards-container">
        {/* Bottom Card 1 */}
        <div className="platform-section__bottom-card">
          <img src={import.meta.env.BASE_URL + 'Scho.svg'} alt="Schoolchildren" />
          <h3>Школьников</h3>
          <p>Учись у преподавателей по школьной программе, а так же тому, что пригодится тебе в будущем: программирование, финансы, создание контента. Обучение на доступном языке и в интересном формате</p>
        </div>
        <div className="platform-section__divider"></div>
        {/* Bottom Card 2 */}
        <div className="platform-section__bottom-card">
          <img src={import.meta.env.BASE_URL + 'Students.svg'} alt="Students" />
          <h3>Студентов</h3>
          <p>Расширяй знания, которые помогут построить карьеру или найти работу ещё во время учёбы</p>
        </div>
        <div className="platform-section__divider"></div>
        {/* Bottom Card 3 */}
        <div className="platform-section__bottom-card">
          <img src={import.meta.env.BASE_URL + 'Adult.svg'} alt="Adults" />
          <h3>Взрослых</h3>
          <p>Развивай новые навыки, повышай квалификацию или осваивай совершенно новую профессию</p>
        </div>
      </div>
    </div>
  </>
);

const TeachersContent = () => (
  <>
    <div className="platform-section__main-wrapper">
      {/* TOP ROW */}
      <div className="platform-section__row">
        <div className="platform-section__header">
          <h2 className="platform-section__title">Монетизируй свой<br/>опыт<br/>с легкостью</h2>
          <img src={import.meta.env.BASE_URL + 'Frame 6066.svg'} alt="Decorative Frame" className="platform-section__header-img" />
        </div>
        <div className="platform-section__card-group">
          {/* Card 1 */}
          <div className="platform-section__card">
            <img src={import.meta.env.BASE_URL + 'puzzle.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Интерактивный конструктор</h3>
            <p className="platform-section__card-text">Простое и понятное создание различных курсов, вебинаров и прочих продуктов с широким функционалом</p>
          </div>
          {/* Card 2 */}
          <div className="platform-section__card">
            <img src={import.meta.env.BASE_URL + 'poll.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Управление и аналитика</h3>
            <p className="platform-section__card-text">Простая в использовании панель управления бизнес-аккаунтом. Инструменты для аналитики. Различные настройки для ведения бизнеса</p>
          </div>
          {/* Card 3 */}
          <div className="platform-section__card">
            <img src={import.meta.env.BASE_URL + 'rupor.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Продвижение через SMM</h3>
            <p className="platform-section__card-text">Можно вести свой блог и рекламировать свои продукты. Система промокодов для преподавателей</p>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="platform-section__row">
        <div className="platform-section__card-group">
          {/* Card 4 */}
          <div className="platform-section__card">
            <div className="platform-section__dev-badge"><span>В разработке</span></div>
            <img src={import.meta.env.BASE_URL + 'communities.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Специализации</h3>
            <p className="platform-section__card-text">Объедини несколько курсов в специализацию и продавай комплексное обучение</p>
          </div>
          {/* Card 5 */}
          <div className="platform-section__card">
            <div className="platform-section__dev-badge"><span>В разработке</span></div>
            <img src={import.meta.env.BASE_URL + 'Homework.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Наставничество и потоки</h3>
            <p className="platform-section__card-text">Персональное обучение и система набора потоков. Создавай различные форматы курсов для разной аудитории</p>
          </div>
          {/* Card 6 */}
          <div className="platform-section__card">
            <div className="platform-section__dev-badge"><span>В разработке</span></div>
            <img src={import.meta.env.BASE_URL + 'wheel.svg'} alt="Icon" className="platform-section__card-icon" />
            <h3 className="platform-section__card-title">Расширение функционала</h3>
            <p className="platform-section__card-text">Добавляем онлайн-доску, новые форматы заданий, оптимизируем отслеживание успеваемости и вводим онлайн-дневник</p>
          </div>
        </div>
        <div className="platform-section__side-image">
            <img src={import.meta.env.BASE_URL + 'Преп.svg'} alt="Teacher" className="fade-in-image" />
        </div>
      </div>
    </div>

    <div className="platform-section__bottom-block">
      <h2 className="platform-section__bottom-title">Для кого подходит ТОТ?</h2>
      <div className="platform-section__bottom-list-container">
        {/* List Item 1 */}
        <div className="platform-section__list-item">
          <img src={import.meta.env.BASE_URL + 'tarif 2.svg'} alt="Icon" />
          <div className="platform-section__list-item-text">
            <h4>Преподаватели и эксперты с опытом</h4>
            <p>Если у тебя есть опыт в определённой сфере и ты готов делиться своими знаниями, эта платформа отличное место для создания курсов, вебинаров и обучающих программ. Твои знания могут приносить пассивный доход, а ты получать благодарных учеников.</p>
          </div>
        </div>
        {/* List Item 2 */}
        <div className="platform-section__list-item">
          <img src={import.meta.env.BASE_URL + 'trainer.svg'} alt="Icon" />
          <div className="platform-section__list-item-text">
            <h4>Коучи и тренеры</h4>
            <p>Если ты занимаешься коучингом или проводишь тренинги, здесь ты можешь масштабировать свою работу, создавая онлайн-программы и проводя вебинары для широкой аудитории. Благодаря консультациям ты можешь продолжать работать индивидуально, но без географических ограничений.</p>
          </div>
        </div>
        {/* List Item 3 */}
        <div className="platform-section__list-item">
          <img src={import.meta.env.BASE_URL + 'Learn_monetisation.svg'} alt="Icon" />
          <div className="platform-section__list-item-text">
            <h4>Специалисты, которые хотят монетизировать занния</h4>
            <p>Ты дизайнер, программист, маркетолог, психолог или владеешь другим востребованным навыком? Создай практический курс или гайд, и начни зарабатывать, обучая других.</p>
          </div>
        </div>
        {/* List Item 4 */}
        <div className="platform-section__list-item">
          <img src={import.meta.env.BASE_URL + 'megaphone.svg'} alt="Icon" />
          <div className="platform-section__list-item-text">
            <h4>Блогеры и инфлюнсеры</h4>
            <p>Если у тебя уже есть аудитория, которая интересуется твоим контентом, ты можешь монетизировать своё влияние, создавая образовательные продукты. </p>
          </div>
        </div>
        {/* List Item 5 */}
        <div className="platform-section__list-item">
          <img src={import.meta.env.BASE_URL + 'Starter.svg'} alt="Icon" />
          <div className="platform-section__list-item-text">
            <h4>Начинающие преподаватели и энтузиасты</h4>
            <p>Если ты только начинаешь путь в преподавании, здесь ты можешь создать свой первый продукт, протестировать интерес аудитории и получить обратную связь.</p>
          </div>
        </div>
      </div>
    </div>
  </>
);


const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section className="platform-section">
      <div className="platform-section__bg-container">
          <img src={import.meta.env.BASE_URL + 'Ellipse 49.svg'} className="platform-section__bg-ellipse platform-section__bg-ellipse--top-left" alt="" />
          <img src={import.meta.env.BASE_URL + 'Ellipse 499.svg'} className="platform-section__bg-ellipse platform-section__bg-ellipse--bottom-right" alt="" />
      </div>

      <div className="platform-section__container">
        <div className="platform-section__tab-switcher">
          <button
            onClick={() => setActiveTab('students')}
            className={`platform-section__tab-btn platform-section__tab-btn--students ${activeTab === 'students' ? 'active' : ''}`}
          >
            Ученикам
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`platform-section__tab-btn platform-section__tab-btn--teachers ${activeTab === 'teachers' ? 'active' : ''}`}
          >
            Преподавателям
          </button>
        </div>

        {activeTab === 'students' ? <StudentsContent /> : <TeachersContent />}

      </div>
    </section>
  );
};

export default PlatformSection;
