import React, { useState } from 'react';

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState('persons-pane');

  const PersonCard = ({ person }) => (
    <article className="person-card">
        <div className="card-header">
            <div className="avatar-sm" style={{backgroundImage: `url(${person.avatar})`}}></div>
            <button className="btn-more" aria-label="Меню"></button>
        </div>
        <div className="card-body">
            <h3 className="name">{person.name}</h3>
            <div className="subscribers">{person.subscribers}</div>
            <div className="tag profession">{person.profession}</div>
            <p className="description">{person.description}</p>
        </div>
        <div className="card-footer">
            <button className="btn-subscribe subscribed"><img src="img/dropdown.svg" alt="" />Вы подписаны</button>
        </div>
    </article>
  );

  const favoritePersons = [
      { id: 1, name: 'Иван Иванов', avatar: 'img/Ellipse 146.svg', subscribers: '124k подписчиков', profession: 'Трейдер', description: 'Трейдер от бога и просто хороший человек' },
      // ... more favorite people
  ];

  const renderActivePane = () => {
      switch(activeTab) {
          case 'persons-pane':
              return (
                  <div id="persons-pane" className="favorites-tab-pane active">
                      <div className="persons-grid">
                          {favoritePersons.map(p => <PersonCard key={p.id} person={p} />)}
                      </div>
                      <aside className="filters-panel">{/* Filters for persons */}</aside>
                  </div>
              );
          // Add cases for other panes
          default:
              return <div className="favorites-tab-pane active"><h2 className="placeholder-title">Здесь будет избранный контент</h2></div>;
      }
  }

  return (
    <main className="favorites-page">
      <nav className="favorites-tabs">
        <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('persons-pane')}} className={`favorites-tab ${activeTab === 'persons-pane' ? 'active' : ''}`}>Персоны</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('projects-pane')}} className={`favorites-tab ${activeTab === 'projects-pane' ? 'active' : ''}`}>Школы</a>
        {/* ... other tabs */}
      </nav>
      <div className="favorites-content">
        {renderActivePane()}
      </div>
    </main>
  );
};

export default FavoritesPage;
