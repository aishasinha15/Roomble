// import express from "express";
// import {
//   getUserProfile,
//   updateUserProfile,
//   getLikes,
//   discoverProfiles,
// } from "../controllers/profileController.js";

// const router = express.Router();

// // Route to get the logged-in user's profile
// // authMiddleware is now applied at the app level in server.js
// router.get("/user", getUserProfile);

// // Route to update the logged-in user's profile
// router.put("/user", updateUserProfile);

// // Route to get the users who liked the logged-in user's profile
// router.get("/likes", getLikes);

// // Route to fetch a random user for the discovery section
// router.get("/discover", discoverProfiles);

// export default router;

// import express from "express";
// import {
//   getUserProfile,
//   updateUserProfile,
//   getLikes,
//   discoverProfiles,
// } from "../controllers/profileController.js";

// import multer from "multer";
// const upload = multer({ storage: multer.memoryStorage() });

// const router = express.Router();

// // Route to get the logged-in user's profile
// router.get("/user", getUserProfile);

// // Route to update the logged-in user's profile (with image upload)
// router.put("/user", upload.single("profileImage"), updateUserProfile);

// // Route to get the users who liked the logged-in user's profile
// router.get("/likes", getLikes);

// // Route to fetch a random user for the discovery section
// router.get("/discover", discoverProfiles);

// export default router;

// import express from "express";
// import {
//   getUserProfile,
//   updateUserProfile,
//   getLikes,
//   discoverProfiles,
// } from "../controllers/profileController.js";

// import multer from "multer";
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(
//         null,
//         file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//       );
//     },
//   }),
// });

// const router = express.Router();

// // Route to get the logged-in user's profile
// router.get("/user", getUserProfile);

// // Route to update the logged-in user's profile (with image upload)
// router.put("/user", upload.single("profileImage"), updateUserProfile);

// // Route to get the users who liked the logged-in user's profile
// router.get("/likes", getLikes);

// // Route to fetch a random user for the discovery section
// router.get("/discover", discoverProfiles);

// export default router;

// import express from "express";
// import path from "path";
// import {
//   getUserProfile,
//   updateUserProfile,
//   getLikes,
//   discoverProfiles,
// } from "../controllers/profileController.js";

// import multer from "multer";
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(
//         null,
//         file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//       );
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// });

// const router = express.Router();

// // Route to get the logged-in user's profile
// router.get("/user/:id", getUserProfile);

// // Route to update the logged-in user's profile (with image upload)
// router.put("/user", updateUserProfile);

// // Route to get the users who liked the logged-in user's profile
// router.get("/likes", getLikes);

// // Route to fetch a random user for the discovery section
// router.get("/discover", discoverProfiles);

// export default router;

// profileRoutes.js
// import express from "express";
// import path from "path";
// import {
//   getUserProfile,
//   updateUserProfile,
//   discoverProfiles,
// } from "../controllers/profileController.js";
// import {
//   likeProfile,
//   getLikes,
//   rejectLike,
// } from "../controllers/likeController.js";
// import upload from "../uploads.js"; // Import the configured upload middleware

// const router = express.Router();

// // Route to get the logged-in user's profile
// router.get("/user/:id", getUserProfile);

// // Route to update the logged-in user's profile (with image upload)
// // Add the upload middleware for multiple photos
// router.put("/user/:id", upload.array("photos", 6), updateUserProfile);

// // Route to get the users who liked the logged-in user's profile
// router.get("/likes", getLikes);
// router.post("/like", likeProfile);
// router.post("/reject-like", rejectLike); // Add this optional route

// // Route to fetch a random user for the discovery section
// router.get("/discover", discoverProfiles);

// export default router;

// import express from "express";
// import {
//   getUserProfile,
//   updateUserProfile,
//   discoverProfiles,
// } from "../controllers/profileController.js";
// import {
//   likeProfile,
//   getLikes,
//   rejectLike,
// } from "../controllers/likeController.js";
// import upload from "../uploads.js"; // Multer middleware

// const router = express.Router();

// /**
//  * @route   GET /profile/user/:id
//  * @desc    Get user profile by ID
//  * @access  Public or Authenticated depending on use case
//  */
// router.get("/user/:id", getUserProfile);

// /**
//  * @route   PUT /profile/user/:id
//  * @desc    Update user profile (including photo upload)
//  * @access  Private
//  */
// router.put("/user/:id", upload.array("photos", 6), updateUserProfile);

// /**
//  * @route   GET /profile/likes
//  * @desc    Get all users who liked the logged-in user's profile
//  * @access  Private
//  */
// router.get("/likes", getLikes);

// /**
//  * @route   POST /profile/like
//  * @desc    Like another user
//  * @access  Private
//  */
// router.post("/like", likeProfile);

// /**
//  * @route   POST /profile/reject-like
//  * @desc    Reject a like from another user
//  * @access  Private
//  */
// router.post("/reject-like", rejectLike);

// /**
//  * @route   GET /profile/discover
//  * @desc    Discover new random profiles
//  * @access  Private
//  */
// router.get("/discover", discoverProfiles);

// export default router;

import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  discoverProfiles,
} from "../controllers/profileController.js";
import upload from "../uploads.js"; // Multer middleware
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   GET /api/profile/user/:id
 * @desc    Get user profile by ID
 * @access  Private
 */
router.get("/user/:id", getUserProfile);

/**
 * @route   PUT /api/profile/user/:id
 * @desc    Update user profile (including photo upload)
 * @access  Private
 */
router.put(
  "/user/:id",
  authMiddleware,
  upload.array("photos", 6),
  updateUserProfile
);

/**
 * @route   GET /api/profile/discover
 * @desc    Discover new random profiles
 * @access  Private
 */
router.get("/discover", authMiddleware, discoverProfiles);

export default router;
