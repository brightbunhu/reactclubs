import './EventCard.css';



const EventCard = ({ event, isPast }) => (
    <div className={`event-card ${isPast ? 'past' : ''}`}>
      <div className="event-date">
        <span className="day">{event.date.day}</span>
        <span className="month">{event.date.month}</span>
      </div>
      <div className="event-details">
        <h3>{event.title}</h3>
        <p className="event-desc">{event.description}</p>
        <div className="event-meta">
          <span><i className="far fa-clock"></i> {event.time}</span>
          <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
        </div>
        <a href="#" className="event-btn">{isPast ? 'View Gallery' : 'Register'}</a>
      </div>
    </div>
  );
  
  export default EventCard;
  