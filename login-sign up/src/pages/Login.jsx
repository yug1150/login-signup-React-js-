import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';

const Login = () => {
  return (
    <>
      <Background />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="auth-link">
          Don't have an account? 
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
