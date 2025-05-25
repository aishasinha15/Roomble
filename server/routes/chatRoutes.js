// import express from "express";
// import { getChats, getChatById } from "../controllers/chatController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Route to get all chats for the logged-in user
// router.get("/chats", authMiddleware, getChats);

// // Route to get a specific chatroom by ID
// router.get("/chats/:chatId", authMiddleware, getChatById);

// export default router;

import express from "express";
import { getChats, getChatById } from "../controllers/chatController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   GET /chats
 * @desc    Get all chats for the logged-in user
 * @access  Private
 */
router.get("/", getChats);

/**
 * @route   GET /chats/:chatId
 * @desc    Get specific chat by ID
 * @access  Private
 */
router.get("/:chatId", getChatById);

export default router;
