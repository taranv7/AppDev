import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Home.css';

import Footer from '../Pages/Footer';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.jpg';

const Home = () => {
  return (
    <div className='bg'>
      
      <h1>Welcome to Yogic Sphere!</h1>
      <h3>The List of Academies are listed below</h3>
      {/* <p>This is the home page of our website. You can navigate to the Login or Sign Up pages using the navigation bar above.</p> */}
      <div className="features">
        <div className="feature">
          <img src ={img1} alt="Academy 1" />
          <h3>Harmony Yoga Academy</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>At Harmony Yoga Academy, we believe in cultivating 
            a sense of balance and unity within the mind, body, 
            and spirit. Our classes focus on promoting harmony through 
            a combination of breathwork, meditation, and mindful movement.</p>
        </div>
        <div className="feature">
          <img src={img2} alt="Academy 2" />
          <h3>Zenith Yoga Institute</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Zenith Yoga Institute is dedicated to helping individuals reach 
            their highest potential through the practice of yoga. Our 
            experienced instructors guide students on a journey of 
            self-discovery, leading to increased strength, flexibility, and inner peace.</p>
        </div>
        <div className="feature">
          <img src={img3} alt="Academy 3" />
          <h3>Tranquil Asana Academy</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p> Tranquil Asana Academy offers a serene and nurturing environment for individuals 
            to explore the depths of their practice. Our classes emphasize the importance of
             relaxation, meditation, and gentle yoga poses to promote overall well-being.</p>
        </div>
        <div className="feature">
          <img src={img4} alt="Academy 4" />
          <h3>Serenity Yoga Studio</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Serenity Yoga Studio provides a tranquil escape from the stresses of everyday
             life. With a focus on mindfulness and breath awareness, our classes offer students
              the opportunity to cultivate a deep sense of peace and tranquility.</p>
        </div>
        <div className="feature">
          <img src={img8} alt="Academy 5" />
          <h3>Divine Alignment Yoga Center</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Divine Alignment Yoga Center is committed to helping students achieve optimal 
            alignment in both body and mind. With a focus on proper technique and mindful 
            movement, our classes promote strength, flexibility, and balance.</p>
        </div>
        <div className="feature">
          <img src={img6} alt="Academy 6" />
          <h3>Radiant Lotus Yoga Academy</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Radiant Lotus Yoga Academy empowers students to tap into their inner radiance and shine
             brightly from within. Our classes combine dynamic vinyasa flow with heart-opening 
             practices to awaken the body and uplift the spirit.</p>
        </div>
        <div className="feature">
          <img src={img7} alt="Academy 7" />
          <h3>Inner Peace Yoga Institute</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>At Inner Peace Yoga Institute, we believe that true peace begins from within. 
            Through a combination of breath-centered movement and meditation, our classes 
            guide students on a journey of self-discovery and inner transformation.</p>
        </div>
        <div className="feature">
          <img src={img5} alt="Academy 8" />
          <h3>Blissful Balance Yoga School</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Blissful Balance Yoga School is dedicated to helping students find balance in both body 
            and mind. Through a blend of dynamic movement and restorative practices, our classes 
            promote a sense of blissful harmony and equilibrium.</p>
        </div>
        <div className="feature">
          <img src={img9} alt="Academy 9" />
          <h3>Mindful Movement Academy</h3>
          <Link to="/payment" className="btn btn-prim">Join Now</Link>
          <p>Mindful Movement Academy offers a holistic approach to yoga, incorporating
             mindfulness practices into every aspect of our classes. Our aim is to
              cultivate greater awareness, presence, and connection both on and off the mat.</p>
        </div>
      </div>
      <div className="cta">
        <h3>Ready to get started?</h3>
        <Link to="/signup" className="btn btn-prim">Sign Up Now</Link>
      </div><br/><br/>
      <Footer  />
    </div> 
  );
};

export default Home;
