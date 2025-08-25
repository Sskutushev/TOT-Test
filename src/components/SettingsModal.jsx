import React from 'react';

const ToggleSwitch = ({ label, description }) => (
    <div className="toggle-switch">
        <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
        </label>
        <div className="toggle-switch-label">
            <strong>{label}</strong>
            <p>{description}</p>
        </div>
    </div>
);

const SettingsModal = ({ onClose }) => (
    <div className="popup-overlay settings-modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001 }}>
        <div className="popup-container">
            <header className="popup-header">
                <h2>Настройки уведомлений</h2>
                <button onClick={onClose} className="popup-close-btn" title="Закрыть">
                    <img src="/img/close.svg" alt="Закрыть" />
                </button>
            </header>
            <div className="popup-content">
                <ToggleSwitch label="Пользовательская активность" description="Лайки, комментарии, упоминания, голоса в опросах" />
                <ToggleSwitch label="Платежные оповещения" description="Покупка, оплата, финансовые операции" />
                <ToggleSwitch label="Техподдержка" description="Оповещения службы поддержки" />
                <ToggleSwitch label="Обучение и развитие" description="Уведомления по процессу обучения, преподавания" />
                <ToggleSwitch label="Инвестиции и Финансы" description="Доходность, риски, новые инструменты и стратегии" />
                <ToggleSwitch label="Системные оповещения" description="Обновления, новости от платформы" />
                <button className="btn btn-primary save-settings-btn" onClick={onClose}>Сохранить</button>
            </div>
        </div>
    </div>
);

export default SettingsModal;
