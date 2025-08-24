import React, { useState } from 'react';

const CalendarPage = () => {
  const [activeTab, setActiveTab] = useState('my-schedule');

  const DayColumn = ({ day, dayName, events, isActive }) => (
    <div className="day-column">
      <header className={`day-header ${isActive ? 'active' : ''}`}>
        <strong>{day}</strong>
        <div className="day-indicator"></div>
        <span>{dayName}</span>
      </header>
      <div className={`day-events ${events.length === 0 ? 'empty' : ''}`}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className={`event-card ${event.type}`}>
              <div className="event-card-header">
                <span className="event-type">{event.typeName}</span>
                <button className="card-menu-btn small"></button>
              </div>
              <p className="event-title">{event.title}</p>
              <div className="event-time"><img src="/img/time.svg" alt="" />{event.time}</div>
            </div>
          ))
        ) : (
          <>
            <p>У вас нет запланированных событий на этот день</p>
            <button className="add-event-btn">+</button>
          </>
        )}
      </div>
    </div>
  );

  // Mock data for the schedule
  const schedule = [
    { day: '14', dayName: 'Пн', isActive: true, events: [{ type: 'webinar', typeName: 'Вебинар', title: 'Поговорим о крипте вместе с экспертами', time: '10:00-12:00' }] },
    { day: '15', dayName: 'Вт', isActive: false, events: [] },
    // ... more days
  ];

  return (
    <main className="calendar-page">
      <div className="calendar-controls">
        <div className="month-selector">
          <select className="month-select"><option>Октябрь</option></select>
          <select className="year-select"><option>2024</option></select>
        </div>
        <button className="button-small-withicon schedule-btn"><img src="/img/calendar.svg" alt="" />Запланировать</button>
        <div className="calendar-tabs">
          <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('my-schedule')}} className={`calendar-tab ${activeTab === 'my-schedule' ? 'active' : ''}`}>Мое расписание</a>
          <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('events-calendar')}} className={`calendar-tab ${activeTab === 'events-calendar' ? 'active' : ''}`}>Календарь событий</a>
        </div>
      </div>
      <div className="calendar-view-wrapper">
        <button className="nav-arrow calendar-nav-prev"><img src="/img/arrow back.svg" alt="Назад" /></button>
        <div className="calendar-content">
            {activeTab === 'my-schedule' && (
                <div id="my-schedule" className="calendar-tab-pane active">
                    <div className="schedule-grid">
                        {schedule.map(d => <DayColumn key={d.day} {...d} />)}
                    </div>
                </div>
            )}
            {activeTab === 'events-calendar' && (
                <div id="events-calendar" className="calendar-tab-pane active">
                    {/* Placeholder for the events calendar view */}
                    <p>Календарь событий</p>
                </div>
            )}
        </div>
        <button className="nav-arrow calendar-nav-next"><img src="/img/arrow-right.svg" alt="Вперед" /></button>
      </div>
    </main>
  );
};

export default CalendarPage;
