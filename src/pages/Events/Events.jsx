import React, { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './Events.css';

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Открытие выставки "видимое/невидимое"',
      date: '31 февраля, 25:00',
      venue: 'Дизайн-центр Галерея 11',
      address: 'Екатеринбург, улица 9 марта 123',
      tags: ['выставки']
    },
    {
      id: 2,
      title: 'Конструктивная в музыке: как советские композиторы-авангардисты придумывали музыку будущего',
      date: '31 февраля, 25:00',
      venue: 'Дизайн-центр Галерея 11',
      address: 'Екатеринбург, улица 9 марта 123',
      tags: ['лекции']
    },
    {
      id: 3,
      title: 'Лекция-дегустация «От дикого сада до QR-кода: Короткая история российского сидра»',
      date: '31 февраля, 25:00',
      venue: 'Дизайн-центр Галерея 11',
      address: 'Екатеринбург, улица 9 марта 123',
      tags: ['лекции']
    }
  ]);

  return (
    <div className="events-page">
      <div className="container">
        <div className="page-header">
          <h1>Мероприятия</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Найти мероприятие..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="load-more-container">
          <button className="load-more-btn">Больше</button>
        </div>
      </div>
    </div>
  );
};

export default Events;