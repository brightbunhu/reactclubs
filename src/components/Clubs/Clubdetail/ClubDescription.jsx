import React from 'react';
import PropTypes from 'prop-types';
import './ClubDescription.css';
import msu from '../../../assets/logos/msu.png';


const ClubDescription = ({ club }) => {
  return (
    <div className="club-description">
      <h2>About {club.name}</h2>
      <p>{club.description}</p>
      
      <h3>Category</h3>
      <p>{club.category}</p>
  
      
      <h3>Tags</h3>
      <div className="tags">
        {club.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      
      <h3>Founded</h3>
      <p>{club.founded}</p>
    </div>
  );
};

ClubDescription.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    founded: PropTypes.number.isRequired
  }).isRequired
};

export default ClubDescription;
  