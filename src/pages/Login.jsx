import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.success) {
        window.location.href = '/d';
      } else {
        setError('Wrong username or password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-container card shadow rounded">
        <h1 className="title text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text"><i class="bi bi-person"></i></span>
            <label htmlFor="username" className="form-label sr-only">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text"><i class="bi bi-lock"></i></span>
            <label htmlFor="password" className="form-label sr-only">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block login-button">
            Login
          </button>
        </form>
      </div>

      {error && (
        <div className="error-container text-center mt-3">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      )}
    </div>

  );
};

export default Login;
