import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    location: '',
    description: '',
    tags: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Event created successfully:', result);
        alert('Мероприятие успешно создано!');
        
        // Очищаем форму после успешной отправки
        setFormData({
          title: '',
          time: '',
          location: '',
          description: '',
          tags: ''
        });
      } else {
        throw new Error('Ошибка при создании мероприятия');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Ошибка при создании мероприятия. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-event-page">
      <div className="container">
        <h1>Create Event</h1>
        <form className="create-event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Event Name</label>
            <input 
              type="text" 
              name="title"
              placeholder="Enter event name" 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Time</label>
            <input 
              type="text" 
              name="time"
              placeholder="Date and time" 
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              name="location"
              placeholder="Event location" 
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              name="description"
              placeholder="Event description" 
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Tags</label>
            <input 
              type="text" 
              name="tags"
              placeholder="#exhibition #lecture" 
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;