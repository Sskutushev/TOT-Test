import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const UnavailableModal = ({ onClose }) => {
    const modalRef = useRef();

    // Close on escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const returnButtonStyle = {
        backgroundColor: '#fff',
        border: '1px solid #AA1D00',
        color: '#AA1D00',
        borderRadius: '90px',
        padding: '0.75rem 1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const tariffsButtonStyle = {
        backgroundColor: '#FF2B00',
        border: '1px solid #FF2B00',
        color: '#fff',
        borderRadius: '90px',
        padding: '0.75rem 1.5rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    return createPortal(
        <div className="popup-overlay" onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001 }}>
            <div onClick={(e) => e.stopPropagation()} ref={modalRef} className="popup-container" style={{textAlign: 'center', padding: '2rem'}}>
                {/* Icon placeholder */}
                <h3 style={{marginTop: '1rem'}}>Недоступно на текущем тарифе</h3>
                <p style={{color: '#666', maxWidth: '400px', margin: '1rem auto'}}>
                    Для того, чтобы получить доступ ко всем возможностям платформы и начать зарабатывать на своих образовательных продуктах, необходимо выбрать другой тариф.
                </p>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
                    <button style={returnButtonStyle} onClick={onClose}>Вернуться</button>
                    <Link to="/tariffs" style={tariffsButtonStyle} onClick={onClose}>Смотреть тарифы</Link>
                </div>
            </div>
        </div>,
        document.body
    );
};

const CreatePopup = ({ onClose }) => {
    const [showTariffModal, setShowTariffModal] = useState(false);
    const popupRef = useRef();

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const creativityActions = [
        { title: 'Трансляция', description: 'Бесплатный стрим в реальном времени' },
    ];

    const productActions = [
        { title: 'Стратегия', description: 'Ваши стратегии для активной торговли на финансовых рынках' },
        { title: 'Алго-бот', description: 'Создайте и управляйте уникальным торговым ботом прямо с платформы' },
        { title: 'Курс', description: 'Полноценный обучающий курс, включающий в себя различные форматы материалов' },
        { title: 'Вебинар', description: 'Стрим в реальном времени. Это может быть мастер-класс или что то другое' },
        { title: 'Гайд', description: 'Пошаговое текстовое пособие по чему-либо' },
        { title: 'Чек-лист', description: 'Материал в формате пунктов, которые нужно знать студенту или инвестору' },
        { title: 'Консультация', description: 'Частная разовая индивидуальная консультация' },
        { title: 'Софт', description: 'Программное обеспечение' },
    ];

    return createPortal(
        <>
            <div className="popup-overlay" onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
                <div ref={popupRef} onClick={(e) => e.stopPropagation()} className="popup-container" style={{width: '800px'}}>
                    <header className="popup-header">
                        <div>
                            <h2>Создать</h2>
                            <p>Здесь вы можете создать различный контент и продукты</p>
                        </div>
                        <button onClick={onClose} className="popup-close-btn" title="Закрыть"><img src="/img/close.svg" alt="Закрыть" /></button>
                    </header>
                    <div className="popup-content" style={{display: 'flex', gap: '2rem'}}>
                        <section className="popup-section" style={{flex: 1}}>
                            <h3>Творчество</h3>
                            {creativityActions.map(action => (
                                <button key={action.title} className="popup-item" onClick={() => setShowTariffModal(true)}>
                                    {/* Icon placeholder */}
                                    <div className="popup-item-text"><h4>{action.title}</h4><p>{action.description}</p></div>
                                </button>
                            ))}
                        </section>
                        <section className="popup-section" style={{flex: 2}}>
                            <h3>Продукты</h3>
                            <div className="popup-item-list" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                {productActions.map(action => (
                                    <button key={action.title} className="popup-item" onClick={() => setShowTariffModal(true)}>
                                        {/* Icon placeholder */}
                                        <div className="popup-item-text"><h4>{action.title}</h4><p>{action.description}</p></div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {showTariffModal && <UnavailableModal onClose={() => setShowTariffModal(false)} />}
        </>,
        document.body
    );
};

export default CreatePopup;
