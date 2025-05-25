// import Like from "../models/Like.js";
// import User from "../models/User.js";
// import Match from "../models/Match.js";

// // Like a profile
// export const likeProfile = async (req, res) => {
//   try {
//     const { likedUserId } = req.body; // The ID of the user being liked
//     const currentUserId = req.user.userId; // Get the current user's ID from the JWT token

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     // Check if the current user has already liked the profile
//     const existingLike = await Like.findOne({
//       $or: [
//         { fromUser: currentUserId, toUser: likedUserId },
//         { fromUser: likedUserId, toUser: currentUserId },
//       ],
//     });

//     if (existingLike) {
//       return res
//         .status(400)
//         .json({ message: "You have already liked or crossed this profile" });
//     }

//     // Create a new like relationship (Pending state)
//     const newLike = new Like({
//       fromUser: currentUserId,
//       toUser: likedUserId,
//       status: "pending", // Status is pending until a match occurs
//     });

//     await newLike.save();

//     // Check if the liked user has already liked the current user (mutual like)
//     const reverseLike = await Like.findOne({
//       fromUser: likedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     if (reverseLike) {
//       // If there's a mutual like, update both likes to matched status
//       reverseLike.status = "matched";
//       await reverseLike.save();

//       newLike.status = "matched";
//       await newLike.save();

//       // Create a match record
//       const newMatch = new Match({
//         user1: currentUserId,
//         user2: likedUserId,
//         chatId: null, // Chat ID will be created later
//       });

//       await newMatch.save();

//       return res.status(200).json({ message: "Match created successfully" });
//     }

//     res.status(200).json({ message: "Profile liked successfully" });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while liking the profile" });
//   }
// };

// // Get profiles that have liked the current user
// export const getLikes = async (req, res) => {
//   try {
//     const currentUserId = req.user.userId;

//     // Find all likes where the current user is the recipient and status is pending
//     const receivedLikes = await Like.find({
//       toUser: currentUserId,
//       status: "pending",
//     }).populate({
//       path: "fromUser",
//       select:
//         "_id name age occupation city area photos promptAnswers livingPreference lookingFor createdAt",
//     });

//     // Transform the data to match the expected format in the frontend
//     const likes = receivedLikes.map((like) => {
//       const profile = like.fromUser;
//       return {
//         _id: profile._id,
//         name: profile.name,
//         age: profile.age,
//         occupation: profile.occupation,
//         city: profile.city,
//         area: profile.area,
//         photos: profile.photos,
//         promptAnswers: profile.promptAnswers,
//         livingPreference: profile.livingPreference,
//         lookingFor: profile.lookingFor,
//         createdAt: like.createdAt,
//       };
//     });

//     res.status(200).json({ likes });
//   } catch (error) {
//     console.error("Error fetching likes:", error);
//     res.status(500).json({ message: "Failed to fetch likes" });
//   }
// };

// // Reject a like (optional functionality)
// export const rejectLike = async (req, res) => {
//   try {
//     const { rejectedUserId } = req.body;
//     const currentUserId = req.user.userId;

//     if (!rejectedUserId) {
//       return res.status(400).json({ message: "Rejected user ID is required" });
//     }

//     // Find and delete the like
//     await Like.findOneAndDelete({
//       fromUser: rejectedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     res.status(200).json({ message: "Like rejected successfully" });
//   } catch (error) {
//     console.error("Error rejecting like:", error);
//     res.status(500).json({ message: "Failed to reject like" });
//   }
// };

// controllers/likeController.js

// import Like from "../models/Like.js";
// import User from "../models/User.js";
// import Match from "../models/Match.js";

// // Like a profile
// export const likeProfile = async (req, res) => {
//   try {
//     const { likedUserId } = req.body;
//     const currentUserId = req.user.userId;

//     if (!likedUserId) {
//       return res.status(400).json({ message: "Liked user ID is required" });
//     }

//     if (likedUserId === currentUserId) {
//       return res.status(400).json({ message: "You cannot like yourself" });
//     }

//     // Check if the current user already liked this profile
//     const existingLike = await Like.findOne({
//       fromUser: currentUserId,
//       toUser: likedUserId,
//     });

//     if (existingLike) {
//       return res.status(400).json({
//         message: "You've already liked this profile",
//       });
//     }

//     // Create a new like
//     const newLike = new Like({
//       fromUser: currentUserId,
//       toUser: likedUserId,
//       status: "pending",
//     });

//     await newLike.save();

//     // Check for mutual like (reverse like)
//     const reverseLike = await Like.findOne({
//       fromUser: likedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     if (reverseLike) {
//       // Check if match already exists (edge case)
//       const existingMatch = await Match.findOne({
//         $or: [
//           { user1: currentUserId, user2: likedUserId },
//           { user1: likedUserId, user2: currentUserId },
//         ],
//       });

//       if (!existingMatch) {
//         reverseLike.status = "matched";
//         await reverseLike.save();

//         newLike.status = "matched";
//         await newLike.save();

//         const newMatch = new Match({
//           user1: currentUserId,
//           user2: likedUserId,
//           chatId: null, // Optionally create Chat here
//         });

//         await newMatch.save();
//       }

//       return res.status(200).json({ message: "It's a match!" });
//     }

//     res.status(200).json({ message: "Profile liked successfully" });
//   } catch (error) {
//     console.error("Error in likeProfile:", error);
//     res
//       .status(500)
//       .json({ message: "Something went wrong while liking the profile" });
//   }
// };

// // Get likes received by the current user
// export const getLikes = async (req, res) => {
//   try {
//     const currentUserId = req.user.userId;

//     const receivedLikes = await Like.find({
//       toUser: currentUserId,
//       status: "pending",
//     }).populate({
//       path: "fromUser",
//       select:
//         "_id name age occupation city area photos promptAnswers livingPreference lookingFor createdAt",
//     });

//     const likes = receivedLikes.map((like) => {
//       const profile = like.fromUser;
//       return {
//         _id: profile._id,
//         name: profile.name,
//         age: profile.age,
//         occupation: profile.occupation,
//         city: profile.city,
//         area: profile.area,
//         photos: profile.photos,
//         promptAnswers: profile.promptAnswers,
//         livingPreference: profile.livingPreference,
//         lookingFor: profile.lookingFor,
//         createdAt: like.createdAt,
//       };
//     });

//     res.status(200).json({ likes });
//   } catch (error) {
//     console.error("Error in getLikes:", error);
//     res.status(500).json({ message: "Failed to fetch likes" });
//   }
// };

// // Reject a like
// export const rejectLike = async (req, res) => {
//   try {
//     const { rejectedUserId } = req.body;
//     const currentUserId = req.user.userId;

//     if (!rejectedUserId) {
//       return res.status(400).json({ message: "Rejected user ID is required" });
//     }

//     const deletedLike = await Like.findOneAndDelete({
//       fromUser: rejectedUserId,
//       toUser: currentUserId,
//       status: "pending",
//     });

//     if (!deletedLike) {
//       return res.status(404).json({ message: "Like not found" });
//     }

//     res.status(200).json({ message: "Like rejected successfully" });
//   } catch (error) {
//     console.error("Error in rejectLike:", error);
//     res.status(500).json({ message: "Failed to reject like" });
//   }
// };

import Like from "../models/Like.js";
import User from "../models/User.js";
import Match from "../models/Match.js";
import Chat from "../models/Chat.js";

// Like a profile
export const likeProfile = async (req, res) => {
  try {
    const { likedUserId } = req.body;
    const currentUserId = req.user._id;

    if (!likedUserId) {
      return res.status(400).json({ message: "Liked user ID is required" });
    }

    if (likedUserId === currentUserId) {
      return res.status(400).json({ message: "You cannot like yourself" });
    }

    // Check if the current user already liked this profile
    const existingLike = await Like.findOne({
      fromUser: currentUserId,
      toUser: likedUserId,
    });

    if (existingLike) {
      return res.status(400).json({
        message: "You've already liked this profile",
      });
    }

    // Create a new like
    const newLike = new Like({
      fromUser: currentUserId,
      toUser: likedUserId,
      status: "pending",
    });

    await newLike.save();

    // Check for mutual like (reverse like)
    const reverseLike = await Like.findOne({
      fromUser: likedUserId,
      toUser: currentUserId,
      status: "pending",
    });

    if (reverseLike) {
      // Check if match already exists (edge case)
      const existingMatch = await Match.findOne({
        $or: [
          { user1: currentUserId, user2: likedUserId },
          { user1: likedUserId, user2: currentUserId },
        ],
      });

      if (!existingMatch) {
        // Update both likes to "matched" status
        reverseLike.status = "matched";
        await reverseLike.save();

        newLike.status = "matched";
        await newLike.save();

        // Create a new chat for the match
        const newChat = new Chat({
          users: [currentUserId, likedUserId],
          messages: [],
        });
        await newChat.save();

        // Create the match with the chatId
        const newMatch = new Match({
          user1: currentUserId,
          user2: likedUserId,
          chatId: newChat._id,
        });

        await newMatch.save();
      }

      return res.status(200).json({ message: "It's a match!" });
    }

    res.status(200).json({ message: "Profile liked successfully" });
  } catch (error) {
    console.error("Error in likeProfile:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while liking the profile" });
  }
};

// Get likes received by the current user
export const getLikes = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    const receivedLikes = await Like.find({
      toUser: currentUserId,
      status: "pending",
    }).populate({
      path: "fromUser",
      select:
        "_id name age occupation city area photos promptAnswers livingPreference lookingFor createdAt",
    });

    const likes = receivedLikes.map((like) => {
      const profile = like.fromUser;
      return {
        _id: profile._id,
        name: profile.name,
        age: profile.age,
        occupation: profile.occupation,
        city: profile.city,
        area: profile.area,
        photos: profile.photos,
        promptAnswers: profile.promptAnswers,
        livingPreference: profile.livingPreference,
        lookingFor: profile.lookingFor,
        createdAt: like.createdAt,
      };
    });

    res.status(200).json({ likes });
  } catch (error) {
    console.error("Error in getLikes:", error);
    res.status(500).json({ message: "Failed to fetch likes" });
  }
};

// Reject a like
export const rejectLike = async (req, res) => {
  try {
    const { rejectedUserId } = req.body;
    const currentUserId = req.user._id;

    if (!rejectedUserId) {
      return res.status(400).json({ message: "Rejected user ID is required" });
    }

    const deletedLike = await Like.findOneAndDelete({
      fromUser: rejectedUserId,
      toUser: currentUserId,
      status: "pending",
    });

    if (!deletedLike) {
      return res.status(404).json({ message: "Like not found" });
    }

    res.status(200).json({ message: "Like rejected successfully" });
  } catch (error) {
    console.error("Error in rejectLike:", error);
    res.status(500).json({ message: "Failed to reject like" });
  }
};
