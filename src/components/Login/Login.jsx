import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add login logic here
    navigate('/');
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
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to MSU Clubs Portal</h2>
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
            <label htmlFor="userType">Login As</label>
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
              <option value="sdo">Student Development Office</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="auth-submit">Login</button>
          <p className="auth-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <span>Don't have an account? <Link to="/signup">Register</Link></span>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
