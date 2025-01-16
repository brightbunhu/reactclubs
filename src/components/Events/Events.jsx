import React from 'react';
import Navbar from '../navbar/Navbar';
import EventsContent from '../Eventspage/Events';
import Footer from '../footer/Footer';
import './Events.css';

const Events = () => {
  return (
    <div className="events-layout">
      <Navbar />
      <main className="events-main">
        <EventsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Events; 