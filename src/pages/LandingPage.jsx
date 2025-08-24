import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e7e7e7',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#000',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const loginButtonStyle = {
    backgroundColor: '#fff',
    border: '1px solid #AA1D00',
    color: '#AA1D00',
    borderRadius: '90px',
    padding: '0.5rem 1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const registerButtonStyle = {
    backgroundColor: '#FF2B00',
    borderColor: '#FF2B00',
    color: '#fff',
    borderRadius: '90px',
    padding: '0.5rem 1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const mainContentStyle = {
      textAlign: 'center',
      padding: '5rem 2rem',
      backgroundColor: '#f9f9f9',
      minHeight: '80vh'
  }

  return (
    <div>
      <header style={headerStyle}>
        <Link to="/" style={logoStyle}>
            <img src="/img/лого=Черный (1).svg" alt="TOT Logo" style={{ height: '40px' }} />
        </Link>
        <nav style={navStyle}>
          <Link to="/home" className="btn" style={loginButtonStyle}>Войти</Link>
          <Link to="/register" className="btn" style={registerButtonStyle}>Регистрация</Link>
        </nav>
      </header>
      <main style={mainContentStyle}>
        <h1>Добро пожаловать на платформу TOT!</h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>Ваш универсальный инструмент для инвестиций и трейдинга.</p>
      </main>
    </div>
  );
};

export default LandingPage;