import React, { useEffect, useState } from 'react';

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/events/')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Events List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <p>{event.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;


