import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';
import { Link } from 'react-router-dom';
import './Clubs_content.css';

const Clubs_content = () => {
  const { clubs } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? club.category.toLowerCase() === categoryFilter.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from clubs
  const categories = [...new Set(clubs.map(club => club.category))];

  return (
    <div>
      <section className="clubs-page">
        <div className="clubs-header">
          <h1>MSU Clubs Directory</h1>
          <div className="clubs-search">
            <input
              type="text"
              placeholder="Search clubs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="clubs-grid">
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club, index) => (
              <div 
                key={club.id} 
                className="club-card hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={club.image} alt={club.name} />
                <div className="club-details">
                  <h3>{club.name}</h3>
                  <p>{club.description}</p>
                  <div className="club-meta">
                    <span><i className="fas fa-users"></i> {club.members} Members</span>
                    <span><i className="fas fa-calendar"></i> Founded {club.founded}</span>
                  </div>
                  <div className="club-tags">
                    {club.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/clubs/${club.id}`} className="join-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No clubs match your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Clubs_content;
