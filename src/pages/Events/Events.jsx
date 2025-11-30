import React, { useState, useEffect } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6); // сколько показывать

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://uniplace.unimatch.ru:8000/api/events/');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке мероприятий');
        }

        const data = await response.json();

        const normalized = data.map(item => ({
          id: item.id,
          title: item.title,
          date: item.time,
          venue: item.location,
          address: item.description,
          tags: item.tags ? item.tags.split(',') : [],
          joinedUsers: item.joined_users
        }));

        setEvents(normalized);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

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
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="events-grid">
          {filteredEvents.slice(0, limit).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {limit < filteredEvents.length && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setLimit(prev => prev + 6)}
            >
              Больше
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
