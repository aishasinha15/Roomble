// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Index from "./pages";
// import Navbar from "./components/Navbar";
// import Signup from "./pages/auth/Signup.jsx";
// import Login from "./pages/auth/Login.jsx";
// import Discover from "./pages/matching/Discover.jsx";
// import Likes from "./pages/matching/Likes.jsx";
// import ChatList from "./pages/chats/ChatList.jsx";
// import ChatRoom from "./pages/chats/ChatRoom.jsx";
// import Profile from "./pages/profile/Profile.jsx";
// import EditProfile from "./pages/profile/EditProfile.jsx";
// import axios from "axios";

// // Set the base URL for Axios
// axios.defaults.baseURL = "http://localhost:5000/api";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Landing Page */}
//         <Route path="/" element={<Index />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/discover" element={<Discover />} />
//         <Route path="/likes" element={<Likes />} />
//         <Route path="/chatlist" element={<ChatList />} />
//         <Route path="/chat/:chatId" element={<ChatRoom />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/editprofile" element={<EditProfile />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Index from "./pages";
// import Navbar from "./components/Navbar";
// import Signup from "./pages/auth/Signup.jsx";
// import Login from "./pages/auth/Login.jsx";
// import Discover from "./pages/matching/Discover.jsx";
// import Likes from "./pages/matching/Likes.jsx";
// import ChatList from "./pages/chats/ChatList.jsx";
// import ChatRoom from "./pages/chats/ChatRoom.jsx";
// import Profile from "./pages/profile/Profile.jsx";
// import EditProfile from "./pages/profile/EditProfile.jsx";
// import axios from "axios";
// // import { AuthProvider } from "./AuthContext.jsx";
// import { AuthProvider } from "./AuthContext.jsx";

// // Set the base URL for Axios
// axios.defaults.baseURL = "http://localhost:5001/api";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* Landing Page */}
//           <Route path="/" element={<Index />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/discover" element={<Discover />} />
//           <Route path="/likes" element={<Likes />} />
//           <Route path="/chatlist" element={<ChatList />} />
//           <Route path="/chat/:chatId" element={<ChatRoom />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/editprofile" element={<EditProfile />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Discover from "./pages/Discover";
// import Likes from "./pages/Likes";
// import ChatList from "./pages/ChatList";
// import Profile from "./pages/Profile";
// import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import Navbar from "./components/Navbar";
import Signup from "./pages/auth/Signup.jsx";
import Login from "./pages/auth/Login.jsx";
import Discover from "./pages/matching/Discover.jsx";
import Likes from "./pages/matching/Likes.jsx";
import ChatList from "./pages/chats/ChatList.jsx";
import ChatRoom from "./pages/chats/ChatRoom.jsx";
import Profile from "./pages/profile/Profile.jsx";
import EditProfile from "./pages/profile/EditProfile.jsx";
import axios from "axios";
// import { AuthProvider } from "./AuthContext.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/discover"
            element={
              <ProtectedRoute>
                <Discover />
              </ProtectedRoute>
            }
          />
          <Route
            path="/likes"
            element={
              <ProtectedRoute>
                <Likes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chatlist"
            element={
              <ProtectedRoute>
                <ChatList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat/:chatId"
            element={
              <ProtectedRoute>
                <ChatRoom />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editprofile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
