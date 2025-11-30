import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-header">
        <h3 className="event-title">{event.title}</h3>
        <span className="event-date">{event.date}</span>
      </div>

      <div className="event-location">
        <p className="event-venue">{event.venue}</p>
      </div>

      <div className="event-tags">
        {event.tags.map((tag, index) => (
          <span key={index} className="event-tag">#{tag.trim()}</span>
        ))}
      </div>

      <Link to={`/event/${event.id}`} className="details-link">
        подробности
      </Link>
    </div>
  );
};

export default EventCard;
