import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to UniPlace</h1>
            <p className="hero-subtitle">Find and create university events</p>
            <div className="hero-actions">
              <Link to="/events" className="hero-btn primary">
                Find Events
              </Link>
              <Link to="/create-event" className="hero-btn secondary">
                Create Event
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Discover Events</h3>
                <p className="feature-description">
                  Find interesting events happening around your university
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Create Events</h3>
                <p className="feature-description">
                  Organize and promote your own events easily
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Connect</h3>
                <p className="feature-description">
                  Meet new people and expand your network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;