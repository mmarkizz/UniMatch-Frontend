import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-center-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn">Login</button>
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