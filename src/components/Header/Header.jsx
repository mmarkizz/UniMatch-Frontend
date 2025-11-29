import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Link 
            to="/create-event" 
            className={`nav-link ${location.pathname === '/create-event' ? 'active' : ''}`}
          >
            Создать мероприятие
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
          >
            Найти мероприятие
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            Личный кабинет
          </Link>
        </nav>
        <div className="auth-links">
          <Link to="/login" className="auth-link">
            Вход
          </Link>
          <Link to="/register" className="auth-link register">
            Регистрация
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;