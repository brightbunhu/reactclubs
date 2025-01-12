import React from 'react';
import PropTypes from 'prop-types';
import './ClubHeader.css';
import msu from '../../../assets/logos/dsz.jpg';

const ClubHeader = ({ club }) => {
  return (
    <div className="club-header-content container">
      <div className="club-info">
        <h1 className="club-title">{club.name}</h1>
        <p className="club-tagline">{club.description}</p>
        <div className="club-tags">
          {club.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="club-stats">
          <div className="stat-item">
            <span className="stat-value">{club.members}</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{new Date().getFullYear() - club.founded}</span>
            <span className="stat-label">Years Active</span>
          </div>
        </div>
      </div>
      <div className="club-image">
        <img src={msu} alt={club.name} />
      </div>
    </div>
  );
};

ClubHeader.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    members: PropTypes.number.isRequired,
    founded: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default ClubHeader;
  