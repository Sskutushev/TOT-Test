import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeskPage = () => {
  const [mainTab, setMainTab] = useState('education-pane');
  const [courseFilter, setCourseFilter] = useState('in-progress');
  const [webinarFilter, setWebinarFilter] = useState('upcoming');

  const EducationPane = () => (
    <div id="education-pane" className="desk-tab-pane active">
      <section className="desk-section">
        <div className="section-header">
          <h2>Курсы</h2>
          <Link to="#" className="btn-link">Смотреть все <img src="/img/arrow.svg" alt="" /></Link>
        </div>
        <div className="desk-filters">
          <button onClick={() => setCourseFilter('in-progress')} className={`filter-chip ${courseFilter === 'in-progress' ? 'active' : ''}`}>В процессе <span className="chip-badge">12</span></button>
          <button onClick={() => setCourseFilter('new')} className={`filter-chip ${courseFilter === 'new' ? 'active' : ''}`}>Новые <span className="chip-badge new">2</span></button>
          <button onClick={() => setCourseFilter('completed')} className={`filter-chip ${courseFilter === 'completed' ? 'active' : ''}`}>Завершенные <span className="chip-badge">2</span></button>
        </div>
        <div className="desk-grid">
          {/* Course cards would be rendered here based on filter */}
          <article className="course-card" style={{backgroundImage: "url('/img/BG.svg')"}}>
            {/* ... card content */}
          </article>
        </div>
      </section>
      {/* Other sections for webinars, materials etc. */}
    </div>
  );

  const InvestmentsPane = () => (
    <div id="investments-pane" className="desk-tab-pane active">
        {/* Content for investments tab */}
        <section className="balance-bar">
            {/* ... balance bar content ... */}
        </section>
        <div className="analytics-widgets">
            {/* ... analytics widgets ... */}
        </div>
    </div>
  );

  return (
    <main className="desk-page">
      <nav className="desk-main-tabs">
        <a href="#" onClick={(e) => {e.preventDefault(); setMainTab('education-pane')}} className={`desk-tab ${mainTab === 'education-pane' ? 'active' : ''}`}>Обучение</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setMainTab('investments-pane')}} className={`desk-tab ${mainTab === 'investments-pane' ? 'active' : ''}`}>Инвестиции</a>
      </nav>
      <div className="desk-content">
        {mainTab === 'education-pane' ? <EducationPane /> : <InvestmentsPane />}
      </div>
    </main>
  );
};

export default DeskPage;
