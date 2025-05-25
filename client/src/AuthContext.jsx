// import { createContext, useState, useEffect, useContext } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage on component mount
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// import { createContext, useState, useEffect, useContext } from "react";

// // Create the context
// const AuthContext = createContext(null);

// // Create the provider component
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage on component mount
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   const value = {
//     isLoggedIn,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Custom hook to use the auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === null) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthContext;

// import React, { createContext, useState, useEffect, useContext } from "react";

// // Create the context
// const AuthContext = createContext(null);

// // Create the provider component
// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists in localStorage on component mount
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   function login(token) {
//     localStorage.setItem("token", token);
//     setIsLoggedIn(true);
//   }

//   function logout() {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   }

//   const contextValue = {
//     isLoggedIn,
//     login,
//     logout,
//   };

//   return React.createElement(
//     AuthContext.Provider,
//     { value: contextValue },
//     children
//   );
// }

// // Custom hook to use the auth context
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === null) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export default AuthContext;

// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is authenticated on mount
//   useEffect(() => {
//     const checkAuth = () => {
//       const storedToken = localStorage.getItem("token");
//       if (storedToken) {
//         setToken(storedToken);
//         setIsAuthenticated(true);

//         // You can also fetch user data here if needed
//         // fetchUserData(storedToken);
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   // Function to fetch user data (optional)
//   const fetchUserData = async (userToken) => {
//     try {
//       const response = await fetch("http://localhost:5001/api/auth/me", {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData.user);
//       } else {
//         // If token is invalid, log the user out
//         logout();
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   // Login function
//   const login = (newToken, userData = null) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//     setIsAuthenticated(true);

//     if (userData) {
//       setUser(userData);
//     } else {
//       // Optionally fetch user data if not provided
//       // fetchUserData(newToken);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   const value = {
//     isAuthenticated,
//     token,
//     user,
//     loading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthContext;

// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is authenticated on mount
//   useEffect(() => {
//     const checkAuth = () => {
//       const storedToken = localStorage.getItem("token");
//       if (storedToken) {
//         setToken(storedToken);
//         setIsAuthenticated(true);

//         // Optionally fetch user data
//         fetchUserData(storedToken);
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   // Function to fetch user data
//   const fetchUserData = async (userToken) => {
//     try {
//       const response = await fetch("http://localhost:5001/api/auth/profile", {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData.user);
//       } else {
//         // If token is invalid, log the user out
//         logout();
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       // If there's an error, log the user out
//       logout();
//     }
//   };

//   // Login function
//   const login = (newToken, userData = null) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//     setIsAuthenticated(true);

//     if (userData) {
//       setUser(userData);
//     } else {
//       // Fetch user data if not provided
//       fetchUserData(newToken);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   const value = {
//     isAuthenticated,
//     token,
//     user,
//     loading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthContext;

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Use localStorage directly for initial state to ensure consistency
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);

        // Fetch user data
        try {
          await fetchUserData(storedToken);
        } catch (error) {
          console.error("Error during auth check:", error);
          // If token is invalid, log the user out
          handleLogout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Function to fetch user data
  const fetchUserData = async (userToken) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        // If token is invalid, log the user out
        handleLogout();
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // If there's an error, log the user out
      handleLogout();
      throw error;
    }
  };

  // Login function
  const login = async (newToken, userData = null) => {
    localStorage.setItem("token", newToken);

    setToken(newToken);
    setIsAuthenticated(true);

    if (userData) {
      setUser(userData);
    } else {
      // Fetch user data if not provided
      try {
        await fetchUserData(newToken);
      } catch (error) {
        console.error("Error fetching user data after login:", error);
      }
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    token,
    user,
    loading,
    login,
    logout: handleLogout, // Renamed for clarity
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
