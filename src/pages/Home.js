import React from 'react';
import { Link } from 'react-router-dom';  // Import Link here
import './Home.css';  // Import CSS

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to TechYatra</h1>
      <p>This is the ultimate tech journey for innovators at IIT Bombay.</p>
      <Link to="/events" className="btn">Explore Events</Link>
    </div>
  );
};

export default Home;

  
