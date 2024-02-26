import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/CSS/Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Yogic Sphere. All rights reserved.</p>
      {/* Use Link component to create a link */}
      <Link to="/user/terms">Terms & Conditions</Link>
    </footer>
  );
};

export default Footer;




// import React from 'react';
// import '../assets/CSS/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section about">
//             <h2 className="logo">
//               Harmony Yoga
//             </h2>
//             <p>
//               We are dedicated to promoting physical, mental, and spiritual well-being through the practice of yoga.
//             </p>
//             <div className="contact">
//               <span><i className="fas fa-phone"></i> +1 234 567 890</span>
//               <span><i className="fas fa-envelope"></i> info@harmonyyoga.com</span>
//             </div>
//             <div className="socials">
//               <a href="#"><i className="fab fa-facebook"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-linkedin"></i></a>
//             </div>
//           </div>
//           <div className="footer-section links">
//             <h2>Quick Links</h2>
//             <ul>
//               <li><a href="#">Events</a></li>
//               <li><a href="#">Classes</a></li>
//               <li><a href="#">Instructors</a></li>
//               <li><a href="#">Testimonials</a></li>
//             </ul>
//           </div>
//           <div className="footer-section contact-form">
//             <h2>Contact Us</h2>
//             <form action="#">
//               <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
//               <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
//               <button type="submit" className="btn btn-primary">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           &copy; {new Date().getFullYear()} Harmony Yoga | All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
