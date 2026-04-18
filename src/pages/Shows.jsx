import React from 'react';
import '../styles/Shows.css';
import { CiLocationOn } from "react-icons/ci";

export default function Shows() {
  const shows = [
    {
      date: "June 09, 2025",
      venue: "Your Mama's House",
      location: "Tucson, AZ",
      link: "https://ymhtucson.com/"
    },
    {
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
      date: "December 09, 2025",
      venue: "Catalina Brewing Co",
      location: "Marana, AZ",
      link: "http://www.catalinabrewingco.com/"
    },
    {
      date: "March 27, 2026",
      venue: "Button Brew House",
      location: "Oro Valley, AZ",
      link: "https://www.buttonbrewhouse.com/"
    },
    {
      date: "April 18, 2026",
      venue: "Water Lantern Festival",
      location: "Tucson, AZ",
      link: "https://www.waterlanternfestival.com/"
    }
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    return { month, day };
  };

  return (
    <div className="shows-page">
      <h1>Shows</h1>

      {/* <div className="shows-list">
        {shows.map((show, index) => { */}
        <div className="shows-list">
          {[...shows]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((show, index) => {
          const { month, day } = formatDate(show.date);

          return (
            <div className="event-card" key={index}>

              <div className="event-date">
                <div className="month">{month}</div>
                <div className="day">{day}</div>
              </div>

              {/* <div className="event-image">
                <img
                  src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                  alt="venue"
                />
              </div> */}

              <div className="event-info">
                <h3>{show.venue}</h3>
                 <p> <CiLocationOn /> {show.location}</p>
                <a href={show.link} target="_blank" rel="noreferrer">
                  Tickets / Info
                </a>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}