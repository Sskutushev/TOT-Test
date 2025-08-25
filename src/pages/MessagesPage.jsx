import React, { useState } from 'react';

const ChatListItem = ({ chat, onClick, isActive }) => (
  <li className={`chat-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="ci-left">
      <img src={chat.avatar} alt="" className="ci-avatar"/>
      <div className="ci-info">
        <strong>{chat.name}</strong>
        <small>{chat.lastMessage}</small>
      </div>
    </div>
    <div className="ci-right">
      {chat.status === 'read' && <img src="img/message_read.svg" alt="" className="ci-status"/>}
      {chat.status === 'pending' && <img src="img/time.svg" alt="" className="ci-status"/>}
      <time>{chat.time}</time>
      {chat.unread > 0 && <span className="ci-unread">{chat.unread}</span>}
    </div>
  </li>
);

const MessagesPage = () => {
  const [activeChatId, setActiveChatId] = useState(1);
  const [activeTab, setActiveTab] = useState('all');

  const chats = [
    { id: 1, name: 'Иван', avatar: 'img/Story Image (2).svg', lastMessage: 'Иван: Благодарю! Скоро буде…', time: '10:05', unread: 0, status: 'sent' },
    { id: 2, name: 'Анна', avatar: 'img/Story Image (3).svg', lastMessage: 'Анна: Емае, да ты шо…', time: '12:14', unread: 5, status: 'pending' },
    // ... more chat data
  ];

  const activeChat = chats.find(c => c.id === activeChatId);

  return (
    <section className="messages-page">
      <div className="messages-container">
        <aside className="messages-sidebar">
          <div className="ms-header">
            <h2>Чаты</h2>
            <button className="btn-text btn-create-group">
              <img src="img/plus1.svg" alt="" className="icon-plus"/>
              Создать групповой чат
            </button>
          </div>
          <div className="ms-search">
            <img src="img/search.svg" alt="" className="icon-search" />
            <input type="text" placeholder="Поиск…" />
          </div>
          <div className="ms-tabs">
            <button onClick={() => setActiveTab('all')} className={`tab ${activeTab === 'all' ? 'tab--active' : ''}`}>
              Все <span className="badge">12</span>
            </button>
            {/* ... other tabs */}
          </div>
          <ul className="chat-list">
            {chats.map(chat => (
              <ChatListItem key={chat.id} chat={chat} isActive={chat.id === activeChatId} onClick={() => setActiveChatId(chat.id)} />
            ))}
          </ul>
        </aside>

        {activeChat && (
          <div className="messages-content">
            <div className="mc-header">
              <div className="mc-user">
                <img src={activeChat.avatar} alt="" className="avatar"/>
                <span className="username">{activeChat.name}</span>
              </div>
              <button className="btn-more"><img src="img/menu2.svg" alt="" /></button>
            </div>
            <hr/>
            <div className="mc-messages">
                {/* Messages would be mapped here */}
                <div className="message message--incoming">
                    <div className="msg-bubble">Привет!</div>
                </div>
                <div className="message message--outgoing">
                    <div className="msg-bubble">Привет, как дела?</div>
                </div>
            </div>
            <div className="mc-input">
              <div className="input-controls">
                <button className="icon-btn"><img src="img/paper_clip.svg" alt=""/></button>
                <button className="icon-btn"><img src="img/smile.svg" alt=""/></button>
              </div>
              <input type="text" placeholder="Сообщение…"/>
              <button className="icon-btn send"><img src="img/send.svg" alt=""/></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagesPage;
