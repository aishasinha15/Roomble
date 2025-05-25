// import express from "express";
// import { sendMessage, getMessages } from "../controllers/messageController.js";
// import authMiddleware from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Route to get all messages in a specific chat
// router.get("/messages/:chatId", authMiddleware, getMessages);

// // Route to send a new message to a specific chat
// router.post("/messages/:chatId", authMiddleware, sendMessage);

// export default router;

import express from "express";
import {
  sendMessage,
  getMessages,
  markMessageAsRead,
} from "../controllers/messageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   GET /messages/:chatId
 * @desc    Get all messages in a specific chat
 * @access  Private
 */
router.get("/:chatId", getMessages);

/**
 * @route   POST /messages/:chatId
 * @desc    Send a new message in a specific chat
 * @access  Private
 */
router.post("/:chatId", sendMessage);

/**
 * @route   POST /messages/read/:messageId
 * @desc    Mark a specific message as read
 * @access  Private
 */
router.post("/read/:messageId", markMessageAsRead);

export default router;
