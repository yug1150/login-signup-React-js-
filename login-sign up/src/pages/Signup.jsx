import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';

const Signup = () => {
  return (
    <>
      <Background />
      <div className="auth-container">
        <h2>Signup</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input 
              type="text" 
              id="fullname" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-email">Email</label>
            <input 
              type="email" 
              id="signup-email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password">Password</label>
            <input 
              type="password" 
              id="signup-password" 
              placeholder="Create a password" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              placeholder="Confirm your password" 
              required 
            />
          </div>
          <button type="submit" className="auth-button">
            Signup
          </button>
        </form>
        <div className="auth-link">
          Already have an account? 
          <Link to="/">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
