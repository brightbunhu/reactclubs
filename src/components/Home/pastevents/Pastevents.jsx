import React, { useState, useEffect } from 'react';
import { useData } from '../../../context/DataContext';
import './Pastevents.css';

const Pastevents = () => {
  const { events } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const pastEvents = events.filter((item) => item.type === 'past');

  useEffect(() => {
    // Set an interval to move to the next slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [pastEvents.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pastEvents.length - 1 : prevIndex - 1
    );
  };

  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <>
      <h2>Past Events</h2>
      <section className="hero-slider">
        
        <div className="slider-container">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p className="event-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-nav prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          &gt;
        </button>
      </section>
    </>
  );
};

export default Pastevents;
