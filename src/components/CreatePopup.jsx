import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { creativityActions, productActions } from '../data/createPopup';
import './CreatePopup.css';

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

    return createPortal(
        <div className="popup-overlay unavailable-modal" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} ref={modalRef} className="popup-container">
                {/* Icon placeholder */}
                <h3>Недоступно на текущем тарифе</h3>
                <p>
                    Для того, чтобы получить доступ ко всем возможностям платформы и начать зарабатывать на своих образовательных продуктах, необходимо выбрать другой тариф.
                </p>
                <div className="button-group">
                    <button className="return-button" onClick={onClose}>Вернуться</button>
                    <Link to="/tariffs" className="tariffs-button" onClick={onClose}>Смотреть тарифы</Link>
                </div>
            </div>
        </div>,
        document.body
    );
};

const CreatePopup = ({ onClose }) => {
    const [showTariffModal, setShowTariffModal] = useState(false);
    const popupRef = useRef();
    const closeIcon = import.meta.env.BASE_URL + 'img/close.svg';

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return createPortal(
        <>
            <div className="popup-overlay" onClick={onClose}>
                <div ref={popupRef} onClick={(e) => e.stopPropagation()} className="popup-container">
                    <header className="popup-header">
                        <div>
                            <h2>Создать</h2>
                            <p>Здесь вы можете создать различный контент и продукты</p>
                        </div>
                        <button onClick={onClose} className="popup-close-btn" title="Закрыть"><img src={closeIcon} alt="Закрыть" /></button>
                    </header>
                    <div className="popup-content">
                        <section className="popup-section">
                            <h3>Творчество</h3>
                            <div className="creativity-item-list">
                                {creativityActions.map(action => (
                                    <button key={action.title} className="popup-item" onClick={() => setShowTariffModal(true)}>
                                        <img src={import.meta.env.BASE_URL + action.icon} alt="" />
                                        <div className="popup-item-text">
                                            <h4>{action.title}</h4>
                                            <p>{action.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                        <section className="popup-section">
                            <h3>Продукты</h3>
                            <div className="popup-item-list">
                                {productActions.map(action => (
                                    <button key={action.title} className="popup-item" onClick={() => setShowTariffModal(true)}>
                                        <img src={import.meta.env.BASE_URL + action.icon} alt="" />
                                        <div className="popup-item-text">
                                            <h4>{action.title}</h4>
                                            <p>{action.description}</p>
                                        </div>
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
