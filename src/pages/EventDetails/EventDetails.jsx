import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className="event-details-page">
      <div className="container">
        <h1>Event Details</h1>
        <div className="event-details">
          <h2>Opening of the exhibition "Visible/Invisible"</h2>
          <div className="event-meta">
            <span className="event-date">February 31, 25:00</span>
            <span className="event-location">Design Center Gallery 11, Yekaterinburg</span>
          </div>
          <div className="event-tags">
            <span className="event-tag">#exhibition</span>
          </div>
          <p className="event-description">
            Description of the event will be displayed here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;