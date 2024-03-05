import React from 'react';
import '../../assets/CSS/AcademyList.css';

const AcademyList = ({ academies, deleteAcademy }) => {
  return (
    <ul>
      {academies.map(academy => (
        <li key={academy.id}>
          {academy.name} - {academy.location}
          <button onClick={() => deleteAcademy(academy.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AcademyList;