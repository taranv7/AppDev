// EnrolForm.jsx
import React, { useState } from 'react';
import '../assets/CSS/EnrolForm.css'; // Import your custom CSS file for EnrolForm styling
import { Link } from 'react-router-dom';

const EnrolForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    yogaExperience: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
    // You can add additional logic here, such as sending the form data to a server
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <br></br>
    <h2>Enrollment Form</h2> {/* Title added here */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
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

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="yogaExperience">Yoga Experience:</label>
        <textarea
          id="yogaExperience"
          name="yogaExperience"
          value={formData.yogaExperience}
          onChange={handleChange}
        />
<Link to="/success">
<button type="submit">Submit</button>
</Link>
      </form>
    </div>
  );
};

export default EnrolForm;
