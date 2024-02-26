// Contact.js
import React from 'react';
import '../assets/CSS/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>You can reach us at contact@example.com</p>
      <p>Alternatively, you can fill out the form below:</p>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Name:</label>
        <input type="text" id="name" name="name" className="contact-input" />
        <label htmlFor="email" className="contact-label">Email:</label>
        <input type="email" id="email" name="email" className="contact-input" />
        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea id="message" name="message" rows="4" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
