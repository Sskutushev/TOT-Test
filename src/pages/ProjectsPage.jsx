import React from 'react';

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="card-header">
      <img src={project.image} className="project-avatar" alt="" />
    </div>
    <div className="card-body">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tags">
        <span className={`tag ${project.tagClass}`}>{project.tagText}</span>
        <span className="tag">{project.category}</span>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-subscribers">{project.subscribers}</div>
    </div>
    <div className="card-footer">
      <button className="btn-subscribe">
        <img src="/img/goto.svg" alt="" />
        Подписаться
      </button>
      <button className="btn-more"><img src="/img/menu2.svg" alt="" /></button>
    </div>
  </article>
);

const ProjectsPage = () => {
  // Mock data for demonstration
  const projects = [
    {
      id: 1,
      image: '/img/Frame 7099.svg',
      title: '360° Финансовый Мастер',
      tagClass: 'tag--school',
      tagText: 'Школа',
      category: 'Технологии и инновации',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subscribers: '124 к подписчиков'
    },
    // Add more project objects here...
  ];

  return (
    <main className="projects-page">
      <section className="search-row">
        <div className="search-container">
          <img src="/img/search.svg" className="icon-search" alt="Поиск" />
          <input type="text" className="search-input" placeholder="Поиск…" />
        </div>
        <button className="btn-find">Найти</button>
      </section>

      <div className="content-wrapper">
        <div className="projects-list">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          {/* To fill the grid, you can duplicate the mapping or add more mock data */}
          {projects.map(p => <ProjectCard key={p.id + '-clone'} project={p} />)}
        </div>

        <aside className="filters-panel">
          <h2>Выводить проекты:</h2>
          <div className="filter-block">
            <label>Сортировать</label>
            <select>
              <option>Новые сверху</option>
            </select>
          </div>
          <div className="filter-separator"></div>
          <div className="filter-block">
            <label>Категории</label>
            <select>
              <option>Выбрать из списка</option>
            </select>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ProjectsPage;
