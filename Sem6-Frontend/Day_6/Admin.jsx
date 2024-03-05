import React, { useState } from 'react';
import AdminSideBar from '../Sidebar';
import AddAcademyForm from './AddAcademyForm';
import AcademyList from './AcademyList';
import '../../assets/CSS/Admin.css'

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
      { id: 1, name: "Navi yoga center", location: "Coimbatore" },
      { id: 2, name: "Community yoga center", location: "Chennai" },
      { id: 3, name: "Bodhi yoga and pranic hrealing", location: "Tiruppur" },
      { id: 4, name: "Zumba yoga and fitness", location: "Cudallore" },
      { id: 5, name: "YOGI center for yoga", location: "The Nilgiris" },
      { id: 6, name: "XYZ yoga academy", location: "The Himalayas" },
      
    ]);
  }, []);

  return (
    <div>
   <AdminSideBar/>
      <div className="admin-content" style={{marginLeft: '100px', padding: '20px', backgroundColor : 'lightpink', borderRadius : '50px'}}>
        <h2 style={{fontSize: '24px'}}>Admin</h2>
        {/* Add Academy Form */}
        <AddAcademyForm addAcademy={addAcademy} />
        {/* Academy List */}
        <AcademyList academies={academies} deleteAcademy={deleteAcademy} />
      </div>
    </div>
  );
};