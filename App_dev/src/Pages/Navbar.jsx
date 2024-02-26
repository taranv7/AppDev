import React from 'react';
import { Link } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../assets/CSS/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // navigate('/profile');
  return (
    <nav className="navbar">
      <div className="containerz">
        <div className="left-section">
          <SelfImprovementIcon />
          <h1 className="navbar-brand">Yogic Sphere!</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/user/about" className="nav-link">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/user/contact" className="nav-link">Contact</Link>
          </li>
            
          <a href="/user/profile">
              <AccountBoxIcon/>

          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
