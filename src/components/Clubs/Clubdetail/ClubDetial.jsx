import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useData } from '../../../context/DataContext';
import Navbar from '../../navbar/Navbar';
import ClubHeader from './ClubHeader';
import ClubSidebar from './ClubSidebar';
import ClubDescription from './ClubDescription';
import EventsSection from './EventsSection';
import './Clubdetail.css';
import Footer from '../../footer/Footer';

const ClubDetail = () => {
  const { id } = useParams();
  const { clubs, events, loading } = useData();
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const club = clubs.find(c => c.id === parseInt(id));

  if (!club) {
    return <Navigate to="/clubs" replace />;
  }

  const clubEvents = events.filter(event => event.club === club.name);

  return (
    <>
    <div className="club-detail-page">
      <Navbar />  
      <ClubHeader club={club} />
      
      <div className="club-content">
        <div className="club-main">
          <ClubDescription club={club} />
          <EventsSection events={clubEvents} />
        </div>
        <ClubSidebar leadership={club.leadership} contact={club.contact} />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ClubDetail;
