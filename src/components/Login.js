// src/components/Login.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setSuccess(true);
      onLogin?.();
      setTimeout(() => {
        navigate('/dashboard');
      }, 800); // Allows success message to render before redirect
    }
  };

  return (
    <main className="login-container"> {/* ✅ Replaces role="main" */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {success && <p>Success! You are now logged in.</p>}
    </main>
  );
}

// ✅ Props validation added
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
