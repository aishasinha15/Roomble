// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     // Clear authentication token
//     localStorage.removeItem("token");
//     // Update state
//     setIsLoggedIn(false);
//     // Navigate to home
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isLoggedIn ? (
//           // Show these links when user is logged in
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chats" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           // Show these links when user is not logged in
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage on component mount
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     // Clear authentication token
//     localStorage.removeItem("token");
//     // Update state
//     setIsLoggedIn(false);
//     // Navigate to home
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isLoggedIn ? (
//           // Show these links when user is logged in
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chatlist" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           // Show these links when user is not logged in
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// // import { useAuth } from "../AuthContext.jsx";
// import { useAuth } from "../AuthContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { isLoggedIn, logout } = useAuth();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isLoggedIn ? (
//           // Show these links when user is logged in
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chatlist" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           // Show these links when user is not logged in
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   // Dummy user is always "logged in"
//   const isLoggedIn = false;

//   const handleLogout = (e) => {
//     e.preventDefault();
//     // Clear authentication token
//     localStorage.removeItem("token");
//     // In a real app, you'd update the logged-in state
//     // But for now, let’s just navigate home
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isLoggedIn ? (
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chatlist" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated, logout } = useAuth(); // Get authentication state from context

//   const handleLogout = (e) => {
//     e.preventDefault();
//     logout(); // Use the logout function from AuthContext
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isAuthenticated ? (
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chatlist" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check for token on component mount
//   useEffect(() => {
//     const checkLogin = () => {
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!token);
//     };

//     checkLogin();

//     // Listen for login/logout in other tabs/windows too
//     window.addEventListener("storage", checkLogin);

//     return () => {
//       window.removeEventListener("storage", checkLogin);
//     };
//   }, []);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     // Clear authentication token
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Roomble</div>

//       <div className="navbar-links">
//         {isLoggedIn ? (
//           <>
//             <Link to="/discover" className="nav-link">
//               Discover
//             </Link>
//             <Link to="/likes" className="nav-link">
//               Likes
//             </Link>
//             <Link to="/chatlist" className="nav-link">
//               Chats
//             </Link>
//             <Link to="/profile" className="nav-link">
//               Profile
//             </Link>
//             <a href="/" className="nav-link" onClick={handleLogout}>
//               Logout
//             </a>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <Link to="/signup" className="nav-link">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  // For debugging
  console.log("Navbar rendering, auth state:", isAuthenticated);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Roomble</div>

      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <Link to="/discover" className="nav-link">
              Discover
            </Link>
            <Link to="/likes" className="nav-link">
              Likes
            </Link>
            <Link to="/chatlist" className="nav-link">
              Chats
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <a href="#" className="nav-link" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
