// import Message from "../models/Message.js";
// import Chat from "../models/Chat.js";

// // Send a message to a chat
// export const sendMessage = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from URL params
//     const { text } = req.body; // Message text from request body
//     const senderId = req.user.userId; // The logged-in user's ID

//     if (!text) {
//       return res.status(400).json({ message: "Message text is required" });
//     }

//     // Find the chat by chatId
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Check if the user is part of the chat
//     if (!chat.users.includes(senderId)) {
//       return res.status(403).json({
//         message: "You are not authorized to send messages in this chat",
//       });
//     }

//     // Create a new message
//     const newMessage = new Message({
//       sender: senderId,
//       chatId,
//       text,
//     });

//     await newMessage.save();

//     // Optionally, push the new message ID into the chat's messages array (if you track messages within the chat)
//     chat.messages.push(newMessage._id);
//     await chat.save();

//     res.status(201).json({ message: "Message sent successfully", newMessage });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while sending the message" });
//   }
// };

// // Get messages for a specific chat
// export const getMessages = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from URL params
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find the chat by chatId
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Check if the user is part of the chat
//     if (!chat.users.includes(userId)) {
//       return res.status(403).json({
//         message: "You are not authorized to view messages in this chat",
//       });
//     }

//     // Fetch all messages for the chat
//     const messages = await Message.find({ chatId }).populate(
//       "sender",
//       "username"
//     );

//     res.status(200).json({ messages });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching messages" });
//   }
// };

// // Mark a message as read
// export const markMessageAsRead = async (req, res) => {
//   try {
//     const { messageId } = req.params; // Message ID from URL params
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find the message by ID
//     const message = await Message.findById(messageId);

//     if (!message) {
//       return res.status(404).json({ message: "Message not found" });
//     }

//     // You can track which user has read the message if necessary
//     // Here, we'll assume the message is read by the user once they view it
//     message.readBy.push(userId); // Add userId to the readBy array
//     await message.save();

//     res.status(200).json({ message: "Message marked as read" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Something went wrong while marking the message as read",
//     });
//   }
// };

// import Message from "../models/Message.js";
// import Chat from "../models/Chat.js";

// // Send a message in a chat
// export const sendMessage = async (req, res) => {
//   try {
//     const { chatId } = req.params;
//     const { text } = req.body;
//     const senderId = req.user._id;

//     if (!text || !text.trim()) {
//       return res.status(400).json({ message: "Message text is required" });
//     }

//     const chat = await Chat.findById(chatId);
//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     if (!chat.users.includes(senderId)) {
//       return res
//         .status(403)
//         .json({ message: "Unauthorized to send messages in this chat" });
//     }

//     const newMessage = new Message({
//       sender: senderId,
//       chatId,
//       text: text.trim(),
//       readBy: [senderId], // Mark sender as already read
//     });

//     await newMessage.save();

//     // Add message to the chat (if chat schema tracks messages)
//     chat.messages.push(newMessage._id);
//     await chat.save();

//     res.status(201).json({ message: "Message sent successfully", newMessage });
//   } catch (error) {
//     console.error("Error in sendMessage:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while sending the message" });
//   }
// };

// // Get all messages from a chat
// export const getMessages = async (req, res) => {
//   try {
//     const { chatId } = req.params;
//     const userId = req.user._id;

//     const chat = await Chat.findById(chatId);
//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     if (!chat.users.includes(userId)) {
//       return res
//         .status(403)
//         .json({ message: "Unauthorized to view messages in this chat" });
//     }

//     const messages = await Message.find({ chatId })
//       .populate("sender", "_id name username photo") // assuming you have `name` and `photo`
//       .sort({ createdAt: 1 }); // messages in chronological order

//     res.status(200).json({ messages });
//   } catch (error) {
//     console.error("Error in getMessages:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching messages" });
//   }
// };

// // Mark a message as read
// export const markMessageAsRead = async (req, res) => {
//   try {
//     const { messageId } = req.params;
//     const userId = req.user._id;

//     const message = await Message.findById(messageId);
//     if (!message) {
//       return res.status(404).json({ message: "Message not found" });
//     }

//     if (!message.readBy.includes(userId)) {
//       message.readBy.push(userId);
//       await message.save();
//     }

//     res.status(200).json({ message: "Message marked as read" });
//   } catch (error) {
//     console.error("Error in markMessageAsRead:", error);
//     res.status(500).json({
//       message: "Something went wrong while marking the message as read",
//     });
//   }
// };

// Fix some issues in messageController.js

// import Message from "../models/Message.js";
// import Chat from "../models/Chat.js";

// // Send a message in a chat
// export const sendMessage = async (req, res) => {
//   try {
//     const { chatId } = req.params;
//     const { text } = req.body;
//     const senderId = req.user._id;

//     if (!text || !text.trim()) {
//       return res.status(400).json({ message: "Message text is required" });
//     }

//     const chat = await Chat.findById(chatId);
//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Verify user is part of this chat
//     if (!chat.users.includes(senderId)) {
//       return res
//         .status(403)
//         .json({ message: "Unauthorized to send messages in this chat" });
//     }

//     // Create new message with correct field names
//     const newMessage = new Message({
//       chat: chatId,
//       sender: senderId,
//       content: text.trim(),
//       seenBy: [senderId], // Mark as seen by sender
//     });

//     await newMessage.save();

//     // Add message to chat and update lastMessage
//     chat.messages.push(newMessage._id);
//     chat.lastMessage = newMessage._id;
//     await chat.save();

//     // Return populated message for immediate display
//     const populatedMessage = await Message.findById(newMessage._id).populate(
//       "sender",
//       "_id name username photos"
//     );

//     res.status(201).json({
//       message: "Message sent successfully",
//       newMessage: populatedMessage,
//     });
//   } catch (error) {
//     console.error("Error in sendMessage:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while sending the message" });
//   }
// };

// // Get all messages from a chat
// export const getMessages = async (req, res) => {
//   try {
//     const { chatId } = req.params;
//     const userId = req.user._id;

//     const chat = await Chat.findById(chatId);
//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Verify user is part of this chat
//     if (!chat.users.includes(userId)) {
//       return res
//         .status(403)
//         .json({ message: "Unauthorized to view messages in this chat" });
//     }

//     // Find messages and populate sender data
//     const messages = await Message.find({ chat: chatId })
//       .populate("sender", "_id name username photos")
//       .sort({ createdAt: 1 }); // chronological order

//     res.status(200).json({ messages });
//   } catch (error) {
//     console.error("Error in getMessages:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching messages" });
//   }
// };

// // Mark a message as read (updated to use seenBy instead of readBy)
// export const markMessageAsRead = async (req, res) => {
//   try {
//     const { messageId } = req.params;
//     const userId = req.user._id;

//     const message = await Message.findById(messageId);
//     if (!message) {
//       return res.status(404).json({ message: "Message not found" });
//     }

//     // Add user to seenBy array if not already there
//     if (!message.seenBy.includes(userId)) {
//       message.seenBy.push(userId);
//       await message.save();
//     }

//     res.status(200).json({ message: "Message marked as seen" });
//   } catch (error) {
//     console.error("Error in markMessageAsRead:", error);
//     res.status(500).json({
//       message: "Something went wrong while marking the message as seen",
//     });
//   }
// };

// controllers/messageController.js

import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

// Send a message in a chat
export const sendMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { text } = req.body;
    const senderId = req.user._id;

    console.log("Sending message with:", {
      chatId,
      senderId,
      reqUserId: req.user._id,
      text,
    });

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }

    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if user is part of the chat - handle both users and participants fields
    const userIsParticipant =
      (chat.users &&
        chat.users.some((id) => id.toString() === senderId.toString())) ||
      (chat.participants &&
        chat.participants.some((id) => id.toString() === senderId.toString()));

    if (!userIsParticipant) {
      return res
        .status(403)
        .json({ message: "Unauthorized to send messages in this chat" });
    }

    // Create new message
    const newMessage = new Message({
      chat: chatId,
      sender: senderId,
      content: text.trim(),
      seenBy: [senderId], // Mark as seen by sender
    });

    await newMessage.save();

    // Update chat with new message
    if (chat.messages) {
      chat.messages.push(newMessage._id);
    } else {
      chat.messages = [newMessage._id];
    }

    chat.lastMessage = newMessage._id;
    await chat.save();

    // Return populated message for immediate display
    const populatedMessage = await Message.findById(newMessage._id).populate(
      "sender",
      "_id name username photos"
    );

    const savedMessage = await Message.findById(newMessage._id);
    console.log("Saved message verification:", {
      savedSender: savedMessage.sender,
      expectedSender: senderId,
    });

    res.status(201).json({
      message: "Message sent successfully",
      newMessage: populatedMessage,
    });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while sending the message" });
  }
};

// Get all messages from a chat
export const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user._id;

    console.log("Fetching messages for:", {
      chatId,
      userId,
      reqUserId: req.user._id,
    });

    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if user is part of the chat - handle both users and participants fields
    const userIsParticipant =
      (chat.users &&
        chat.users.some((id) => id.toString() === userId.toString())) ||
      (chat.participants &&
        chat.participants.some((id) => id.toString() === userId.toString()));

    const participants = chat.participants || chat.users || [];
    console.log("Participant check:", {
      participants: participants.map((p) => p.toString()),
      userId: userId.toString(),
      userIsParticipant,
    });

    if (!userIsParticipant) {
      return res
        .status(403)
        .json({ message: "Unauthorized to view messages in this chat" });
    }

    // Find messages and populate sender data
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "_id name username photos")
      .sort({ createdAt: 1 }); // chronological order

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Error in getMessages:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching messages" });
  }
};

// Mark a message as read
export const markMessageAsRead = async (req, res) => {
  try {
    const { messageId } = req.params;
    const userId = req.user._id;

    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    // Add user to seenBy array if not already there
    if (!message.seenBy.includes(userId)) {
      message.seenBy.push(userId);
      await message.save();
    }

    res.status(200).json({ message: "Message marked as seen" });
  } catch (error) {
    console.error("Error in markMessageAsRead:", error);
    res.status(500).json({
      message: "Something went wrong while marking the message as seen",
    });
  }
};
