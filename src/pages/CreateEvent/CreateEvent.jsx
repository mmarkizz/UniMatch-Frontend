// pages/CreateEvent/CreateEvent.jsx
// На одной странице, весь рабочий функционал + комментарии

import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = () => {
  // Состояние формы
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    location: '',
    description: '',
    tags: ''
  });

  // Лоадер
  const [isLoading, setIsLoading] = useState(false);

  // Обработка изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // --- ОТПРАВКА ФОРМЫ ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Достаём access token, который мы сохранили в localStorage после логина
    const token = localStorage.getItem('accessToken');

    if (!token) {
      alert('Вы не авторизованы!');
      setIsLoading(false);
      return;
    }

    try {
      // Отправка POST на бэк с токеном
      const response = await fetch('http://localhost:8000/api/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          // Важно! Передаём access_token в заголовке, как требует документация
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      // 201 — успех
      if (response.status === 201) {
        const result = await response.json();
        console.log('Event created successfully:', result);
        alert('Мероприятие успешно создано!');

        // Очищаем форму
        setFormData({
          title: '',
          time: '',
          location: '',
          description: '',
          tags: ''
        });
      } else {
        // Любая ошибка с сервера
        const errorData = await response.json();
        console.error(errorData);
        alert('Ошибка при создании мероприятия.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Ошибка соединения с сервером');
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
