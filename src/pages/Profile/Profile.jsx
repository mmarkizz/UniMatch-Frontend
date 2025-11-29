import React from 'react';
import './Profile.css';

const Profile = () => {
  const attendedEvents = [
    {
      id: 1,
      title: 'Открытие выставки "касаясь /назадные"',
      date: '01 грузов 18:00',
      location: 'Выпускный улица в марте 123',
      tags: ['Язык танки']
    },
    {
      id: 2,
      title: 'Открытие выставки "касаясь /назадные"',
      date: '01 корпус 18:00',
      location: 'Выпускный улица в марте 123',
      tags: ['Язык танки']
    },
    {
      id: 3,
      title: 'Открытие выставки "касаясь /назадные"',
      date: '01 корпус 18:00',
      location: 'Выпускный улица в марте 123',
      tags: ['Язык танки']
    }
  ];

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-layout">
          {/* Левая колонка - навигация */}
          <div className="profile-sidebar">
            <nav className="sidebar-nav">
              <a href="/create-event" className="sidebar-link">создать мероприятие</a>
              <a href="/events" className="sidebar-link">найти мероприятие</a>
              <a href="/recent" className="sidebar-link">недавние</a>
            </nav>
          </div>

          {/* Правая колонка - контент профиля */}
          <div className="profile-content">
            <h1 className="profile-title">Личный кабинет</h1>
            
            {/* Информация о пользователе */}
            <div className="user-info-section">
              <div className="user-avatar"></div>
              <div className="user-details">
                <h2 className="user-name">Бобр Добров</h2>
                <div className="user-contacts">
                  <span className="contact">Email@</span>
                  <span className="contact">Tg-link</span>
                </div>
                <div className="user-bio">
                  <h3>О себе</h3>
                  <p>Описание пользователя...</p>
                </div>
              </div>
            </div>

            {/* Посещенные мероприятия */}
            <div className="attended-events-section">
              <h3 className="section-title">Присутствовал:</h3>
              <div className="events-grid">
                {attendedEvents.map(event => (
                  <div key={event.id} className="event-card">
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-date">{event.date}</div>
                    <div className="event-location">{event.location}</div>
                    <div className="event-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="event-tag">{tag}</span>
                      ))}
                    </div>
                    <a href={`/event/${event.id}`} className="details-link">подробнее</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;