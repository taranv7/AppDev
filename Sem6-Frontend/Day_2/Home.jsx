import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Home.css';
import Navbar from '../Pages/Navbar';
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
import nibba from '../Images/nibba.jpg';
import img99 from '../Images/img99.png';
import img900 from '../Images/img900.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />

      <h3>Check out our various options you can choose from</h3>
      <div className="features">
        <div className="feature-container">
          <div className="feature">
            <img src={img1} alt="Academy 1" />
            <h3>Navi yoga center</h3>
            <Link to="/navi">
            <button>check this out</button>
            </Link>
          </div>
        </div>

        <div className="feature-container">
          <div className="feature">
            <img src={nibba} alt="Academy 2" />
            <h3>Community yoga center</h3>
            <button>check this out</button>
          </div>
        </div>

        <div className="feature-container">
          <div className="feature">
            <img src={img2} alt="Academy 3" />
            <h3>Bodhi yoga and pranic healing</h3>
            <button>check this out</button>
          </div>
        </div>

        <div className="feature-container">
          <div className="feature">
            <img src={img4} alt="Academy 4" />
            <h3>Zumba yoga and fitness</h3>
            <button>check this out</button>
          </div>
        </div>

        <div className="feature-container">
          <div className="feature">
            <img src={img99} alt="Academy 5" />
            <h3>YOGI center for yoga</h3>
            <button>check this out</button>
          </div>
        </div>

        <div className="feature-container">
          <div className="feature">
            <img src={img900} alt="Academy 6" />
            <h3>XYZ yoga Academy</h3>
            <button>check this out</button>
          </div>
        </div>
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Home;
