import React from 'react';
import './EventCard.css';  // Make sure the path is correct!

const EventCard = ({ title, date, description, link }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="event-button">
        Know More
      </a>
    </div>
  );
};

export default EventCard;



