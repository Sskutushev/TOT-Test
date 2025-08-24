import React, { useState } from 'react';

const TimelinePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // NOTE: The inline styles for background images should be replaced with a more robust solution,
  // for example, by moving them to a CSS file or using styled-components, especially for dynamic data.

  return (
    <main className="timeline">
      {/* Stories */}
      <section className="story-section">
        <div className="story-list">
          <div className="story-item your-story">
            <div className="story-thumb" style={{backgroundImage: "url('/img/Ellipse 146.svg')"}}></div>
            <div className="story-name">Ваша история</div>
          </div>
          {/* Other stories would be mapped from data */}
          <div className="story-item">
            <div className="story-thumb" style={{backgroundImage: "url('/img/Story Image.svg')"}}></div>
            <div className="story-name">Иван Иванов</div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="timeline-body">
        {/* Левая колонка */}
        <div className="feed-col">
          {/* Post composer */}
          <div className="post-compose">
            <div className="compose-avatar" style={{backgroundImage: "url('/img/Ellipse 146.svg')"}}></div>
            <input type="text" placeholder="Поделитесь новостью…" className="compose-input" />
            <div className="compose-actions">
              <button className="icon-btn photo"></button>
              <button className="icon-btn video"></button>
              <button className="icon-btn attach"></button>
            </div>
          </div>

          {/* Tabs */}
          <div className="feed-tabs">
            <button className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
              <img src="/img/Filter Icon.svg" alt="" className="tab-icon" />
              Все
            </button>
            <button className={`tab ${activeTab === 'subscriptions' ? 'active' : ''}`} onClick={() => setActiveTab('subscriptions')}>
              <img src="/img/subscribtions1.svg" alt="" className="tab-icon" />
              Подписки
            </button>
            {/* Add other tabs here */}
          </div>

          {/* Список постов */}
          <div className="post-list">
            <article className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <div className="avatar-sm" style={{backgroundImage: "url('/img/Ellipse 149.svg')"}}></div>
                  <div className="user-meta">
                    <div className="user-name">Рухмадуджон Ляколбигдаев</div>
                    <div className="post-date">24 мая 2025</div>
                  </div>
                </div>
                <button className="more-btn"></button>
              </div>
              <div className="post-image" style={{backgroundImage: "url('/img/img1.akspic.ru-astronomicheskij_obekt-mir-kosmos-atmosfera-kosmicheskoe_prostranstvo-2880x1800 1.png')"}}></div>
              <div className="post-text">
                Превратите свой смартфон в источник пассивного дохода с DexPoint! …
              </div>
              <div className="post-actions">
                <button className="action like">52</button>
                <button className="action repost">114</button>
                <button className="action comment">14</button>
                <div className="views">1,1K</div>
              </div>
            </article>
            {/* More posts would be mapped from data */}
          </div>
        </div>

        {/* Правая колонка (фильтры) */}
        <aside className="feed-sidebar">
          <div className="filter-block">
            <label>Сортировать</label>
            <select>
              <option>Сначала новые</option>
              <option>Сначала старые</option>
            </select>
          </div>
          <div className="filter-block">
            <div className="filter-header">Хештеги</div>
            <input type="search" placeholder="Поиск хештега" />
            <div className="tag-list">
              <span className="tag active">Аналитика</span>
              <span className="tag active">Обучение</span>
            </div>
          </div>
          <div className="filter-block">
            <div className="filter-header">Вложения</div>
            <div className="filter-options">
              <label><input type="checkbox" defaultChecked /> Фото</label>
              <label><input type="checkbox" /> Видео</label>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default TimelinePage;
