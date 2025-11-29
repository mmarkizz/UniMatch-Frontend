import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
      <div className="container">
        <div className="register-form-container">
          <h1>Sign Up</h1>
          <form className="register-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Date of Birth" />
            </div>
            <button type="submit" className="submit-btn">Next</button>
            <div className="form-links">
              <a href="#login" className="form-link">Already have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;