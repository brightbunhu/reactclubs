import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Form submitted:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="<auth-container">
      <div className="auth-card">
        <h2>Register for MSU Clubs Portal</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userType">Register As</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="clubLeader">Club Leader</option>
              <option value="patron">Club Patron</option>
            </select>
          </div>
          <button type="submit" className="auth-submit">
            Register
          </button>
          <p className="auth-links">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Signup;
