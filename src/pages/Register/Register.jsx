import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-center-container">
        <div className="register-card">
          <h1 className="register-title">Sign Up</h1>
          <form className="register-form">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input 
                type="text" 
                placeholder="дд.мм.гггг"
                className="form-input date-input"
              />
            </div>
            <button type="submit" className="submit-btn">Next</button>
            <div className="form-footer">
              <Link to="/login" className="form-link">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;