import propTypes from 'prop-types'
import Navbar from './Navbar'
const UserLayout = ({children}) => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

UserLayout.propTypes = {
    children : propTypes.node.isRequired
}

export default UserLayout

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const UserLayout = ({ children }) => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="container">
//           <h1 className="navbar-brand">Yoga Registration Form</h1>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login" className="nav-link">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/signup" className="nav-link">Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <main>
//         {children}
//       </main>
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 Yoga Registration Form. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// UserLayout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default UserLayout;
