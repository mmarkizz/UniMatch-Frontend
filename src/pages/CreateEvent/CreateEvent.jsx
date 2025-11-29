import React from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  return (
    <div className="create-event-page">
      <div className="container">
        <h1>Create Event</h1>
        <div className="create-event-form">
          <div className="form-group">
            <label>Event Name</label>
            <input type="text" placeholder="Enter event name" />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="text" placeholder="Date and time" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Event location" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea placeholder="Event description" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input type="text" placeholder="#exhibition #lecture" />
          </div>
          <button className="submit-btn">Create Event</button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;