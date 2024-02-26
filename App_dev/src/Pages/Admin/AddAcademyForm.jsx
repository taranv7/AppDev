import React, { useState } from 'react';
import '../../assets/AdminCSS/AddAcademyForm.css';

const AddAcademyForm = ({ addAcademy }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return;
    addAcademy({ id: Date.now(), name, location });
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Academy Name" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button>Add Academy</button>
    </form>
  );
};

export default AddAcademyForm;
