// EnrolSuccessPage.jsx
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer'; // Import your Footer component
import '../assets/CSS/EnrolSuccessPage.css'; // Import your custom CSS file for EnrolSuccessPage styling
import { Link } from 'react-router-dom';

const EnrolSuccessPage = () => {
  return (
    <div>
      
      <div className="success-container">
        <h2>Successfully Enrolled!</h2>
        <p>Congratulations! You have successfully enrolled in the Yoga Academy. Get ready to embark on a transformative journey with us.</p>
        <br></br>
        <h4>We'll hit you up soon!</h4>
        </div>
        <br></br>
      <Link to="/home">
      <button>back home
      </button></Link>


    </div>
  );
};

export default EnrolSuccessPage;
