// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the ExitToApp icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import '../assets/CSS/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user authentication tokens, redirect to login page, etc.
    console.log('Logout clicked');

    // Assuming your login page path is "/login"
    // Replace it with the actual path to your login page
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="left-section">
            <IconButton
              className="toggle-sidebar-btn"
              color="inherit"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <h1 className="navbar-brand">Zenith Yoga</h1>
          </div>
          <div className="right-section">
            <IconButton
              className="profile-btn"
              color="inherit"
              component={Link} // Profile button
              to="/profile"
              style={{ "&:hover": { backgroundColor: "transparent" } }}
              >
              <AccountCircleIcon />
              </IconButton>
              
              
              <IconButton
              className="logout-btn"
              color="inherit"  //logout
              onClick={handleLogout}
              style={{ "&:hover": { backgroundColor: "transparent" } }}

            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
