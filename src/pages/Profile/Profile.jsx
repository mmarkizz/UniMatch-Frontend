import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  // Загружаем данные пользователя
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setError('Токен не найден. Войдите снова.');
          setLoading(false);
          return;
        }

        const response = await fetch('http://uniplace.unimatch.ru:8000/api/users/me/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          throw new Error('Не удалось получить данные профиля');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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

          {/* Правая колонка */}
          <div className="profile-content">
            <h1 className="profile-title">Личный кабинет</h1>

            {loading && <p>Загрузка...</p>}
            {error && <p className="error-message">{error}</p>}

            {!loading && !error && user && (
              <>
                {/* Информация о пользователе */}
                <div className="user-info-section">
                  <div className="user-avatar"></div>

                  <div className="user-details">
                    <h2 className="user-name">
                      {user.first_name} {user.last_name}
                    </h2>

                    <div className="user-contacts">
                      <span className="contact">Email: {user.email}</span>
                      <span className="contact">TG: {user.tg_link || 'не указан'}</span>
                    </div>

                    <div className="user-bio">
                      <h3>О себе</h3>
                      <p>Пока пусто...</p>
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
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
