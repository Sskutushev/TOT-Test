import React, { useState } from 'react';
import './HowToStartSection.css';

const HowToStartSection = () => {
  const [activeTab, setActiveTab] = useState('students'); // 'students' or 'teachers'

  const baseImage = import.meta.env.BASE_URL + 'Frame 6068.svg';
  const studentImage = import.meta.env.BASE_URL + 'Frame 6067.svg';
  const teacherImage = import.meta.env.BASE_URL + 'Frame 6069.svg';

  return (
    <section className="how-to-start-section">
      <div className="how-to-start-container">
        <h2 className="how-to-start-title">Как начать свой путь на нашей платформе?</h2>
        
        <div className="how-to-start-controls">
            <div className="how-to-start-tab-switcher">
                <button
                    onClick={() => setActiveTab('students')}
                    className={`how-to-start-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
                >
                    Ученикам
                </button>
                <button
                    onClick={() => setActiveTab('teachers')}
                    className={`how-to-start-tab-btn ${activeTab === 'teachers' ? 'active' : ''}`}
                >
                    Преподавателям
                </button>
            </div>
        </div>

        <div className="how-to-start-image-container how-to-start-image-container--offset">
          <img 
            src={baseImage} 
            alt="Roadmap background" 
            className={`how-to-start-image how-to-start-image--base ${activeTab === 'teachers' ? 'teacher-active' : ''}`} 
          />
          <img 
            src={activeTab === 'students' ? studentImage : teacherImage} 
            alt={activeTab === 'students' ? 'Student roadmap' : 'Teacher roadmap'} 
            className={`how-to-start-image how-to-start-image--overlay ${activeTab === 'teachers' ? 'how-to-start-image--teacher' : ''}`} 
          />
        </div>
      </div>
    </section>
  );
};

export default HowToStartSection;
