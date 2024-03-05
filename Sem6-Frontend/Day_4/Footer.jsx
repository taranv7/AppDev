import React from 'react';
import '../assets/CSS/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} TTS Yoga. All rights reserved.{' '}<br/><br/>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | 
        <a href="/contact">Contact Us</a> | <a href="/about">About Us</a> | 
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
