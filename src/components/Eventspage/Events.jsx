import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import './Events.css';


const Events = () => {
  const { events: allEvents, loading } = useData();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [eventType, setEventType] = useState('all');
  const [clubFilter, setClubFilter] = useState('all');

  useEffect(() => {
    const filtered = allEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = eventType === 'all' || event.type === eventType;
      const matchesClub = clubFilter === 'all' || event.club === clubFilter;

      return matchesSearch && matchesType && matchesClub;
    });
    setFilteredEvents(filtered);
  }, [searchQuery, eventType, clubFilter, allEvents]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Get unique club names for filter
  const clubs = [...new Set(allEvents.map(event => event.club))];

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Discover Events</h1>
        <p>Find and join exciting club events at MSU</p>
      </div>

      <div className="events-filter-section">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Events</option>
            <option value="upcoming">Upcoming Events</option>
            <option value="past">Past Events</option>
          </select>

          <select
            value={clubFilter}
            onChange={(e) => setClubFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Clubs</option>
            {clubs.map(club => (
              <option key={club} value={club}>{club}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="events-content">
        {['upcoming', 'past'].map((type) => {
          const typeEvents = filteredEvents.filter(event => event.type === type);
          if (typeEvents.length === 0) return null;

          return (
            <div key={type} className="events-section">
              <h2>{type === 'upcoming' ? 'Upcoming Events' : 'Past Events'}</h2>
              <div className="events-grid">
                {typeEvents.map((event) => (
                  <div key={event.id} className={`event-card ${type}`}>
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-date">
                        <span className="day">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="month">
                          {new Date(event.date).toLocaleString('default', {
                            month: 'short'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="event-details">
                      <div className="event-club">{event.club}</div>
                      <h3>{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      
                      <div className="event-meta">
                        <span>
                          <i className="far fa-clock"></i> {event.time}
                        </span>
                        <span>
                          <i className="fas fa-map-marker-alt"></i> {event.location}
                        </span>
                      </div>

                      {type === 'upcoming' && event.registration && (
                        <div className="registration-info">
                          <div className="spots-left">
                            <span className="number">
                              {event.registration.maxParticipants - event.registration.currentParticipants}
                            </span>
                            <span className="label">spots left</span>
                          </div>
                          <div className="deadline">
                            Registration closes: {event.registration.deadline}
                          </div>
                        </div>
                      )}

                      <Link 
                        to={`/events/${event.id}`} 
                        className={`event-btn ${type === 'past' ? 'past' : ''}`}
                      >
                        {type === 'past' ? 'View Gallery' : 'Register Now'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
