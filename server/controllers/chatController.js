// import Chat from "../models/Chat.js";
// import Message from "../models/Message.js";

// // Fetch all chats for the logged-in user
// export const getChats = async (req, res) => {
//   try {
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find all chatrooms that the user is part of
//     const chats = await Chat.find({
//       users: { $in: [userId] }, // Ensure the logged-in user is in the chat
//     }).populate("users", "username"); // Populate user details to show in chat list

//     if (!chats) {
//       return res.status(404).json({ message: "No chats found" });
//     }

//     res.status(200).json({ chats });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching chats" });
//   }
// };

// // Fetch messages for a specific chat
// export const getChatMessages = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from the URL
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find the chat by ID
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Ensure that the logged-in user is part of the chat
//     if (!chat.users.includes(userId)) {
//       return res
//         .status(403)
//         .json({ message: "You are not authorized to view this chat" });
//     }

//     // Fetch all messages related to this chat
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

// // Create a new message in a chat
// export const createMessage = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from the URL
//     const { text } = req.body; // Message text from the request body
//     const senderId = req.user.userId; // The logged-in user's ID

//     if (!text || !chatId) {
//       return res
//         .status(400)
//         .json({ message: "Message text and chat ID are required" });
//     }

//     // Find the chat by ID
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Ensure that the logged-in user is part of the chat
//     if (!chat.users.includes(senderId)) {
//       return res
//         .status(403)
//         .json({
//           message: "You are not authorized to send messages in this chat",
//         });
//     }

//     // Create the message
//     const newMessage = new Message({
//       sender: senderId,
//       chatId,
//       text,
//     });

//     await newMessage.save();

//     // Add the message to the chat's messages array (if necessary)
//     chat.messages.push(newMessage._id);
//     await chat.save();

//     res.status(200).json({ message: "Message sent successfully", newMessage });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while sending the message" });
//   }
// };

// import Chat from "../models/Chat.js";
// import Message from "../models/Message.js";

// // Fetch all chats for the logged-in user
// export const getChats = async (req, res) => {
//   try {
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find all chatrooms that the user is part of
//     const chats = await Chat.find({
//       users: { $in: [userId] }, // Ensure the logged-in user is in the chat
//     }).populate("users", "username"); // Populate user details to show in chat list

//     if (!chats || chats.length === 0) {
//       return res.status(404).json({ message: "No chats found" });
//     }

//     res.status(200).json({ chats });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching chats" });
//   }
// };

// // Fetch a specific chat by its ID
// export const getChatById = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Get the chat ID from the URL

//     // Find the chat by ID
//     const chat = await Chat.findById(chatId).populate("users", "username");

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     res.status(200).json({ chat });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching the chat" });
//   }
// };

// // Fetch messages for a specific chat
// export const getChatMessages = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from the URL
//     const userId = req.user.userId; // The logged-in user's ID

//     // Find the chat by ID
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Ensure that the logged-in user is part of the chat
//     if (!chat.users.includes(userId)) {
//       return res
//         .status(403)
//         .json({ message: "You are not authorized to view this chat" });
//     }

//     // Fetch all messages related to this chat
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

// // Create a new message in a chat
// export const createMessage = async (req, res) => {
//   try {
//     const { chatId } = req.params; // Chat ID from the URL
//     const { text } = req.body; // Message text from the request body
//     const senderId = req.user.userId; // The logged-in user's ID

//     if (!text || !chatId) {
//       return res
//         .status(400)
//         .json({ message: "Message text and chat ID are required" });
//     }

//     // Find the chat by ID
//     const chat = await Chat.findById(chatId);

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found" });
//     }

//     // Ensure that the logged-in user is part of the chat
//     if (!chat.users.includes(senderId)) {
//       return res.status(403).json({
//         message: "You are not authorized to send messages in this chat",
//       });
//     }

//     // Create the message
//     const newMessage = new Message({
//       sender: senderId,
//       chatId,
//       text,
//     });

//     await newMessage.save();

//     // Add the message to the chat's messages array (if necessary)
//     chat.messages.push(newMessage._id);
//     await chat.save();

//     res.status(200).json({ message: "Message sent successfully", newMessage });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while sending the message" });
//   }
// };

// controllers/chatController.js

import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

// Fetch all chats for the logged-in user
export const getChats = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find all chatrooms where the user is a participant
    const chats = await Chat.find({
      participants: { $in: [userId] },
    })
      .populate("participants", "name")
      .populate("latestMessage");

    if (!chats || chats.length === 0) {
      return res.status(404).json({ message: "No chats found" });
    }

    res.status(200).json({ chats });
  } catch (error) {
    console.error("Error in getChats:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching chats" });
  }
};

// Fetch a specific chat by its ID
export const getChatById = async (req, res) => {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId)
      .populate("participants", "name")
      .populate("latestMessage");

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Verify user is part of the chat
    const userId = req.user._id;
    const isParticipant = chat.participants.some(
      (id) => id.toString() === userId
    );

    if (!isParticipant) {
      return res
        .status(403)
        .json({ message: "You are not authorized to view this chat" });
    }

    res.status(200).json({ chat });
  } catch (error) {
    console.error("Error in getChatById:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching the chat" });
  }
};

// Fetch messages for a specific chat
export const getChatMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user._id;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    const isParticipant = chat.participants.some(
      (id) => id.toString() === userId
    );

    if (!isParticipant) {
      return res
        .status(403)
        .json({ message: "You are not authorized to view this chat" });
    }

    const messages = await Message.find({ chatId }).populate("sender", "name");

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Error in getChatMessages:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching messages" });
  }
};

// Create a new message in a chat
export const createMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { text } = req.body;
    const senderId = req.user._id;

    if (!text || !chatId) {
      return res
        .status(400)
        .json({ message: "Message text and chat ID are required" });
    }

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    const isParticipant = chat.participants.some(
      (id) => id.toString() === senderId
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "You are not authorized to send messages in this chat",
      });
    }

    const newMessage = new Message({
      sender: senderId,
      chatId,
      text,
    });

    await newMessage.save();

    // Update latest message
    chat.latestMessage = newMessage._id;
    await chat.save();

    res.status(200).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.error("Error in createMessage:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while sending the message" });
  }
};
