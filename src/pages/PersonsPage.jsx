import React from 'react';

const PersonCard = ({ person }) => (
  <article className="person-card">
    <div className="card-header">
      <div className="avatar-sm" style={{backgroundImage: `url(${person.avatar})`}}>
        <span className={`status ${person.status}`}></span>
      </div>
      <button className="btn-more" aria-label="Меню"></button>
    </div>
    <div className="card-body">
      <h3 className="name">{person.name}</h3>
      <div className="subscribers">{person.subscribers}</div>
      <div className={`tag profession ${person.professionType}`}>{person.profession}</div>
      <p className="description">{person.description}</p>
    </div>
    <div className="card-footer">
      <button className={`btn-subscribe ${person.isSubscribed ? 'subscribed' : ''}`}>
        <img src={person.isSubscribed ? import.meta.env.BASE_URL + 'img/dropdown.svg' : import.meta.env.BASE_URL + 'img/goto.svg'} alt="" />
        {person.isSubscribed ? 'Вы подписаны' : 'Подписаться'}
      </button>
    </div>
  </article>
);

const PersonsPage = () => {
  // Mock data for demonstration
  const people = [
    { id: 1, name: 'Иван Иванов', avatar: 'img/Ellipse 149.svg', status: 'online', subscribers: '124k подписчиков', profession: 'Трейдер', professionType: '', description: 'Трейдер от бога и просто хороший человек', isSubscribed: true },
    { id: 2, name: 'Катя Васнецова', avatar: 'img/Story Image (1).svg', status: 'online', subscribers: '32k подписчиков', profession: 'Визажист', professionType: 'alt', description: 'Практика, курсы, наставничество и просто честный видеоблог', isSubscribed: false },
    // Add more people here...
  ];

  return (
    <main className="persons-page">
      <div className="search-row">
        <div className="search-container">
          <img src="img/search.svg" className="icon-search" alt="Поиск" />
          <input type="text" className="search-input" placeholder="Поиск…" />
        </div>
        <button className="btn-find">Найти</button>
      </div>

      <div className="content-wrapper">
        <section className="cards-container">
          <div className="persons-grid">
            {people.map(person => <PersonCard key={person.id} person={person} />)}
          </div>
        </section>

        <aside className="filters-panel">
          <h2>Фильтры:</h2>
          <div className="filter-block">
            <label className="filter-label">Сортировать</label>
            <select>
              <option>Сначала новые</option>
            </select>
          </div>
          <div className="filter-block">
            <label className="filter-label">Сейчас онлайн</label>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          {/* Add more filters as needed */}
        </aside>
      </div>
    </main>
  );
};

export default PersonsPage;
