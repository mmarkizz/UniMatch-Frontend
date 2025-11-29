import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Левая колонка - навигация */}
            <div className="nav-sidebar">
              <h3 className="sidebar-title">Навигация</h3>
              <nav className="sidebar-nav">
                <Link to="/create-event" className="sidebar-link active">
                  Создать мероприятие
                </Link>
                <Link to="/events" className="sidebar-link">
                  Найти мероприятие
                </Link>
                <Link to="/recent" className="sidebar-link">
                  Недавние
                </Link>
              </nav>
              
              <div className="known-events-section">
                <h4 className="known-events-title">
                  Мероприятия, где ты знаешь гостей
                </h4>
                <button className="more-btn">Больше</button>
              </div>
            </div>

            {/* Правая колонка - контент */}
            <div className="content-area">
              <div className="welcome-section">
                <h1 className="welcome-title">Добро пожаловать в UniMatch</h1>
                <p className="welcome-subtitle">
                  Находи и создавай университетские мероприятия
                </p>
                <div className="welcome-actions">
                  <Link to="/events" className="action-btn primary">
                    Найти мероприятия
                  </Link>
                  <Link to="/create-event" className="action-btn secondary">
                    Создать мероприятие
                  </Link>
                </div>
              </div>

              <div className="features-section">
                <div className="features-grid">
                  <div className="feature-card">
                    <h3>Находи мероприятия</h3>
                    <p>Открывай интересные события вокруг твоего университета</p>
                  </div>
                  <div className="feature-card">
                    <h3>Создавай мероприятия</h3>
                    <p>Организуй и продвигай свои собственные события легко</p>
                  </div>
                  <div className="feature-card">
                    <h3>Общайся</h3>
                    <p>Знакомься с новыми людьми и расширяй свою сеть контактов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;