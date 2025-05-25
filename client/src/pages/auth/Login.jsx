// import React, { useState } from "react";
// import axios from "axios"; // Import axios
// import "./Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//     identifierType: "email",
//     rememberMe: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleIdentifierTypeChange = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       identifierType: type,
//       identifier: "", // Clear the identifier when changing type
//     }));
//   };

//   const getPlaceholder = () => {
//     switch (formData.identifierType) {
//       case "email":
//         return "Enter your email address";
//       case "mobile":
//         return "Enter your mobile number";
//       case "linkedin":
//         return "Enter your LinkedIn ID";
//       case "aadhar":
//         return "Enter your Aadhar number";
//       default:
//         return "Enter your identifier";
//     }
//   };

//   const getInputType = () => {
//     if (
//       formData.identifierType === "mobile" ||
//       formData.identifierType === "aadhar"
//     ) {
//       return "tel";
//     }
//     return "text";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/login",
//         {
//           identifier: formData.identifier,
//           password: formData.password,
//           identifierType: formData.identifierType,
//         }
//       );
//       // Handle successful login (response.data will contain the response)
//       console.log("Login successful:", response.data);
//       alert("Login successful!");
//       // You can save token or navigate the user based on the response
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed! Please check your credentials.");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-header">
//           <h1 className="login-title">Welcome to Roomble</h1>
//           <p className="login-subtitle">Login to find your perfect roommate</p>
//         </div>

//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="identifier-selector">
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "email" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("email")}
//             >
//               Email
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "mobile" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("mobile")}
//             >
//               Mobile
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "linkedin" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("linkedin")}
//             >
//               LinkedIn
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "aadhar" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("aadhar")}
//             >
//               Aadhar
//             </button>
//           </div>

//           <div className="form-group">
//             <label>
//               {formData.identifierType.charAt(0).toUpperCase() +
//                 formData.identifierType.slice(1)}
//             </label>
//             <input
//               type={getInputType()}
//               name="identifier"
//               value={formData.identifier}
//               onChange={handleChange}
//               placeholder={getPlaceholder()}
//               required
//             />
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <div className="password-input-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={toggleShowPassword}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-option">
//           <p>
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//     identifierType: "email",
//     rememberMe: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleIdentifierTypeChange = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       identifierType: type,
//       identifier: "", // Clear the identifier when changing type
//     }));
//   };

//   const getPlaceholder = () => {
//     switch (formData.identifierType) {
//       case "email":
//         return "Enter your email address";
//       case "mobile":
//         return "Enter your mobile number";
//       case "linkedin":
//         return "Enter your LinkedIn ID";
//       case "aadhar":
//         return "Enter your Aadhar number";
//       default:
//         return "Enter your identifier";
//     }
//   };

//   const getInputType = () => {
//     if (
//       formData.identifierType === "mobile" ||
//       formData.identifierType === "aadhar"
//     ) {
//       return "tel";
//     }
//     return "text";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/login",
//         {
//           identifier: formData.identifier,
//           password: formData.password,
//           identifierType: formData.identifierType,
//         }
//       );

//       // Handle successful login
//       console.log("Login successful:", response.data);

//       // Store the token in localStorage
//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);

//         // Redirect to discover page
//         navigate("/discover");
//       } else {
//         alert("Login successful but no token received!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed! Please check your credentials.");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-header">
//           <h1 className="login-title">Welcome to Roomble</h1>
//           <p className="login-subtitle">Login to find your perfect roommate</p>
//         </div>

//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="identifier-selector">
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "email" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("email")}
//             >
//               Email
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "mobile" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("mobile")}
//             >
//               Mobile
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "linkedin" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("linkedin")}
//             >
//               LinkedIn
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "aadhar" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("aadhar")}
//             >
//               Aadhar
//             </button>
//           </div>

//           <div className="form-group">
//             <label>
//               {formData.identifierType.charAt(0).toUpperCase() +
//                 formData.identifierType.slice(1)}
//             </label>
//             <input
//               type={getInputType()}
//               name="identifier"
//               value={formData.identifier}
//               onChange={handleChange}
//               placeholder={getPlaceholder()}
//               required
//             />
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <div className="password-input-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={toggleShowPassword}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-option">
//           <p>
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";
// // import { useAuth } from "../../AuthContext.jsx";

// import { useAuth } from "../../AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//     identifierType: "email",
//     rememberMe: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleIdentifierTypeChange = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       identifierType: type,
//       identifier: "", // Clear the identifier when changing type
//     }));
//   };

//   const getPlaceholder = () => {
//     switch (formData.identifierType) {
//       case "email":
//         return "Enter your email address";
//       case "mobile":
//         return "Enter your mobile number";
//       case "linkedin":
//         return "Enter your LinkedIn ID";
//       case "aadhar":
//         return "Enter your Aadhar number";
//       default:
//         return "Enter your identifier";
//     }
//   };

//   const getInputType = () => {
//     if (
//       formData.identifierType === "mobile" ||
//       formData.identifierType === "aadhar"
//     ) {
//       return "tel";
//     }
//     return "text";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Login payload:", {
//         identifier: formData.identifier,
//         password: formData.password,
//         identifierType: formData.identifierType,
//       });
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/login",
//         {
//           identifier: formData.identifier,
//           password: formData.password,
//           identifierType: formData.identifierType,
//         }
//       );

//       // Handle successful login
//       console.log("Login successful:", response.data);

//       // Use the login function from context
//       if (response.data.token) {
//         login(response.data.token);

//         // Redirect to discover page
//         navigate("/discover");
//       } else {
//         alert("Login successful but no token received!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed! Please check your credentials.");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-header">
//           <h1 className="login-title">Welcome to Roomble</h1>
//           <p className="login-subtitle">Login to find your perfect roommate</p>
//         </div>

//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="identifier-selector">
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "email" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("email")}
//             >
//               Email
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "mobile" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("mobile")}
//             >
//               Mobile
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "linkedin" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("linkedin")}
//             >
//               LinkedIn
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "aadhar" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("aadhar")}
//             >
//               Aadhar
//             </button>
//           </div>

//           <div className="form-group">
//             <label>
//               {formData.identifierType.charAt(0).toUpperCase() +
//                 formData.identifierType.slice(1)}
//             </label>
//             <input
//               type={getInputType()}
//               name="identifier"
//               value={formData.identifier}
//               onChange={handleChange}
//               placeholder={getPlaceholder()}
//               required
//             />
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <div className="password-input-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={toggleShowPassword}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-option">
//           <p>
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//     identifierType: "email",
//     rememberMe: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleIdentifierTypeChange = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       identifierType: type,
//       identifier: "", // Clear the identifier when changing type
//     }));
//   };

//   const getPlaceholder = () => {
//     switch (formData.identifierType) {
//       case "email":
//         return "Enter your email address";
//       case "mobile":
//         return "Enter your mobile number";
//       case "linkedin":
//         return "Enter your LinkedIn ID";
//       case "aadhar":
//         return "Enter your Aadhar number";
//       default:
//         return "Enter your identifier";
//     }
//   };

//   const getInputType = () => {
//     if (
//       formData.identifierType === "mobile" ||
//       formData.identifierType === "aadhar"
//     ) {
//       return "tel";
//     }
//     return "text";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Login payload:", {
//         identifier: formData.identifier,
//         password: formData.password,
//         identifierType: formData.identifierType,
//       });
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/login",
//         {
//           identifier: formData.identifier,
//           password: formData.password,
//           identifierType: formData.identifierType,
//         }
//       );

//       // Handle successful login
//       console.log("Login successful:", response.data);

//       if (response.data.token) {
//         // Save token to localStorage
//         localStorage.setItem("token", response.data.token);

//         // Optionally save user data
//         if (response.data.user) {
//           localStorage.setItem("user", JSON.stringify(response.data.user));
//         }

//         // Redirect to discover page
//         navigate("/discover");
//       } else {
//         alert("Login successful but no token received!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed! Please check your credentials.");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-header">
//           <h1 className="login-title">Welcome to Roomble</h1>
//           <p className="login-subtitle">Login to find your perfect roommate</p>
//         </div>

//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="identifier-selector">
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "email" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("email")}
//             >
//               Email
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "mobile" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("mobile")}
//             >
//               Mobile
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "linkedin" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("linkedin")}
//             >
//               LinkedIn
//             </button>
//             <button
//               type="button"
//               className={`identifier-type-btn ${
//                 formData.identifierType === "aadhar" ? "active" : ""
//               }`}
//               onClick={() => handleIdentifierTypeChange("aadhar")}
//             >
//               Aadhar
//             </button>
//           </div>

//           <div className="form-group">
//             <label>
//               {formData.identifierType.charAt(0).toUpperCase() +
//                 formData.identifierType.slice(1)}
//             </label>
//             <input
//               type={getInputType()}
//               name="identifier"
//               value={formData.identifier}
//               onChange={handleChange}
//               placeholder={getPlaceholder()}
//               required
//             />
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <div className="password-input-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={toggleShowPassword}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-option">
//           <p>
//             Don't have an account? <a href="/signup">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    identifierType: "email",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleIdentifierTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      identifierType: type,
      identifier: "", // Clear the identifier when changing type
    }));
  };

  const getPlaceholder = () => {
    switch (formData.identifierType) {
      case "email":
        return "Enter your email address";
      case "mobile":
        return "Enter your mobile number";
      case "linkedin":
        return "Enter your LinkedIn ID";
      case "aadhar":
        return "Enter your Aadhar number";
      default:
        return "Enter your identifier";
    }
  };

  const getInputType = () => {
    if (
      formData.identifierType === "mobile" ||
      formData.identifierType === "aadhar"
    ) {
      return "tel";
    }
    return "text";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Login payload:", {
        identifier: formData.identifier,
        password: formData.password,
        identifierType: formData.identifierType,
      });

      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          identifier: formData.identifier,
          password: formData.password,
          identifierType: formData.identifierType,
        }
      );

      console.log("Login successful:", response.data);

      if (response.data.token) {
        // Call AuthContext's login method
        await login(response.data.token, response.data.user);
        navigate("/discover");
      } else {
        alert("Login successful but no token received!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed! Please check your credentials.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1 className="login-title">Welcome to Roomble</h1>
          <p className="login-subtitle">Login to find your perfect roommate</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="identifier-selector">
            <button
              type="button"
              className={`identifier-type-btn ${
                formData.identifierType === "email" ? "active" : ""
              }`}
              onClick={() => handleIdentifierTypeChange("email")}
            >
              Email
            </button>
            <button
              type="button"
              className={`identifier-type-btn ${
                formData.identifierType === "mobile" ? "active" : ""
              }`}
              onClick={() => handleIdentifierTypeChange("mobile")}
            >
              Mobile
            </button>
            <button
              type="button"
              className={`identifier-type-btn ${
                formData.identifierType === "linkedin" ? "active" : ""
              }`}
              onClick={() => handleIdentifierTypeChange("linkedin")}
            >
              LinkedIn
            </button>
            <button
              type="button"
              className={`identifier-type-btn ${
                formData.identifierType === "aadhar" ? "active" : ""
              }`}
              onClick={() => handleIdentifierTypeChange("aadhar")}
            >
              Aadhar
            </button>
          </div>

          <div className="form-group">
            <label>
              {formData.identifierType.charAt(0).toUpperCase() +
                formData.identifierType.slice(1)}
            </label>
            <input
              type={getInputType()}
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder={getPlaceholder()}
              required
            />
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="signup-option">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
