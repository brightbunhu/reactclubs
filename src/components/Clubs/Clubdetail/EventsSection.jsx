import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './EventSection.css'

const EventsSection = ({ events }) => {
  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const pastEvents = events.filter(event => event.type === 'past');

  return (
    <div className="club-events">
      <h2>Club Events</h2>
      
      {upcomingEvents.length > 0 && (
        <div className="events-section">
          <h3>Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <Link to={`/events/${event.id}`} className="event-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="events-section">
          <h3>Past Events</h3>
          <div className="events-grid">
            {pastEvents.map(event => (
              <div key={event.id} className="event-card past">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">{event.location}</p>
                  <Link to={`/events/${event.id}`} className="event-btn">
                    View Gallery
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

EventsSection.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EventsSection;
