import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams(); // вытаскиваем ID из URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://uniplace.unimatch.ru:8000/api/events/${id}/`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке мероприятия');
        }

        const data = await response.json();

        const normalized = {
          id: data.id,
          title: data.title,
          date: data.time,
          venue: data.location,
          description: data.description,
          tags: data.tags ? data.tags.split(',') : [],
          joinedUsers: data.joined_users
        };

        setEvent(normalized);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить данные');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div className="container"><h2>Загрузка...</h2></div>;
  if (error) return <div className="container"><h2>{error}</h2></div>;
  if (!event) return null;

  return (
    <div className="event-details-page">
      <div className="container">
        <h1>{event.title}</h1>

        <div className="event-details">
          <div className="event-meta">
            <span className="event-date">{event.date}</span>
            <span className="event-location">{event.venue}</span>
          </div>

          <div className="event-tags">
            {event.tags.map((tag, idx) => (
              <span className="event-tag" key={idx}>
                #{tag.trim()}
              </span>
            ))}
          </div>

          <p className="event-description">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
