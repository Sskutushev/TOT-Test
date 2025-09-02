import React from 'react';
import { Link } from 'react-router-dom';
import './SocialPage.css';

const SocialPage = () => {
  const videoSrc = import.meta.env.BASE_URL + 'Соцсеть.mp4';
  const ellipseSrc = import.meta.env.BASE_URL + 'Ellipse 56.svg';
  const followersEmptySrc = import.meta.env.BASE_URL + 'followers_empty.svg';
  const megaphoneSrc = import.meta.env.BASE_URL + 'megaphone.svg';
  const personalBrandSrc = import.meta.env.BASE_URL + 'Personal brand.svg';
  const puzzle3dSrc = import.meta.env.BASE_URL + 'puzzle3d.svg';
  const newChatSrc = import.meta.env.BASE_URL + 'New_chat.svg';
  const streamSrc = import.meta.env.BASE_URL + 'stream.svg';
  const searchSrc = import.meta.env.BASE_URL + 'search.svg';
  const hashTagSrc = import.meta.env.BASE_URL + 'hash tag.svg';
  const smileSrc = import.meta.env.BASE_URL + 'smile.svg';
  const chatSrc = import.meta.env.BASE_URL + 'chat.svg';
  const likeSrc = import.meta.env.BASE_URL + 'like.svg';
  const selectiveSrc = import.meta.env.BASE_URL + 'selective.svg';
  const постояннаяVideoSrc = import.meta.env.BASE_URL + 'Постоянная.mp4';
  const frame5270Src = import.meta.env.BASE_URL + 'Frame 5270.svg';
  const graduateSrc = import.meta.env.BASE_URL + 'graduate.svg';
  const ownerSrc = import.meta.env.BASE_URL + 'owner.svg';
  const ruporSrc = import.meta.env.BASE_URL + 'rupor.svg';
  const selfDevelopmentSrc = import.meta.env.BASE_URL + 'self_development.svg';


  return (
    <div className="social-page">
      {/* Hero Section */}
      <section className="social-hero-section">
        <div className="social-hero-container">
          <div className="social-hero-left">
            <h1>Нетворкинг и общение вместе с соцсетью ТОТ</h1>
            <p className="social-hero-subtitle">Соцсеть для роста и развития, где каждый найдет для себя что то интересное</p>
            <Link to="/login" className="btn btn-primary">Присоединиться</Link>
          </div>
          <div className="social-hero-right">
            <video src={videoSrc} autoPlay loop muted playsInline />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="social-features-section">
        <img src={ellipseSrc} alt="" className="bg-ellipse top-left" />
        <img src={ellipseSrc} alt="" className="bg-ellipse bottom-right" />
        <div className="social-features-container">
          <div className="feature-card">
            <img src={followersEmptySrc} alt="Найди свою аудиторию" className="feature-icon" />
            <h3>Найди свою аудиторию</h3>
            <p>Делись полезным контентом в формате фото, видео, личного блога. Пиши отзывы о продуктах или веди прямые трансляции. Масса возможностей на любые потребности</p>
          </div>
          <div className="divider"></div>
          <div className="feature-card">
            <img src={megaphoneSrc} alt="Продвигай свои продукты" className="feature-icon" />
            <h3>Продвигай свои продукты</h3>
            <p>Если у тебя есть свой образовательный продукт, то ты можешь опубликовать его на нашей платформе и сразу же продвигать в личном блоге или на странице школы</p>
          </div>
          <div className="divider"></div>
          <div className="feature-card">
            <img src={personalBrandSrc} alt="Развивай личный бренд" className="feature-icon" />
            <h3>Развивай личный бренд</h3>
            <p>Расскажи о себе, о том как ты создаешь свой продукт и продвигай свой личный бренд. Покажи свою уникальность, создай качественный контент и взаимодействуй с аудиторией</p>
          </div>
          <div className="divider"></div>
          <div className="feature-card">
            <img src={puzzle3dSrc} alt="Набери себе команду" className="feature-icon" />
            <h3>Набери себе команду</h3>
            <p>Создай школу на нашей платформе и найди людей, которые будут помогать вести бизнес: SMM, дизайнеры, маркетологи, специалисты поддержки и многие другие</p>
          </div>
        </div>
      </section>

      {/* Core Functionality Section */}
      <section className="core-functionality-section">
        <div className="core-functionality-container">
          <div className="core-func-top">
            <div className="core-func-left-text">
              <h2>Основной функционал</h2>
              <p>Мы учли каждую деталь, чтобы создать идеальную платформу для вашего роста. Вам понравится простота интерфейса и поддержка сообщества</p>
            </div>
            <div className="core-func-right-cards">
              <img src={ellipseSrc} alt="" className="bg-ellipse-cards" />
              <div className="card-column">
                <div className="func-card">
                  <img src={newChatSrc} alt="Публикация контента" />
                  <div>
                    <h4>Публикация контента</h4>
                    <p>Фото, видео, текстовый контент</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={streamSrc} alt="Онлайн трансляции" />
                  <div>
                    <h4>Онлайн трансляции</h4>
                    <p>Вебинары и стримы с функцией записи</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={searchSrc} alt="Удобный поиск" />
                  <div>
                    <h4>Удобный поиск</h4>
                    <p>Расширенная система поиска с мощной фильтрацией</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={hashTagSrc} alt="Система хештегов" />
                  <div>
                    <h4>Система хештегов</h4>
                    <p>Сортировка контента по хештегам</p>
                  </div>
                </div>
              </div>
              <div className="card-column">
                <div className="func-card">
                  <img src={smileSrc} alt="Личные сторис" />
                  <div>
                    <h4>Личные сторис</h4>
                    <p>Исчезающие и постоянные сторис</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={chatSrc} alt="Современные чаты" />
                  <div>
                    <h4>Современные чаты</h4>
                    <p>Личные и групповые чаты, с актуальными функциями</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={likeSrc} alt="Быстрое взаимодействие" />
                  <div>
                    <h4>Быстрое взаимодействие</h4>
                    <p>Система лайков, репостов и комментариев</p>
                  </div>
                </div>
                <div className="func-card">
                  <img src={selectiveSrc} alt="Избранное" />
                  <div>
                    <h4>Избранное</h4>
                    <p>Возможность сохранять контент</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="core-func-bottom">
            <div className="core-func-bottom-left-video">
              <video src={videoSrc} autoPlay loop muted playsInline />
            </div>
            <div className="core-func-bottom-right-text">
              <h2>Просто и удобно</h2>
              <p>Простая регистрация при помощи e-mail, телефона или через сторонние популярные сервисы. Всего пару кликов, и ты уже с нами! Простой и интуитивно понятный интерфейс позволит быстро освоиться на платформе и начать делиться впечатлениями сразу после регистрации.</p>
              <Link to="/login" className="btn btn-primary">Начать сейчас</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Place Section */}
      <section className="find-place-section">
        <div className="find-place-container">
          <h2 className="find-place-title">Здесь каждый найдет себе место</h2>
          <div className="large-card">
            <img src={graduateSrc} alt="Ученики и студенты" />
            <div className="large-card-text">
              <h3>Ученики и студенты</h3>
              <p>Удобный интерфейс для обучения. Отслеживай свой прогресс, делись впечатлениями и отзывами. Знакомься с другими учениками и делись опытом.</p>
            </div>
          </div>
          <div className="small-cards-container">
            <div className="small-card">
              <img src={ownerSrc} alt="Преподаватели и владельцы школ" />
              <h4>Преподаватели и владельцы школ</h4>
              <p>Создавай и продвигай свои образовательные продукты. Расширяй аудиторию своих учеников. Нанимай других преподавателей.</p>
            </div>
            <div className="small-card">
              <img src={ruporSrc} alt="Блогеры и лидеры мнений" />
              <h4>Блогеры и лидеры мнений</h4>
              <p>Построй своё сообщество на новой платформе и быстро набери популярность. На старте – всегда проще! Или расширь уже существующую аудиторию.</p>
            </div>
            <div className="small-card">
              <img src={selfDevelopmentSrc} alt="Стремящиеся к саморазвитию" />
              <h4>Стремящиеся к саморазвитию</h4>
              <p>Находи новые идеи, обучающий контент и мотивацию для развития. Заводи друзей по интересам и наполни свой круг общения единомышленниками.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="social-support-section">
        <div className="social-support-container">
          <div className="social-support-left">
            <h2>Постоянная поддержка и развитие</h2>
            <p>Мы внимательны к нашим пользователям и прислушиваемся к их потребностям. Вы всегда сможете сообщить нам, если не хватает какой-либо важной для вас функции. Мы не стоим на месте, развиваем и обновляем платформу, опираясь на запросы наших пользователей. Возможно, именно ваша рекомендация станет основой для нового обновления нашей социальной сети.</p>
          </div>
          <div className="social-support-right">
            <video src={постояннаяVideoSrc} autoPlay loop muted playsInline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialPage;
