import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';


// Components
import Home from './components/Home/Home';
import Mainpage from './components/Clubs/Clubs/Mainpage';
import ClubDetail from './components/Clubs/Clubdetail/ClubDetial';
import Events from './components/Events/Events';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Mainpage />} />
            <Route path="/clubs/:id" element={<ClubDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
