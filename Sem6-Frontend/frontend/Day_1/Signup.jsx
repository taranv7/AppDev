import React, { useState } from 'react';
import '../assets/CSS/Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Implement signup logic here
      console.log('Signup successful');
      setError('');
      navigate('/login1');
    }
  };

  return (
    <div className="containerss">
      <h4>Sign Up</h4>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Re-enter Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      {error && <p className="error">{error}</p>}
      <p className="signup-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
