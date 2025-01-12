import React from 'react';
import { useData } from '../../context/DataContext';
import Navbar from '../navbar/Navbar';
import Pastevents from './pastevents/Pastevents';
import Upcomingevents from './upcoming_events/Upcomingevents';
import OurClubs from './clubs/OurClubs';
import Footer from '../footer/Footer';
import './Home.css';

const Home = () => {
  const { events, clubs, loading } = useData();

  // Check if data is loading
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="home">
      <Navbar />
      <main>
        <Pastevents />
        <Upcomingevents />
        <OurClubs />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 