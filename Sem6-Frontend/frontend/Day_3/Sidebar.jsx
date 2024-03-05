// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isMinimized, setIsMinimized] = useState(false);
  
    const handleMinimize = () => {
      setIsMinimized(true);
      toggleSidebar();
    };
    
  const handleMaximize = () => {
    setIsMinimized(false);
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
      {isMinimized ? (
        <div className="minimize-button" onClick={handleMaximize}>
          <span>&gt;</span>
        </div>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/aboutpage" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link to="/contactpage" onClick={toggleSidebar}>Contact</Link>
            </li>
            <li>
              <Link to="/profile" onClick={toggleSidebar}>Profile</Link>
            </li>
          </ul>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Zenith Yoga. All rights reserved.</p>
          </div>
          <div className="minimize-button" onClick={handleMinimize}>
            <span>&lt;</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
