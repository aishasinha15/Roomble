// import Like from "../models/Like.js";
// import User from "../models/User.js";

// // Get the logged-in user's profile
// export const getUserProfile = async (req, res) => {
//   try {
//     // Add detailed logging
//     console.log("Auth user data:", req.user);

//     if (!req.user || !req.user._id) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     const userId = req.user._id; // The logged-in user's ID
//     console.log("Looking up profile for userId:", userId);

//     try {
//       const userProfile = await User.findOne({ _id: userId });
//       console.log(
//         "Profile lookup result:",
//         userProfile ? "Found" : "Not found"
//       );

//       if (!userProfile) {
//         return res.status(404).json({ message: "User profile not found" });
//       }

//       res.status(200).json({ profile: userProfile });
//     } catch (dbError) {
//       console.error("Database error:", dbError);
//       res.status(500).json({
//         message: "Database error while fetching the profile",
//         error: dbError.message,
//       });
//     }
//   } catch (error) {
//     console.error("getUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the profile",
//       error: error.message,
//     });
//   }
// };

// // Update the logged-in user's profile
// export const updateUserProfile = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id; // The logged-in user's ID
//     const profileData = req.body;

//     // Check if profile exists first
//     const existingProfile = await User.findOne({ _id: userId });

//     let updatedProfile;

//     if (existingProfile) {
//       // Update existing profile
//       updatedProfile = await User.findOneAndUpdate(
//         { _id: userId },
//         { ...profileData },
//         { new: true }
//       );
//     } else {
//       // Create new profile if it doesn't exist
//       updatedProfile = await User.create({
//         _id: userId,
//         ...profileData,
//       });
//     }

//     res.status(200).json({
//       message: existingProfile
//         ? "Profile updated successfully"
//         : "Profile created successfully",
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     console.error("updateUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while updating the profile",
//       error: error.message,
//     });
//   }
// };

// // Get the likes of the logged-in user
// export const getLikes = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id; // The logged-in user's ID

//     const likes = await Like.find({ user1: userId }).populate(
//       "user2",
//       "username"
//     );

//     if (!likes || likes.length === 0) {
//       return res.status(404).json({ message: "No likes found" });
//     }

//     res.status(200).json({ likes });
//   } catch (error) {
//     console.error("getLikes error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the likes",
//       error: error.message,
//     });
//   }
// };

// // Discover new profiles (function to explore other users)
// export const discoverProfiles = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id; // The logged-in user's ID

//     // Assuming you want to exclude the logged-in user's profile
//     const profiles = await User.find({ _id: { $ne: userId } });

//     if (!profiles || profiles.length === 0) {
//       return res.status(404).json({ message: "No profiles found" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

// import Like from "../models/Like.js";
// import User from "../models/User.js";
// import { v2 as cloudinary } from "cloudinary";

// // Get the logged-in user's profile
// export const getUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);

//     if (!req.user || !req.user._id) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     const userId = req.user._id;
//     console.log("Looking up profile for userId:", userId);

//     try {
//       const userProfile = await User.findOne({ _id: userId });
//       console.log(
//         "Profile lookup result:",
//         userProfile ? "Found" : "Not found"
//       );

//       if (!userProfile) {
//         return res.status(404).json({ message: "User profile not found" });
//       }

//       res.status(200).json({ profile: userProfile });
//     } catch (dbError) {
//       console.error("Database error:", dbError);
//       res.status(500).json({
//         message: "Database error while fetching the profile",
//         error: dbError.message,
//       });
//     }
//   } catch (error) {
//     console.error("getUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the profile",
//       error: error.message,
//     });
//   }
// };

// // Update the logged-in user's profile
// export const updateUserProfile = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;
//     const profileData = req.body;

//     // Handle photo uploads
//     let uploadedPhotos = [];
//     if (profileData.photos && profileData.photos.length > 0) {
//       for (const photo of profileData.photos) {
//         const uploadResponse = await cloudinary.uploader.upload(photo, {
//           folder: "user_photos",
//         });
//         uploadedPhotos.push(uploadResponse.secure_url);
//       }
//     }

//     // Set the first uploaded photo as profilePicture
//     if (uploadedPhotos.length > 0) {
//       profileData.profilePicture = uploadedPhotos[0];
//       profileData.photos = uploadedPhotos;
//     }

//     const existingProfile = await User.findOne({ _id: userId });

//     let updatedProfile;

//     if (existingProfile) {
//       updatedProfile = await User.findOneAndUpdate(
//         { _id: userId },
//         { ...profileData },
//         { new: true }
//       );
//     } else {
//       updatedProfile = await User.create({
//         _id: userId,
//         ...profileData,
//       });
//     }

//     res.status(200).json({
//       message: existingProfile
//         ? "Profile updated successfully"
//         : "Profile created successfully",
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     console.error("updateUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while updating the profile",
//       error: error.message,
//     });
//   }
// };

// // Get the likes of the logged-in user
// export const getLikes = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;

//     const likes = await Like.find({ user1: userId }).populate(
//       "user2",
//       "username"
//     );

//     if (!likes || likes.length === 0) {
//       return res.status(404).json({ message: "No likes found" });
//     }

//     res.status(200).json({ likes });
//   } catch (error) {
//     console.error("getLikes error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the likes",
//       error: error.message,
//     });
//   }
// };

// // Discover new profiles (function to explore other users)
// export const discoverProfiles = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;

//     const profiles = await User.find({ _id: { $ne: userId } });

//     if (!profiles || profiles.length === 0) {
//       return res.status(404).json({ message: "No profiles found" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

// import Like from "../models/Like.js";
// import User from "../models/User.js";
// import fs from "fs";
// import path from "path";

// // Get the logged-in user's profile
// export const getUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);

//     if (!req.user || !req.user._id) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     const userId = req.user._id;
//     console.log("Looking up profile for userId:", userId);

//     try {
//       const userProfile = await User.findOne({ _id: userId });
//       console.log(
//         "Profile lookup result:",
//         userProfile ? "Found" : "Not found"
//       );

//       if (!userProfile) {
//         return res.status(404).json({ message: "User profile not found" });
//       }

//       res.status(200).json({ profile: userProfile });
//     } catch (dbError) {
//       console.error("Database error:", dbError);
//       res.status(500).json({
//         message: "Database error while fetching the profile",
//         error: dbError.message,
//       });
//     }
//   } catch (error) {
//     console.error("getUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the profile",
//       error: error.message,
//     });
//   }
// };

// // Update the logged-in user's profile
// export const updateUserProfile = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;
//     const profileData = req.body;

//     // Handle photo uploads
//     let uploadedPhotos = [];
//     if (req.files && req.files.length > 0) {
//       uploadedPhotos = req.files.map((file) => {
//         return file.path.replace(/\\/g, "/"); // Ensure URL-friendly path
//       });
//     }

//     // Set the first uploaded photo as profilePicture
//     if (uploadedPhotos.length > 0) {
//       profileData.profilePicture = uploadedPhotos[0];
//       profileData.photos = uploadedPhotos;
//     }

//     const existingProfile = await User.findOne({ _id: userId });

//     let updatedProfile;

//     if (existingProfile) {
//       updatedProfile = await User.findOneAndUpdate(
//         { _id: userId },
//         { ...profileData },
//         { new: true }
//       );
//     } else {
//       updatedProfile = await User.create({
//         _id: userId,
//         ...profileData,
//       });
//     }

//     res.status(200).json({
//       message: existingProfile
//         ? "Profile updated successfully"
//         : "Profile created successfully",
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     console.error("updateUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while updating the profile",
//       error: error.message,
//     });
//   }
// };

// // Get the likes of the logged-in user
// export const getLikes = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;

//     const likes = await Like.find({ user1: userId }).populate(
//       "user2",
//       "username"
//     );

//     if (!likes || likes.length === 0) {
//       return res.status(404).json({ message: "No likes found" });
//     }

//     res.status(200).json({ likes });
//   } catch (error) {
//     console.error("getLikes error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the likes",
//       error: error.message,
//     });
//   }
// };

// // Discover new profiles (function to explore other users)
// export const discoverProfiles = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

// const userId = req.user._id;

// const profiles = await User.find({ _id: { $ne: userId } });

//     if (!profiles || profiles.length === 0) {
//       return res.status(404).json({ message: "No profiles found" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

// Get the logged-in user's profile

// export const getUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);

//     if (!req.user || (!req.user._id && !req.user.id)) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     // Use _id if available, otherwise use id
//     const userId = req.user._id || req.user.id;
//     console.log("Looking up profile for userId:", userId);

//     try {
//       // Try to find by either _id or id
//       let userProfile = await User.findOne({ _id: userId });

//       // If not found by _id, try by id field
//       if (!userProfile && req.user.id) {
//         userProfile = await User.findOne({ id: req.user.id });
//       }

//       console.log(
//         "Profile lookup result:",
//         userProfile ? "Found" : "Not found"
//       );

//       if (!userProfile) {
//         return res.status(404).json({
//           message: "User profile not found",
//           debug: { searchedId: userId },
//         });
//       }

//       res.status(200).json({ profile: userProfile });
//     } catch (dbError) {
//       console.error("Database error:", dbError);
//       res.status(500).json({
//         message: "Database error while fetching the profile",
//         error: dbError.message,
//       });
//     }
//   } catch (error) {
//     console.error("getUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the profile",
//       error: error.message,
//     });
//   }
// };

// export const getUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);

// if (!req.user || (!req.user._id && !req.user.id)) {
//   return res.status(400).json({
//     message: "User ID not found in token",
//     debug: { user: req.user },
//   });
// }

//     // Use _id if available, otherwise use id
//     const userId = req.user._id || req.user.id;
//     console.log("Looking up profile for userId:", userId);

//     // Try to find the user profile by _id or fallback to id
//     let userProfile = await User.findOne({ _id: userId });

//     if (!userProfile && req.user.id) {
//       userProfile = await User.findOne({ id: req.user.id });
//     }

//     console.log("Profile lookup result:", userProfile ? "Found" : "Not found");

//     if (!userProfile) {
//       return res.status(404).json({
//         message: "User profile not found",
//         debug: { searchedId: userId },
//       });
//     }

//     res.status(200).json({ profile: userProfile });
//   } catch (error) {
//     console.error("getUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while fetching the profile",
//       error: error.message,
//     });
//   }
// };

import Like from "../models/Like.js";
import User from "../models/User.js";
import fs from "fs";
import path from "path";
import Match from "../models/Match.js";

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id; // Get ID from URL params

    // Validate the ID
    if (!req.user || (!req.user._id && !req.user.id)) {
      return res.status(400).json({
        message: "User ID not found in token",
        debug: { user: req.user },
      });
    }

    const userProfile = await User.findById(userId)
      .select("-password") // Exclude sensitive data
      .lean(); // Convert to plain JS object

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    // Convert photo paths to absolute URLs if they're stored as relative paths
    if (userProfile.photos && userProfile.photos.length > 0) {
      userProfile.photos = userProfile.photos.map((photo) => {
        if (photo.startsWith("/uploads/")) {
          return `${process.env.BASE_URL || "http://localhost:5001"}${photo}`;
        }
        return photo;
      });
    }

    res.status(200).json({ profile: userProfile });
  } catch (error) {
    console.error("getUserProfile error:", error);
    res.status(500).json({
      message: "Error fetching profile",
      error: error.message,
    });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    console.log("Auth user data:", req.user);
    console.log("Request body:", req.body);
    console.log("Uploaded files:", req.files);

    if (!req.user || (!req.user._id && !req.user.id)) {
      return res.status(400).json({
        message: "User ID not found in token",
        debug: { user: req.user },
      });
    }

    const userId = req.user._id || req.user.id;
    const profileData = { ...req.body };

    // Parse fields that might be stringified JSON
    ["livingWith", "selectedPrompts"].forEach((field) => {
      if (profileData[field] && typeof profileData[field] === "string") {
        try {
          profileData[field] = JSON.parse(profileData[field]);
        } catch (err) {
          console.error(`Failed to parse ${field}:`, err);
        }
      }
    });

    if (
      profileData.promptAnswers &&
      typeof profileData.promptAnswers === "string"
    ) {
      try {
        profileData.promptAnswers = JSON.parse(profileData.promptAnswers);
      } catch (err) {
        console.error("Failed to parse promptAnswers:", err);
      }
    }

    // Handle existing photos (from URLs in the database)
    let existingPhotos = [];
    if (req.body.existingPhotos) {
      // Handle both array and single value cases
      if (Array.isArray(req.body.existingPhotos)) {
        existingPhotos = req.body.existingPhotos;
      } else {
        existingPhotos = [req.body.existingPhotos];
      }

      // Convert relative URLs to just the paths
      existingPhotos = existingPhotos.map((photo) => {
        // If it's a full URL from our server, extract just the path part
        if (photo.startsWith("http://localhost:5001/")) {
          return photo.replace("http://localhost:5001", "");
        }
        return photo;
      });
    }

    // Handle new uploaded files
    let uploadedPhotos = [];
    if (req.files && req.files.length > 0) {
      uploadedPhotos = req.files.map(
        (file) => `/uploads/${path.basename(file.path)}`
      );
    }

    // Handle new photos from URLs (if any)
    let photoUrlsArray = [];
    if (req.body.photoUrls) {
      // Handle both array and single value cases
      if (Array.isArray(req.body.photoUrls)) {
        photoUrlsArray = req.body.photoUrls;
      } else {
        photoUrlsArray = [req.body.photoUrls];
      }
    }

    // Combine all photos: existing photos first, then new uploads, then URLs
    const allPhotos = [...existingPhotos, ...uploadedPhotos, ...photoUrlsArray];

    // Set the profile picture to the first photo if available
    if (allPhotos.length > 0) {
      profileData.profilePicture = allPhotos[0];
    }

    // Set all photos
    profileData.photos = allPhotos;

    // Find the user profile
    let existingProfile = await User.findOne({ _id: userId });

    // Update or create profile
    let updatedProfile;
    if (existingProfile) {
      updatedProfile = await User.findOneAndUpdate(
        { _id: userId },
        { $set: profileData },
        { new: true }
      );
    } else {
      updatedProfile = await User.create({
        _id: userId,
        ...profileData,
      });
    }

    res.status(200).json({
      message: existingProfile
        ? "Profile updated successfully"
        : "Profile created successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    console.error("updateUserProfile error:", error);
    res.status(500).json({
      message: "Something went wrong while updating the profile",
      error: error.message,
    });
  }
};

// export const updateUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     if (!req.user || (!req.user._id && !req.user.id)) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     const userId = req.user._id || req.user.id;
//     const profileData = { ...req.body };

//     // Parse fields that might be stringified JSON
//     ["livingWith", "selectedPrompts"].forEach((field) => {
//       if (profileData[field] && typeof profileData[field] === "string") {
//         try {
//           profileData[field] = JSON.parse(profileData[field]);
//         } catch (err) {
//           console.error(`Failed to parse ${field}:`, err);
//         }
//       }
//     });

//     if (
//       profileData.promptAnswers &&
//       typeof profileData.promptAnswers === "string"
//     ) {
//       try {
//         profileData.promptAnswers = JSON.parse(profileData.promptAnswers);
//       } catch (err) {
//         console.error("Failed to parse promptAnswers:", err);
//       }
//     }

//     // Handle uploaded photos
//     let uploadedPhotos = [];
//     if (req.files && req.files.length > 0) {
//       uploadedPhotos = req.files.map(
//         (file) => `/uploads/${path.basename(file.path)}`
//       );
//     }

//     // Attach photo paths to profileData
//     if (uploadedPhotos.length > 0) {
//       profileData.profilePicture = uploadedPhotos[0];
//       profileData.photos = uploadedPhotos;
//     }

//     // Find the user profile
//     let existingProfile = await User.findOne({ _id: userId });

//     // Update or create profile
//     let updatedProfile;
//     if (existingProfile) {
//       updatedProfile = await User.findOneAndUpdate(
//         { _id: userId },
//         { $set: profileData },
//         { new: true }
//       );
//     } else {
//       updatedProfile = await User.create({
//         _id: userId,
//         ...profileData,
//       });
//     }

//     res.status(200).json({
//       message: existingProfile
//         ? "Profile updated successfully"
//         : "Profile created successfully",
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     console.error("updateUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while updating the profile",
//       error: error.message,
//     });
//   }
// };

// Update the logged-in user's profile

// export const updateUserProfile = async (req, res) => {
//   try {
//     console.log("Auth user data:", req.user);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     if (!req.user || (!req.user._id && !req.user.id)) {
//       return res.status(400).json({
//         message: "User ID not found in token",
//         debug: { user: req.user },
//       });
//     }

//     const userId = req.user._id || req.user.id;
//     const profileData = req.body;

//     // Handle uploaded photos
//     let uploadedPhotos = [];
//     if (req.files && req.files.length > 0) {
//       uploadedPhotos = req.files.map(
//         (file) => `/uploads/${path.basename(file.path)}`
//       );
//     }

//     // Attach photo paths to profileData
//     if (uploadedPhotos.length > 0) {
//       profileData.profilePicture = uploadedPhotos[0];
//       profileData.photos = uploadedPhotos;
//     }

//     // Find the user profile
//     let existingProfile = await User.findOne({ _id: userId });

//     // Update or create profile
//     let updatedProfile;
//     if (existingProfile) {
//       updatedProfile = await User.findOneAndUpdate(
//         { _id: userId },
//         { $set: profileData },
//         { new: true }
//       );
//     } else {
//       updatedProfile = await User.create({
//         _id: userId,
//         ...profileData,
//       });
//     }

//     res.status(200).json({
//       message: existingProfile
//         ? "Profile updated successfully"
//         : "Profile created successfully",
//       profile: updatedProfile,
//     });
//   } catch (error) {
//     console.error("updateUserProfile error:", error);
//     res.status(500).json({
//       message: "Something went wrong while updating the profile",
//       error: error.message,
//     });
//   }
// };

// Get the likes of the logged-in user
export const getLikes = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(400).json({ message: "User ID not found in token" });
    }

    const userId = req.user._id;

    const likes = await Like.find({ user1: userId }).populate(
      "user2",
      "username"
    );

    if (!likes || likes.length === 0) {
      return res.status(404).json({ message: "No likes found" });
    }

    res.status(200).json({ likes });
  } catch (error) {
    console.error("getLikes error:", error);
    res.status(500).json({
      message: "Something went wrong while fetching the likes",
      error: error.message,
    });
  }
};

// // Discover new profiles (function to explore other users)
// export const discoverProfiles = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     const userId = req.user._id;

//     const profiles = await User.find({ _id: { $ne: userId } });

//     if (!profiles || profiles.length === 0) {
//       return res.status(404).json({ message: "No profiles found" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

// export const discoverProfiles = async (req, res) => {
//   try {
//     const currentUserId = req.user.userId;

//     // Step 1: Get IDs of users the current user has already matched with
//     const matchedUsers = await Match.find({
//       $or: [{ user1: currentUserId }, { user2: currentUserId }],
//     });

//     const matchedUserIds = matchedUsers.map((match) =>
//       match.user1.toString() === currentUserId
//         ? match.user2.toString()
//         : match.user1.toString()
//     );

//     // Step 2: Get IDs of users the current user has liked
//     const likedUsers = await Like.find({
//       user1: currentUserId,
//     });

//     const likedUserIds = likedUsers.map((like) => like.user2.toString());

//     // Step 3: Combine all excluded IDs
//     const excludedUserIds = [
//       ...new Set([...matchedUserIds, ...likedUserIds, currentUserId]),
//     ];

//     // Step 4: Find users not in the excluded list
//     const profiles = await User.find({
//       _id: { $nin: excludedUserIds },
//     }); // Optional: limit number of results

//     if (!profiles.length) {
//       return res.status(404).json({ message: "No new profiles to discover" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

// export const discoverProfiles = async (req, res) => {
//   try {
//     const currentUserId = req.user.userId;

//     // Step 1: Get IDs of users the current user has already matched with
//     const matchedUsers = await Match.find({
//       $or: [{ user1: currentUserId }, { user2: currentUserId }],
//     });

//     const matchedUserIds = matchedUsers.map((match) =>
//       match.user1.toString() === currentUserId
//         ? match.user2.toString()
//         : match.user1.toString()
//     );

//     // Step 2: Get IDs of users the current user has already interacted with (liked)
//     const sentLikes = await Like.find({
//       fromUser: currentUserId,
//     });

//     const likedUserIds = sentLikes.map((like) => like.toUser.toString());

//     // Step 3: Combine all excluded IDs
//     const excludedUserIds = [
//       ...new Set([...matchedUserIds, ...likedUserIds, currentUserId]),
//     ];

//     // Step 4: Find users not in the excluded list
//     const profiles = await User.find({
//       _id: { $nin: excludedUserIds },
//     }).select(
//       "_id name age occupation city area photos promptAnswers livingPreference lookingFor"
//     );

//     if (!profiles.length) {
//       return res.status(404).json({ message: "No new profiles to discover" });
//     }

//     res.status(200).json({ profiles });
//   } catch (error) {
//     console.error("discoverProfiles error:", error);
//     res.status(500).json({
//       message: "Something went wrong while discovering profiles",
//       error: error.message,
//     });
//   }
// };

export const discoverProfiles = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    // Step 1: Get IDs of users the current user has already matched with
    const matchedUsers = await Match.find({
      $or: [{ user1: currentUserId }, { user2: currentUserId }],
    });

    const matchedUserIds = matchedUsers.map((match) =>
      match.user1.toString() === currentUserId
        ? match.user2.toString()
        : match.user1.toString()
    );

    // Step 2: Get IDs of users the current user has already interacted with (liked)
    const sentLikes = await Like.find({
      fromUser: currentUserId,
    });

    const likedUserIds = sentLikes.map((like) => like.toUser.toString());

    // Step 3: Combine all excluded IDs
    const excludedUserIds = [
      ...new Set([...matchedUserIds, ...likedUserIds, currentUserId]),
    ];

    // Make sure current user is in the excluded list
    if (!excludedUserIds.includes(currentUserId)) {
      excludedUserIds.push(currentUserId);
    }

    // Step 4: Find users not in the excluded list
    const profiles = await User.find({
      _id: { $nin: excludedUserIds },
    }).select(
      "_id name age occupation city area photos promptAnswers livingPreference lookingFor"
    );

    if (!profiles.length) {
      return res.status(404).json({ message: "No new profiles to discover" });
    }

    res.status(200).json({ profiles });
  } catch (error) {
    console.error("discoverProfiles error:", error);
    res.status(500).json({
      message: "Something went wrong while discovering profiles",
      error: error.message,
    });
  }
};
