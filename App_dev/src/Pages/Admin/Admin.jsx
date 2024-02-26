import React, { useState } from 'react';
import AdminSideBar from '../SideBar';
import AddAcademyForm from './AddAcademyForm';
import AcademyList from './AcademyList';
import '../../assets/AdminCSS/Admin.css';

export const Admin = () => {
  // State for managing list of academies
  const [academies, setAcademies] = useState([]);

  // Function to add a new academy
  const addAcademy = (newAcademy) => {
    setAcademies([...academies, newAcademy]);
  };

  // Function to delete an academy
  const deleteAcademy = (academyId) => {
    setAcademies(academies.filter(academy => academy.id !== academyId));
  };

  // Initially, let's add some dummy academies
  useState(() => {
    setAcademies([
      { id: 1, name: "Harmony Yoga Academy", location: "Coimbatore" },
      { id: 2, name: "Zenith Yoga Institute", location: "Chennai" },
      { id: 3, name: "Tranquil Asana Academy", location: "Tiruppur" },
      { id: 4, name: "Serenity Yoga Studio", location: "Cudallore" },
      { id: 5, name: "Divine Alignment Yoga Center", location: "The Nilgiris" },
      { id: 6, name: "Radiant Lotus Yoga Academy", location: "The Himalayas" },
      { id: 7, name: "Inner Peace Yoga Institute", location: "Myssore" },
      { id: 8, name: "Blissful Balance Yoga School", location: "Bangalore" },
      { id: 9, name: "Mindful Movement Academy", location: "Pollachi" }
    ]);
  }, []);

  return (
    <div>
      <AdminSideBar />
      <div className="admin-content">
        <h2>Admin</h2>
        {/* Add Academy Form */}
        <AddAcademyForm addAcademy={addAcademy} />
        {/* Academy List */}
        <AcademyList academies={academies} deleteAcademy={deleteAcademy} />
      </div>
    </div>
  );
};
