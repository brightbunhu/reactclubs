import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Clubs/Mainpage';

import './Clubs.css';
import ClubDetail from './Clubdetail/ClubDetial';

const Clubs = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:clubId" element={<ClubDetail />} />
    </Routes>
  );
};

export default Clubs; 