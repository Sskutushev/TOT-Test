import React from 'react';
import { Link } from 'react-router-dom';

const StreamCategory = ({ icon, name }) => (
  <Link to="#" className="category-item">
    <div className="category-icon-bg"><img src={`img/${icon}.svg`} alt="" /></div>
    <span>{name}</span>
  </Link>
);

const StreamCard = ({ stream }) => (
    <article className="stream-card">
        <Link to="#" className="stream-thumbnail-link">
            <img src={stream.thumbnail} alt="Обложка трансляции" className="stream-thumbnail" />
            <div className="viewer-count"><img src="img/persons.svg" alt="" /> {stream.viewers}</div>
        </Link>
        <div className="stream-card-body">
            <div className="stream-author-info">
                <img src={stream.authorAvatar} alt="Аватар автора" className="author-avatar" />
                <div className="stream-meta">
                    <h3>{stream.title}</h3>
                    <p>{stream.authorName}</p>
                </div>
            </div>
            <div className="stream-tags-container">
                {stream.isLive ? (
                    <div className="live-tag"><img src="img/stream1.svg" alt="" /> В эфире</div>
                ) : (
                    <div className="record-tag"><img src="img/save.svg" alt="" /> Запись</div>
                )}
                <div className="stream-category-tag">{stream.category}</div>
            </div>
        </div>
    </article>
);

const StreamsPage = () => {
  // Mock data
  const categories = [
    { icon: 'Frame 5723', name: 'Коммерция и бизнес' },
    { icon: 'Frame 5728', name: 'IT и технологии' },
    // ... more categories
  ];
  const liveStreams = [
      { id: 1, thumbnail: 'img/-------------------------------------------------- (2) 2.svg', viewers: 125, authorAvatar: 'img/Ellipse 149 (1).svg', title: 'Разговоры о косметике из Кореи', authorName: 'Иван Иванов', isLive: true, category: 'Здоровье и фитнес' },
      // ... more live streams
  ];
  const popularStreams = [
      { id: 1, thumbnail: 'img/-------------------------------------------------- (2) 2 (1).svg', viewers: 1152, authorAvatar: 'img/Ellipse 146.svg', title: 'Как открыть свой бизнес', authorName: 'Егор Потанин', isLive: false, category: 'Коммерция и бизнес' },
      // ... more popular streams
  ];

  return (
    <main className="streams-page">
      <section className="streams-hero">
        <div className="hero-banner">
          <h1>Начни свой путь к популярности</h1>
          <p>Веди прямые эфиры и делись своими знаниями и увлечениями с миром.</p>
          <button className="button-small-withicon create-stream-btn">
            <span>Создать трансляцию</span>
            <img src="img/arrow1.svg" alt="→" />
          </button>
        </div>
        <div className="hero-help-card">
          <h2>Узнать больше</h2>
          <p>Подробнее о трансляциях можно узнать в разделе помощи.</p>
          <Link to="/help" className="btn-outline">Смотреть</Link>
        </div>
      </section>

      <section className="streams-search-bar">
        {/* Search form remains static for now */}
      </section>

      <section className="stream-categories">
        {categories.map(cat => <StreamCategory key={cat.name} {...cat} />)}
      </section>

      <section className="stream-section">
        <div className="section-header">
          <h2>Сейчас в эфире</h2>
          <Link to="#" className="btn-link">Смотреть все <img src="img/arrow.svg" alt="" /></Link>
        </div>
        <div className="stream-grid-horizontal">
            {liveStreams.map(s => <StreamCard key={s.id} stream={s} />)}
        </div>
      </section>
      
      <section className="stream-section">
        <div className="section-header">
          <h2>Самое популярное на этой неделе</h2>
          <Link to="#" className="btn-link">Смотреть все <img src="img/arrow.svg" alt="" /></Link>
        </div>
        <div className="stream-grid-wrapping">
            {popularStreams.map(s => <StreamCard key={s.id} stream={s} />)}
        </div>
      </section>

    </main>
  );
};

export default StreamsPage;
