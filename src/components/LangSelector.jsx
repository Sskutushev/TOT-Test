import React, { useState, useEffect, useRef } from 'react';
import './LangSelector.css';

const dropdownIcon = import.meta.env.BASE_URL + 'dropdown.svg';

const flags = {
  RUS: import.meta.env.BASE_URL + 'rus.svg',
  ENG: import.meta.env.BASE_URL + 'eng.svg',
  IND: import.meta.env.BASE_URL + 'img/Indian.svg',
  SPA: import.meta.env.BASE_URL + 'img/spain.svg',
};

const languages = [
  { code: 'РУС', name: 'Русский', flag: flags.RUS },
  { code: 'ENG', name: 'English', flag: flags.ENG },
  { code: 'IND', name: 'India', flag: flags.IND },
  { code: 'SPA', name: 'Spanish', flag: flags.SPA },
];

// Компонент теперь принимает prop `direction` ('up' или 'down')
const LangSelector = ({ direction = 'down' }) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langMenuRef = useRef(null);

  const toggleLangMenu = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  const handleSelectLang = (lang) => {
    setSelectedLang(lang);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="lang-selector" ref={langMenuRef}>
      <button className="lang-btn" onClick={toggleLangMenu}>
        <div className="flag-wrapper">
            <img src={selectedLang.flag} alt={selectedLang.code} className="flag-icon" />
        </div>
        <span>{selectedLang.code}</span>
        <img src={dropdownIcon} alt="" className={`dropdown-arrow ${langMenuOpen ? 'open' : ''}`} />
      </button>
      {langMenuOpen && (
        <div className={`lang-dropdown`}>
          {languages.map((lang) => (
            <div key={lang.code} className="lang-option" onClick={() => handleSelectLang(lang)}>
              <img src={lang.flag} alt={lang.code} className="flag-icon-small" />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;