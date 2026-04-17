import React from 'react';

export default function Shows() {
  const shows = [
    {
      // 7 - 7:30pm
      date: "June 09, 2025",
      venue: "Your Mama's House",
      location: "Tucson, AZ",
      link: "https://ymhtucson.com/"
    },
    {
      // 7 - 7:30pm
      date: "July 14, 2025",
      venue: "Your Mama's House",
      location: "Tucson, AZ",
      link: "https://ymhtucson.com/"
    },
    {
      date: "July 16, 2025",
      venue: "Big Bad Wolf",
      location: "Tucson, AZ",
      link: "https://www.buttonbrewhouse.com/"
    },

    {
      date: "March 27, 2026",
      venue: "Button Brew House",
      location: "Tucson, AZ",
      link: "https://www.buttonbrewhouse.com/"
    },
    {
      date: "April 18, 2026",
      venue: "Water Lantern Festival",
      location: "Tucson, AZ",
      link: "https://www.waterlanternfestival.com/"
    }
  ];

  return (
    <div className="shows-page">
      <h1>Shows</h1>

      <div className="shows-list">
        {shows.map((show, index) => (
          <div className="show-card" key={index}>
            <h3>{show.date}</h3>
            <p>{show.venue}</p>
            <p>{show.location}</p>
            {/* <button>Tickets</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}