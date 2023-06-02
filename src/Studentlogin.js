import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Studentlogin.css';
import Mainpage from './Mainpage';
import Mainhome from './Mainhome';
import ContactUs from './ContactUs';

const Studentlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    // Reset the form
    setUsername('');
    setPassword('');
    // Set loggedIn to true
    setLoggedIn(true);
  };

  const [contactVis, setContactVis] = useState(false);
  const [homeVis, setHomeVis] = useState(true);
  const [priVis, setPriVis] = useState(false);

  function priyans() {
    setHomeVis(false);
    setContactVis(false);
    setPriVis(true);
  }

  return (
    <div className="login-wrapper">
      {!loggedIn && (
        <div className="login-container">
          <h2>Student Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button" onClick={priyans}>
              Log In
            </button>
          </form>
        </div>
      )}

      {loggedIn && (
        <>
          {priVis && <Mainpage />}
        </>
      )}
    </div>
  );
};

export default Studentlogin;
