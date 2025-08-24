import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TopPanel = () => {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false); // This state is for the "Создать" popup, logic not implemented yet.

    const notificationsRef = useRef(null);
    const profileRef = useRef(null);

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setNotificationsOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const mockNotifications = [
        { id: 1, type: 'system', icon: '_more_5.svg', title: 'Подтвердите свой email', text: 'Чтобы завершить регистрацию, пожалуйста, перейдите по ссылке в письме...' },
        { id: 2, type: 'social', icon: '_more_1.svg', title: 'Новый комментарий', text: 'Егор Потанин оставил комментарий к вашему посту "Как начать инвестировать"...' },
        { id: 3, type: 'social', icon: '_more_2.svg', title: 'Новый ответ', text: 'Анна Смек ответила на ваш комментарий к посту "Торговые стратегии"...' },
        { id: 4, type: 'social', icon: '_more_3.svg', title: 'Вас упомянули', text: 'Иван Иванов упомянул вас в своем посте...' },
        { id: 5, type: 'payment', icon: 'wallet.svg', title: 'Оплата прошла успешно', text: 'Покупка курса "Основы трейдинга" на сумму $1200 прошла успешно...' },
        { id: 6, type: 'education', icon: 'graduate.svg', title: 'Новый урок доступен', text: 'В курсе "Основы трейдинга" стал доступен новый урок "Анализ графиков"...' },
        { id: 7, type: 'investment', icon: 'trade.svg', title: 'Новая стратегия', text: 'Появилась новая инвестиционная стратегия "Агрессивный рост" с доходностью... ' },
        { id: 8, type: 'recommendation', icon: 'star-empty.svg', title: 'Рекомендация для вас', text: 'Основываясь на ваших интересах, мы рекомендуем вам курс "Психология рынка"...' },
        { id: 9, type: 'support', icon: 'help.svg', title: 'Новое сообщение от поддержки', text: 'Специалист поддержки ответил на ваше обращение #12345...' },
        { id: 10, type: 'social', icon: '_more_1.svg', title: 'Ваш пост лайкнули', text: '15 пользователям понравился ваш пост "Как начать инвестировать"...' },
        { id: 11, type: 'system', icon: '_more_5.svg', title: 'Обновление политики', text: 'Мы обновили нашу политику конфиденциальности. Пожалуйста, ознакомьтесь...' },
        { id: 12, type: 'payment', icon: 'wallet.svg', title: 'Возврат средств', text: 'Средства за курс "Неудачный курс" в размере $50 были возвращены на ваш счет...' },
        { id: 13, type: 'education', icon: 'graduate.svg', title: 'Вы завершили курс!', text: 'Поздравляем с успешным завершением курса "Основы трейдинга"! Ваш сертификат...' },
        { id: 14, type: 'investment', icon: 'trade.svg', title: 'Изменение в портфеле', text: 'Стратегия "Консервативный подход" была обновлена управляющим...' },
    ];

    return (
        <header className="toppanel">
            <div className="frame6996">
                <div className="field-small-search">
                    <img src="/img/search.svg" alt="search icon" />
                    <input type="text" className="search-input" placeholder="Поиск…" />
                </div>
                <div className="header-actions">
                    <button className="button-small-withicon">
                        <img src="/img/plus.svg" alt="create icon" />Создать
                    </button>

                    <div className="notification-wrapper" ref={notificationsRef}>
                        <button className="button-bell" onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false); }}>
                            <img src="/img/bell.svg" alt="Уведомления" />
                            <span className="badge-count">14</span>
                        </button>
                        
                        {notificationsOpen && (
                            <div id="notificationcontainer" className="notification-dropdown">
                                <header className="notification-header">
                                    <h3>Уведомления</h3>
                                    <Link to="/notifications?settings=true" className="settings-btn" title="Настройки уведомлений" onClick={() => setNotificationsOpen(false)}>
                                        <img src="/img/Settings Icon.svg" alt="Настройки" />
                                    </Link>
                                </header>
                                <div className="notification-list">
                                    {mockNotifications.map(n => (
                                        <Link to="/notifications" key={n.id} className="notification-item new" onClick={() => setNotificationsOpen(false)}>
                                            <div className="notification-icon">
                                                <img src={`/img/${n.icon}`} alt="" />
                                            </div>
                                            <div className="notification-text">
                                                <h4>{n.title}</h4>
                                                <p>{n.text}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <footer className="notification-footer">
                                    <Link to="/notifications" className="btn-link" onClick={() => setNotificationsOpen(false)}>Смотреть все уведомления <img src="/img/arrow.svg" alt="→" /></Link>
                                </footer>
                            </div>
                        )}
                    </div>

                    <div className="frame9" id="profile-menu" ref={profileRef}>
                         <div onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                            <img src="/img/Ellipse 146.svg" alt="" className="avatar" />
                            <span>Иван Иванов</span>
                            <img src="/img/Vector 2 (Stroke).svg" alt="" className="icon-dropdown" />
                        </div>
                        
                        {profileOpen && (
                            <div className="frame3953">
                                <Link to="/payments" className="frame3957" onClick={() => setProfileOpen(false)}><div>Платежи</div></Link>
                                <Link to="/account-settings" className="frame3954" onClick={() => setProfileOpen(false)}><div>Настройки аккаунта</div></Link>
                                <Link to="/tariffs" className="frame3959" onClick={() => setProfileOpen(false)}><div>Тарифы</div></Link>
                                <Link to="/partner-program" className="frame3960" onClick={() => setProfileOpen(false)}><div>Партнёрская программа</div></Link>
                                <Link to="/" className="frame3961" onClick={() => setProfileOpen(false)}><div>Выход из аккаунта</div></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <hr />
        </header>
    );
};

export default TopPanel;