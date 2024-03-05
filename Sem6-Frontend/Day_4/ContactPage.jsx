// ContactPage.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import Footer from './Footer'; // Import your Footer component
import '../assets/CSS/ContactPage.css'; // Import your custom CSS file for ContactPage styling
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add additional logic such as sending the form data to a server or displaying a confirmation message.
  };
  
  return (
    <div>
    <div className="contact-container">
    <h2>Contact Us</h2>
    <p>Have questions or feedback? Send us a message!</p>

    <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            />
            
            <button type="submit">Submit</button>
            </form>
            
            </div><br></br>
           
      
    <Link to="/home" >
    <button>back home</button></Link>
    </div>
  );
};

export default ContactPage;
