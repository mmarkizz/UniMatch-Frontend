import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://uniplace.unimatch.ru:8000/api/events/');
        const data = await response.json();

        const normalized = data.map(event => ({
          id: event.id,
          title: event.title,
          date: event.time,
          venue: event.location,
          tags: event.tags ? event.tags.split(',') : []
        }));

        setEvents(normalized);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className="container"><h2>Загрузка...</h2></div>;

  return (
    <div className="events-page">
      <div className="container">
        <h1>Мероприятия</h1>
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
