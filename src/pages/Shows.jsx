import React from 'react';
import bigBadWolf1 from '../images/big-bad-wolf-1.png';
import bigBadWolf2 from '../images/big-bad-wolf-2.png';
import mamasHouse1 from '../images/your-mamas-house-1.png';
import mamasHouse2 from '../images/your-mamas-house-2.png';

export function Shows() {
  return (
    <div style={{ padding: '2rem', color: 'white', maxWidth: '600px', margin: '0 auto'}}>
      <button onClick={() => window.history.back()}>
      ←
      </button>
      <h1>Upcoming Events</h1>
      <img
            src={bigBadWolf1}
            alt="Big Bad Wolf July 16th, 2025"
            className="event-flyers"
          />
       <img
            src={bigBadWolf2}
            alt="Big Bad Wolf July th, 2025"
            className="event-flyers"
          />
        <img
            src={mamasHouse1}
            alt="Big Bad Wolf July 16th, 2025"
            className="event-flyers"
          />
       <img
            src={mamasHouse2}
            alt="Big Bad Wolf July th, 2025"
            className="event-flyers"
          />
    </div>
  );
}