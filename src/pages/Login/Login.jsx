import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        
        // Сохраняем токен в localStorage
        localStorage.setItem('accessToken', data.access);
        
        // Перенаправляем на главную страницу
        navigate('/');
        alert('Вход выполнен успешно!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Ошибка авторизации');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-center-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            
            <div className="form-footer">
              <Link to="/forgot-password" className="form-link">
                Forgot password?
              </Link>
              <Link to="/register" className="form-link">
                Don't have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;