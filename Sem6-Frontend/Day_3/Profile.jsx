import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ProfileCard() {
  // Sample data for enrolled courses
  const enrolledCourses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    // Add more courses as needed
  ];

  return (
    <div>
      <h2 style={{ marginBottom: '40px' }}>User Profile</h2>
      <Card sx={{ minWidth: 275, padding: '40px', borderRadius: '15px', backgroundColor: '#AABA9E' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, padding: '100px' }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              style={{
                borderRadius: '50%',
                width: '150px',
                marginLeft: '10px',
                border: '4px solid #fff',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Box>
          <button>Edit Profile Picture</button>
          <br></br>
          <hr></hr>
          <p style={{ fontSize: '30px', fontWeight: 700 }}>Personal Information</p>
          <h4 style={{ marginRight: '5px' }}>Name: Matt</h4>
          <h4 style={{ marginRight: '5px' }}>User: mat_murr</h4>
          <h4 style={{ marginRight: '5px' }}>Age: 30</h4>
          <h4 style={{ marginRight: '5px' }}>Email: j@gmail.com</h4>
          <hr></hr>
          {/* Enrolled Courses Container */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 700 }}>Enrolled Courses:</p>
            {enrolledCourses.map((course) => (
              <div key={course.id} style={{ marginBottom: '10px' }}>
                {/* You can customize the course information display */}
                <span>{course.title}</span>
              </div>
            ))}
          </div>
          <hr></hr>
          </CardContent>
          </Card>
          <br></br>
          {/* Button to route to home page */}
          <Link to="/home">
          <button>back home</button>
          </Link>
      <br></br>
    </div>
  );
}
