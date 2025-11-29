import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-form-container">
          <h1>Login</h1>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit" className="submit-btn">Login</button>
            <div className="form-links">
              <a href="#forgot" className="form-link">Forgot password?</a>
              <a href="#signup" className="form-link">Don't have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;