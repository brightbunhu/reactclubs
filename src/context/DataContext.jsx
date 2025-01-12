import React, { createContext, useContext, useState, useEffect } from 'react';
import clubsData from '../data/clubs.json';
import eventsData from '../data/events.json';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [clubs, setClubs] = useState(clubsData.clubs);
  const [events, setEvents] = useState(eventsData.events);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize data
    try {
      setClubs(clubsData.clubs);
      setEvents(eventsData.events);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    clubs,
    events,
    loading,
    setClubs,
    setEvents
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}; 