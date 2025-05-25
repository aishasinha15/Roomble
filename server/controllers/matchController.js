// import Like from "../models/Like.js";
// import Match from "../models/Match.js";
// import Chat from "../models/Chat.js";

// // Accept a like and create a match
// export const acceptLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body; // The ID of the user whose like is being accepted
//     const currentUserId = req.user.userId; // The logged-in user's ID

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Check if the current user has a pending like from the liked user
//     const like = await Like.findOne({
//       user1: likedUserId,
//       user2: currentUserId,
//       status: "pending", // Only accept if the like is pending
//     });

//     if (!like) {
//       return res
//         .status(400)
//         .json({ message: "No pending like found from this user" });
//     }

//     // Update the like to be "accepted"
//     like.status = "accepted";
//     await like.save();

//     // Check if there’s already a reverse like from the current user to the liked user
//     const reverseLike = await Like.findOne({
//       user1: currentUserId,
//       user2: likedUserId,
//       status: "pending", // Only create a match if there’s a pending like from both sides
//     });

//     if (!reverseLike) {
//       return res
//         .status(400)
//         .json({ message: "No pending like from your side to create a match" });
//     }

//     // Create a match (both users have liked each other)
//     const newMatch = new Match({
//       user1: currentUserId,
//       user2: likedUserId,
//       chatId: null, // Chat ID will be created later
//     });

//     await newMatch.save();

//     // Optionally, you can create a chat here (if you'd like the chat to be created automatically when a match is made)
//     const newChat = new Chat({
//       users: [currentUserId, likedUserId],
//       messages: [],
//     });

//     await newChat.save();

//     // Update the match with the chat ID
//     newMatch.chatId = newChat._id;
//     await newMatch.save();

//     res
//       .status(200)
//       .json({ message: "Match created successfully", match: newMatch });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while creating the match" });
//   }
// };

// // Reject a like (optional function for managing likes)
// export const rejectLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body; // The ID of the user whose like is being rejected
//     const currentUserId = req.user.userId; // The logged-in user's ID

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Find the like record
//     const like = await Like.findOne({
//       user1: likedUserId,
//       user2: currentUserId,
//       status: "pending", // Only reject if the like is pending
//     });

//     if (!like) {
//       return res
//         .status(400)
//         .json({ message: "No pending like found from this user" });
//     }

//     // Remove the like record or mark it as rejected
//     await like.remove(); // You could alternatively update the status to "rejected" if preferred.

//     res.status(200).json({ message: "Like rejected successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while rejecting the like" });
//   }
// };

// import Like from "../models/Like.js";
// import Match from "../models/Match.js";
// import Chat from "../models/Chat.js";

// // Accept a like and create a match
// export const acceptLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body; // The ID of the user whose like is being accepted
//     const currentUserId = req.user.userId; // The logged-in user's ID

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Check if the current user has a pending like from the liked user
//     const like = await Like.findOne({
//       user1: likedUserId,
//       user2: currentUserId,
//       status: "pending", // Only accept if the like is pending
//     });

//     if (!like) {
//       return res
//         .status(400)
//         .json({ message: "No pending like found from this user" });
//     }

//     // Update the like to be "accepted"
//     like.status = "accepted";
//     await like.save();

//     // Check if there’s already a reverse like from the current user to the liked user
//     const reverseLike = await Like.findOne({
//       user1: currentUserId,
//       user2: likedUserId,
//       status: "pending", // Only create a match if there’s a pending like from both sides
//     });

//     if (!reverseLike) {
//       return res
//         .status(400)
//         .json({ message: "No pending like from your side to create a match" });
//     }

//     // Create a match (both users have liked each other)
//     const newMatch = new Match({
//       user1: currentUserId,
//       user2: likedUserId,
//       chatId: null, // Chat ID will be created later
//     });

//     await newMatch.save();

//     // Optionally, you can create a chat here (if you'd like the chat to be created automatically when a match is made)
//     const newChat = new Chat({
//       users: [currentUserId, likedUserId],
//       messages: [],
//     });

//     await newChat.save();

//     // Update the match with the chat ID
//     newMatch.chatId = newChat._id;
//     await newMatch.save();

//     res
//       .status(200)
//       .json({ message: "Match created successfully", match: newMatch });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while creating the match" });
//   }
// };

// // Reject a like (optional function for managing likes)
// export const rejectLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body; // The ID of the user whose like is being rejected
//     const currentUserId = req.user.userId; // The logged-in user's ID

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Find the like record
//     const like = await Like.findOne({
//       user1: likedUserId,
//       user2: currentUserId,
//       status: "pending", // Only reject if the like is pending
//     });

//     if (!like) {
//       return res
//         .status(400)
//         .json({ message: "No pending like found from this user" });
//     }

//     // Remove the like record or mark it as rejected
//     await like.remove(); // You could alternatively update the status to "rejected" if preferred.

//     res.status(200).json({ message: "Like rejected successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while rejecting the like" });
//   }
// };

// // Export the functions that need to be used in routes
// export const createMatch = async (req, res) => {
//   try {
//     const { user1, user2 } = req.body;

//     // Create a new match
//     const newMatch = new Match({
//       user1,
//       user2,
//       chatId: null, // Chat ID will be created later
//     });

//     await newMatch.save();

//     // Optionally, create a chat here for the match
//     const newChat = new Chat({
//       users: [user1, user2],
//       messages: [],
//     });

//     await newChat.save();

//     // Update the match with the chat ID
//     newMatch.chatId = newChat._id;
//     await newMatch.save();

//     res
//       .status(200)
//       .json({ message: "Match created successfully", match: newMatch });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while creating the match" });
//   }
// };

// export const getMatches = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     // Fetch all matches for the logged-in user
//     const matches = await Match.find({
//       $or: [{ user1: userId }, { user2: userId }],
//     }).populate("user1 user2", "username");

//     if (!matches) {
//       return res.status(404).json({ message: "No matches found" });
//     }

//     res.status(200).json({ matches });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching the matches" });
//   }
// };

// import Like from "../models/Like.js";
// import Match from "../models/Match.js";
// import Chat from "../models/Chat.js";

// // Accept a like and create a match
// export const acceptLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body;
//     const currentUserId = req.user.userId;

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Find the like from the liked user to current user
//     const incomingLike = await Like.findOne({
//       fromUser: likedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     if (!incomingLike) {
//       return res
//         .status(400)
//         .json({ message: "No pending like from this user" });
//     }

//     // Update the incoming like to 'matched'
//     incomingLike.status = "matched";
//     await incomingLike.save();

//     // Find reverse like from current user to liked user
//     let reverseLike = await Like.findOne({
//       fromUser: currentUserId,
//       toUser: likedUserId,
//     });

//     // Create reverse like if not exists
//     if (!reverseLike) {
//       reverseLike = new Like({
//         fromUser: currentUserId,
//         toUser: likedUserId,
//         status: "matched",
//       });
//     } else {
//       reverseLike.status = "matched";
//     }
//     await reverseLike.save();

//     // Check if a match already exists
//     const existingMatch = await Match.findOne({
//       $or: [
//         { user1: currentUserId, user2: likedUserId },
//         { user1: likedUserId, user2: currentUserId },
//       ],
//     });

//     if (existingMatch) {
//       return res
//         .status(200)
//         .json({ message: "Already matched", match: existingMatch });
//     }

//     // Create a new chat
//     const newChat = new Chat({
//       users: [currentUserId, likedUserId],
//       messages: [],
//     });
//     await newChat.save();

//     // Create new match
//     const newMatch = new Match({
//       user1: currentUserId,
//       user2: likedUserId,
//       chatId: newChat._id,
//     });

//     await newMatch.save();

//     res
//       .status(200)
//       .json({ message: "Match created successfully", match: newMatch });
//   } catch (error) {
//     console.error("Error in acceptLike:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while creating the match" });
//   }
// };

// // Reject a like
// export const rejectLike = async (req, res) => {
//   try {
//     const { likedUserId } = req.body;
//     const currentUserId = req.user.userId;

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     const like = await Like.findOneAndDelete({
//       fromUser: likedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     if (!like) {
//       return res
//         .status(404)
//         .json({ message: "No pending like found from this user" });
//     }

//     res.status(200).json({ message: "Like rejected successfully" });
//   } catch (error) {
//     console.error("Error in rejectLike:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while rejecting the like" });
//   }
// };

// // Manually create a match (used for testing or admin tools)
// export const createMatch = async (req, res) => {
//   try {
//     const { user1, user2 } = req.body;

//     if (!user1 || !user2) {
//       return res.status(400).json({ message: "Both user IDs are required" });
//     }

//     const existingMatch = await Match.findOne({
//       $or: [
//         { user1, user2 },
//         { user1: user2, user2: user1 },
//       ],
//     });

//     if (existingMatch) {
//       return res.status(400).json({ message: "Match already exists" });
//     }

//     const newChat = new Chat({
//       users: [user1, user2],
//       messages: [],
//     });
//     await newChat.save();

//     const newMatch = new Match({
//       user1,
//       user2,
//       chatId: newChat._id,
//     });

//     await newMatch.save();

//     res
//       .status(200)
//       .json({ message: "Match created successfully", match: newMatch });
//   } catch (error) {
//     console.error("Error in createMatch:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while creating the match" });
//   }
// };

// // Get all matches for a user
// export const getMatches = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     const matches = await Match.find({
//       $or: [{ user1: userId }, { user2: userId }],
//     })
//       .populate("user1", "_id name photos city area")
//       .populate("user2", "_id name photos city area")
//       .populate("chatId");

//     if (!matches.length) {
//       return res.status(404).json({ message: "No matches found" });
//     }

//     res.status(200).json({ matches });
//   } catch (error) {
//     console.error("Error in getMatches:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching the matches" });
//   }
// };

import Like from "../models/Like.js";
import Match from "../models/Match.js";
import Chat from "../models/Chat.js";

// Accept a like and create a match
export const acceptLike = async (req, res) => {
  try {
    const { likedUserId } = req.body;
    const currentUserId = req.user._id;

    if (!likedUserId) {
      return res.status(400).json({ message: "Liked user ID is required" });
    }

    // Find the like from the liked user to current user
    const incomingLike = await Like.findOne({
      fromUser: likedUserId,
      toUser: currentUserId,
      status: "pending",
    });

    if (!incomingLike) {
      return res
        .status(400)
        .json({ message: "No pending like from this user" });
    }

    // Update the incoming like to 'matched'
    incomingLike.status = "matched";
    await incomingLike.save();

    // Find reverse like from current user to liked user
    let reverseLike = await Like.findOne({
      fromUser: currentUserId,
      toUser: likedUserId,
    });

    // Create reverse like if not exists
    if (!reverseLike) {
      reverseLike = new Like({
        fromUser: currentUserId,
        toUser: likedUserId,
        status: "matched",
      });
    } else {
      reverseLike.status = "matched";
    }
    await reverseLike.save();

    // Check if a match already exists
    const existingMatch = await Match.findOne({
      $or: [
        { user1: currentUserId, user2: likedUserId },
        { user1: likedUserId, user2: currentUserId },
      ],
    });

    if (existingMatch) {
      return res
        .status(200)
        .json({ message: "Already matched", match: existingMatch });
    }

    // Create a new chat
    const newChat = new Chat({
      users: [currentUserId, likedUserId],
      messages: [],
    });
    await newChat.save();

    // Create new match
    const newMatch = new Match({
      user1: currentUserId,
      user2: likedUserId,
      chatId: newChat._id,
    });

    await newMatch.save();

    res
      .status(200)
      .json({ message: "Match created successfully", match: newMatch });
  } catch (error) {
    console.error("Error in acceptLike:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating the match" });
  }
};

// Manually create a match (used for testing or admin tools)
export const createMatch = async (req, res) => {
  try {
    const { user1, user2 } = req.body;

    if (!user1 || !user2) {
      return res.status(400).json({ message: "Both user IDs are required" });
    }

    const existingMatch = await Match.findOne({
      $or: [
        { user1, user2 },
        { user1: user2, user2: user1 },
      ],
    });

    if (existingMatch) {
      return res.status(400).json({ message: "Match already exists" });
    }

    const newChat = new Chat({
      users: [user1, user2],
      messages: [],
    });
    await newChat.save();

    const newMatch = new Match({
      user1,
      user2,
      chatId: newChat._id,
    });

    await newMatch.save();

    res
      .status(200)
      .json({ message: "Match created successfully", match: newMatch });
  } catch (error) {
    console.error("Error in createMatch:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating the match" });
  }
};

// Get all matches for a user
// export const getMatches = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     const matches = await Match.find({
//       $or: [{ user1: userId }, { user2: userId }],
//     })
//       .populate("user1", "_id name photos city area")
//       .populate("user2", "_id name photos city area")
//       .populate("chatId");

//     if (!matches.length) {
//       return res.status(404).json({ message: "No matches found" });
//     }

//     res.status(200).json({ matches });
//   } catch (error) {
//     console.error("Error in getMatches:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while fetching the matches" });
//   }
// };
export const getMatches = async (req, res) => {
  try {
    const userId = req.user._id; // <- Check what this actually is

    console.log("=== DEBUG GETMATCHES ===");
    console.log("req.user:", req.user);
    console.log("userId from req.user._id:", userId);

    const matches = await Match.find({
      $or: [{ user1: userId }, { user2: userId }],
    })
      .populate("user1", "_id name photos city area")
      .populate("user2", "_id name photos city area")
      .populate("chatId");

    console.log("Found matches:", matches.length);
    matches.forEach((match, index) => {
      console.log(`Match ${index}:`, {
        user1: match.user1._id,
        user2: match.user2._id,
        currentUser: userId,
      });
    });

    if (!matches.length) {
      return res.status(404).json({ message: "No matches found" });
    }

    res.status(200).json({ matches });
  } catch (error) {
    console.error("Error in getMatches:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching the matches" });
  }
};

export const getMatchByChatId = async (req, res) => {
  try {
    const { chatId } = req.params;
    const userId = req.user._id;

    // Find the match that contains this chat ID
    const match = await Match.findOne({ chatId: chatId })
      .populate("user1", "name photos city area lastActive")
      .populate("user2", "name photos city area lastActive")
      .populate({
        path: "chatId",
        populate: {
          path: "messages",
          model: "Message",
          options: { sort: { createdAt: 1 } },
        },
      });

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    // Check if the requesting user is part of this match
    if (!match.user1._id.equals(userId) && !match.user2._id.equals(userId)) {
      return res
        .status(403)
        .json({ message: "Unauthorized to access this match" });
    }

    res.status(200).json({ match });
  } catch (error) {
    console.error("Error in getMatchByChatId:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching the match" });
  }
};
