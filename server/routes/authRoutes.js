// import express from "express";
// import authController from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";
// // In authRoutes.js
// import {
//   signup,
//   login,
//   getCurrentUser,
//   changePassword,
//   logout,
//   verifyToken,
// } from "../controllers/authController.js";

// const router = express.Router();

// // Auth routes
// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
// router.get("/me", authMiddleware, authController.getCurrentUser);
// router.post("/change-password", authMiddleware, authController.changePassword);
// router.get("/logout", authController.logout);
// router.get("/verify", authMiddleware, authController.verifyToken);

// export default router;

// routes/authRoutes.js
// import express from "express";
// import {
//   signup,
//   login,
//   getCurrentUser,
//   changePassword,
//   logout,
//   verifyToken,
// } from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/logout", logout);

// // Protected routes
// router.get("/me", authMiddleware, getCurrentUser);
// router.post("/change-password", authMiddleware, changePassword);
// router.get("/verify", authMiddleware, verifyToken);

// export default router;

// routes/authRoutes.js
// import express from "express";
// import {
//   signup,
//   login,
//   getCurrentUser,
//   changePassword,
//   logout,
//   verifyToken,
// } from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/register", signup);
// // router.post("/login", login);
// router.get("/logout", logout);

// // Protected routes
// router.post("/login", authMiddleware, getCurrentUser);
// router.post("/change-password", authMiddleware, changePassword);
// router.get("/verify", authMiddleware, verifyToken);

// export default router;

// import express from "express";
// import {
//   signup,
//   login,
//   getCurrentUser,
//   logout,
//   verifyToken,
// } from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/register", signup); // Support both endpoints
// router.post("/login", login);
// router.get("/logout", logout);

// // Protected routes
// router.get("/me", authMiddleware, getCurrentUser);
// router.post("/change-password", authMiddleware, changePassword);
// router.get("/verify", authMiddleware, verifyToken);

// export default router;

// import express from "express";
// import { body } from "express-validator";
// // import * as authController from "../controllers/authController"; // Adjust the path as needed
// import * as authController from "../controllers/authController.js";

// const router = express.Router();

// // Routes for user authentication
// // Signup
// router.post("/register", authController.signup);

// // Login
// router.post("/login", authController.login);

// // Get current user profile
// router.get("/profile", authController.getCurrentUser);

// // Change password
// router.post("/change-password", authController.changePassword);

// // Logout (client-side only)
// router.get("/logout", authController.logout);

// // Verify JWT token
// router.get("/verify", authController.verifyToken);

// export default router;

// import express from "express";
// import { body } from "express-validator";
// import * as authController from "../controllers/authController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Signup
// router.post("/register", authController.signup);

// // Login
// router.post("/login", authController.login);

// // Get current user profile (protected route)
// router.get("/profile", authMiddleware, authController.getCurrentUser);

// // Change password (protected route)
// router.post("/change-password", authMiddleware, authController.changePassword);

// // Logout (client-side only)
// router.get("/logout", authController.logout);

// // Verify JWT token (protected route)
// router.get("/verify", authMiddleware, authController.verifyToken);

// export default router;

import express from "express";
import { body } from "express-validator";
import * as authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../uploads.js";

const router = express.Router();

// Signup with validation
// router.post(
//   "/register",
//   upload.array("photos", 6),
//   [
//     // Required fields validation
//     body("name").notEmpty().withMessage("Name is required"),
//     body("age").isInt({ min: 18 }).withMessage("Age must be at least 18"),
//     body("gender").notEmpty().withMessage("Gender is required"),
//     body("occupation").notEmpty().withMessage("Occupation is required"),
//     body("mobile").notEmpty().withMessage("Mobile number is required"),
//     body("aadhar").notEmpty().withMessage("Aadhar number is required"),
//     body("email").isEmail().withMessage("Please provide a valid email"),
//     body("city").notEmpty().withMessage("City is required"),
//     body("area").notEmpty().withMessage("Area is required"),
//     body("password")
//       .isLength({ min: 8 })
//       .withMessage("Password must be at least 8 characters"),
//   ],
//   authController.signup
// );
router.post(
  "/register",
  upload.array("photos", 6),
  [
    // Required fields validation
    body("name").notEmpty().withMessage("Name is required"),
    body("age").isInt({ min: 18 }).withMessage("Age must be at least 18"),
    body("gender").notEmpty().withMessage("Gender is required"),
    body("occupation").notEmpty().withMessage("Occupation is required"),
    body("mobile").notEmpty().withMessage("Mobile number is required"),
    body("aadhar").notEmpty().withMessage("Aadhar number is required"),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("city").notEmpty().withMessage("City is required"),
    body("area").notEmpty().withMessage("Area is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  authController.signup
);

router.post(
  "/login",
  [
    body("identifier").notEmpty().withMessage("Identifier is required"),
    body("password").notEmpty().withMessage("Password is required"),
    body("identifierType")
      .notEmpty()
      .withMessage("Identifier type is required")
      .isIn(["email", "mobile", "linkedin", "aadhar"])
      .withMessage("Invalid identifier type"),
  ],
  authController.login
);

// Get current user profile (protected route)
router.get("/profile", authMiddleware, authController.getCurrentUser);

// Change password (protected route)
router.post(
  "/change-password",
  [
    body("currentPassword")
      .notEmpty()
      .withMessage("Current password is required"),
    body("newPassword")
      .isLength({ min: 8 })
      .withMessage("New password must be at least 8 characters"),
  ],
  authMiddleware,
  authController.changePassword
);

// Logout (client-side only)
router.get("/logout", authController.logout);

// Verify JWT token (protected route)
router.get("/verify", authMiddleware, authController.verifyToken);

// router.post("/verifyph", authController.verify);

// router.get("/check-verification/:phoneNumber", authController.verifyPhone);

export default router;
