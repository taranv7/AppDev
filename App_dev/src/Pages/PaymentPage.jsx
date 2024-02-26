// PaymentPage.js
import React, { useState } from 'react';
import '../assets/CSS/PaymentPage.css'; // Import the CSS file

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit payment information
    console.log('Form submitted:', formData);
  };

  return (
    <div className="containersz"> {/* Apply the container class */}
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Apply the form-group class */}
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
        </div>
        <div className="form-group"> {/* Apply the form-group class */}
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} />
        </div>
        <div className="form-group"> {/* Apply the form-group class */}
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} />
        </div>
        <div className="form-group"> {/* Apply the form-group class */}
          <label htmlFor="name">Name on Card:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn-submit">Submit Payment</button> {/* Apply the btn-submit class */}
      </form>
    </div>
  );
};

export default PaymentPage;
