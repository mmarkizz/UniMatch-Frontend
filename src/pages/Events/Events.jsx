import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="event-card-link">
      <div className="event-card">
        <h3>{event.title}</h3>
        <div className="event-card-meta">
          <span>{event.date}</span>
          <span>{event.venue}</span>
        </div>
        <div className="event-card-tags">
          {event.tags.map((tag, idx) => (
            <span key={idx} className="event-tag">
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
