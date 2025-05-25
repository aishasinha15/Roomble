// import express from "express";
// import { createMatch, getMatches } from "../controllers/matchController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Route to create a match (accept a like and match)
// router.post("/match", authMiddleware, createMatch);

// // Route to get all matches for the logged-in user
// router.get("/match", authMiddleware, getMatches);

// export default router;

// import express from "express";
// import {
//   createMatch,
//   getMatches,
//   acceptLike,
//   rejectLike,
// } from "../controllers/matchController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// /**
//  * @route   POST /match
//  * @desc    Manually create a match (optional fallback route)
//  * @access  Private
//  */
// router.post("/", authMiddleware, createMatch);

// /**
//  * @route   GET /match
//  * @desc    Get all matches for the logged-in user
//  * @access  Private
//  */
// router.get("/", authMiddleware, getMatches);

// /**
//  * @route   POST /match/accept
//  * @desc    Accept a like and create a match
//  * @access  Private
//  */
// router.post("/accept", acceptLike);

// /**
//  * @route   POST /match/reject
//  * @desc    Reject a like
//  * @access  Private
//  */
// router.post("/reject", rejectLike);

// export default router;

import express from "express";
import {
  likeProfile,
  getLikes,
  rejectLike,
} from "../controllers/likeController.js";
import {
  acceptLike,
  createMatch,
  getMatches,
  getMatchByChatId,
} from "../controllers/matchController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/match
 * @desc    Manually create a match (optional fallback route)
 * @access  Private
 */
router.post("/", authMiddleware, createMatch);

/**
 * @route   GET /api/match
 * @desc    Get all matches for the logged-in user
 * @access  Private
 */
router.get("/", authMiddleware, getMatches);

/**
 * @route   POST /api/match/accept
 * @desc    Accept a like and create a match
 * @access  Private
 */
router.post("/accept", authMiddleware, acceptLike);

/**
 * @route   POST /api/match/like
 * @desc    Like another user's profile
 * @access  Private
 */
router.post("/like", authMiddleware, likeProfile);

/**
 * @route   GET /api/match/likes
 * @desc    Get all users who liked the logged-in user
 * @access  Private
 */
router.get("/likes", authMiddleware, getLikes);

/**
 * @route   POST /api/match/reject
 * @desc    Reject a like from another user
 * @access  Private
 */
router.post("/reject", authMiddleware, rejectLike);

/**
 * @route   GET /api/match/by-chat/:chatId
 * @desc    Get match data by chat ID
 * @access  Private
 */
router.get("/by-chat/:chatId", authMiddleware, getMatchByChatId);

export default router;
