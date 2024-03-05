// NaviYogaCentrePage.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/CSS/NaviYogaCentrePage.css'; // Import your custom CSS file for NaviYogaCentrePage styling
import img1 from '../Images/img1.jpg';
import { Link } from 'react-router-dom';


const NaviYogaCentrePage = () => {
  return (
    <div>

      <div className="navi-yoga-centre-container">
      
      <h2>Navi Yoga Centre</h2>
      <img src={img1} alt="Academy 1" />
        <p>
          Welcome to Navi Yoga Centre, a place dedicated to the practice of yoga in a serene and peaceful environment. At Navi Yoga Centre, we believe in the power of yoga to transform both the body and mind.
        </p>

        <p>
          Our experienced instructors are here to guide you on your yoga journey, whether you are a beginner or an advanced practitioner. Explore a variety of classes, workshops, and events designed to cater to your unique needs and goals.
        </p>

        <p>
          Join us at Navi Yoga Centre and experience the benefits of yoga for overall well-being and balance in life.
        </p>
        <br></br>
        <Link to="/enrol">
        <button>Enroll Now</button>
        </Link>
      </div>


    </div>
  );
};

export default NaviYogaCentrePage;
