import React from 'react'
import { useData } from '../../../context/DataContext';

const Upcomingevents = () => {
  const { events } = useData();

  const upcomingEvents = events.filter((item) => item.type === 'upcoming');

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="upcoming-events">
      <h2 className="animate-slide-up">Upcoming Events</h2>
      <div className="events-grid">
        {upcomingEvents.map((event, index) => (
          <div
            key={event.id}
            className="event-card hover-lift animate-fade-in"
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-details">
                <p className="event-date">
                  <i className="fas fa-calendar"></i> {event.date}
                </p>
                {event.location && (
                  <p className="event-location">
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </p>
                )}
              </div>
              {event.registerLink && (
                <a href={event.registerLink} className="register-btn">
                  Register Now
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Upcomingevents