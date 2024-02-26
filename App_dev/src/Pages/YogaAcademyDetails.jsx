import React from 'react';
import '../assets/CSS/YogaAcademyDetails.css';


const YogaAcademyDetails = () => {
  // Sample data for yoga academy details
  const academyDetails = [
    { name: 'Harmony Yoga Academy', yearEnrolled: 2015, location: 'New York' },
    { name: 'Zenith Yoga Institute', yearEnrolled: 2018, location: 'Los Angeles' },
    { name: 'Tranquil Asana Academy', yearEnrolled: 2016, location: 'San Francisco' },
    { name: 'Serenity Yoga Studio', yearEnrolled: 2017, location: 'Chicago' },
  ];

  return (
    <div>
      <h2>Yoga Academy Details</h2>
      <ul>
        {academyDetails.map((academy, index) => (
          <li key={index}>
            <strong>Name:</strong> {academy.name}<br />
            <strong>Year Enrolled:</strong> {academy.yearEnrolled}<br />
            <strong>Location:</strong> {academy.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YogaAcademyDetails;
