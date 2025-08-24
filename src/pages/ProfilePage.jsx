import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="profile-feed">
            <div className="post-compose">
              <img src="/img/Ellipse 146.svg" alt="Аватар" className="compose-avatar" />
              <input type="text" className="compose-input" placeholder="Поделитесь новостью..." />
              <div className="compose-actions">
                <button className="icon-btn photo" title="Добавить фото"></button>
                <button className="icon-btn video" title="Добавить видео"></button>
                <button className="icon-btn attach" title="Прикрепить файл"></button>
              </div>
            </div>
            {/* Example Post */}
            <article className="post-card">
                {/* ... post content ... */}
            </article>
          </div>
        );
      case 'products':
        return <div>Продукты пользователя</div>;
      // Add cases for other tabs
      default:
        return <div>Выберите вкладку</div>;
    }
  };

  return (
    <main className="profile-page">
      <header className="profile-header">
        <div className="profile-cover" style={{ backgroundImage: "url('/img/i (2) 1.svg')" }}></div>
        <div className="profile-intro">
          <div className="profile-avatar-wrapper">
            <img src="/img/Ellipse 146.svg" alt="Аватар пользователя" className="profile-avatar" />
            <div className="online-status"></div>
          </div>
          <div className="profile-details">
            <div className="profile-info">
              <h1>Иван Иванов</h1>
              <div className="profile-tags-row">
                <span className="profile-tag">
                  <img src="/img/rupor.svg" alt="" />
                  Трейдер
                </span>
                <Link to="#" className="profile-more-link">
                  <img src="/img/info icon.svg" alt="" />
                  Подробнее
                </Link>
              </div>
              <p className="profile-description">
                Самый крутой маркитолог всея руси. Здесь может быть более длинное описание пользователя в несколько строк.
              </p>
            </div>
            <div className="profile-actions">
              <button className="button-withicon">
                <img src="/img/wheel.svg" alt="" />
                <span>Управление профилем</span>
              </button>
              <button className="button-icon">
                <img src="/img/Share Icon.svg" alt="Поделиться" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="profile-products">
        {/* Product items would be mapped from data */}
      </section>

      <nav className="profile-tabs">
        <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('feed');}} className={activeTab === 'feed' ? 'active' : ''}>Лента</a>
        <a href="#" onClick={(e) => {e.preventDefault(); setActiveTab('products');}} className={activeTab === 'products' ? 'active' : ''}>Продукты</a>
        {/* Add other tabs here */}
      </nav>

      <div className="profile-content-wrapper">
        {renderContent()}
        <aside className="profile-sidebar">
            {/* Sidebar widgets */}
        </aside>
      </div>
    </main>
  );
};

export default ProfilePage;
