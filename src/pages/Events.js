import React from 'react';
import './Events.css';
import EventCard from '../components/EventCard';

const eventList = [
  {
    title: "Tech Expo 2025",
    date: "June 15, 2025",
    location: "IIT Bombay Auditorium",
    description: "A grand showcase of student innovations and tech demos.",
  },
  {
    title: "RoboWars",
    date: "July 2, 2025",
    location: "Main Ground",
    description: "A thrilling competition where robots battle it out.",
  },
  {
    title: "AI Hackathon",
    date: "August 12, 2025",
    location: "Computer Center",
    description: "Build AI solutions in 24 hours. Prizes up to ₹50,000!",
  },
];

function Events() {
  return (
    <div className="events-container">
      <h2 className="events-heading">Upcoming Events</h2>
      <div className="events-list">
        {eventList.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default Events;


