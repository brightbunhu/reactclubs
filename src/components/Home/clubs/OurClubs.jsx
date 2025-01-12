import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/DataContext';

const OurClubs = () => {
  const { clubs } = useData();
  
  // Get featured clubs (you can modify this logic)
  const featuredClubs = clubs
    .sort((a, b) => b.members - a.members) // Sort by member count
    .slice(0, 3); // Get top 3

  if (featuredClubs.length === 0) {
    return null;
  }

  return (
    <section className="clubs-section">
      <h2>Featured Clubs</h2>
      <div className="clubs-grid">
        {featuredClubs.map((club) => (
          <div key={club.id} className="club-card">
            <img src={club.image} alt={club.name} />
            <div className="club-details">
              <h3>{club.name}</h3>
              <p>{club.description}</p>
              <div className="club-meta">
                <span className="member-count">
                  <i className="fas fa-users"></i> {club.members} Members
                </span>
                <span className="founded">
                  <i className="fas fa-calendar"></i> Founded {club.founded}
                </span>
              </div>
              <div className="club-tags">
                {club.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <Link to={`/clubs/${club.id}`} className="view-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <Link to="/clubs" className="view-all-btn">
          View All Clubs
        </Link>
      </div>
    </section>
  );
};

export default OurClubs;
