// controllers/authController.js

// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { validationResult } = require("express-validator");
// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // JWT secret key - should be in environment variables in production
// const JWT_SECRET = process.env.JWT_SECRET || "roomble-super-secret-key";
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User registration
//  * @route POST /api/auth/signup
//  * @access Public
//  */
// exports.signup = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       // Other optional fields can be destructured here
//     } = req.body;

//     // Check if user already exists with the same mobile or aadhar
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       // Initialize other fields with default values if needed
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     // Save user to database
//     await newUser.save();

//     // Generate JWT token
//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// exports.login = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { mobile, password } = req.body;

//     // Find user by mobile
//     const user = await User.findOne({ mobile });
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Create and return JWT token
//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Get current user profile
//  * @route GET /api/auth/me
//  * @access Private
//  */
// exports.getCurrentUser = async (req, res) => {
//   try {
//     // req.user is set by auth middleware
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Get current user error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Change password (when logged in)
//  * @route POST /api/auth/change-password
//  * @access Private
//  */
// exports.changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     // Find user by ID
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();

//     res.json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     console.error("Change password error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Logout - Client-side only (just clear the token)
//  * This is a helper endpoint that doesn't do anything on the server
//  * @route GET /api/auth/logout
//  * @access Public
//  */
// exports.logout = (req, res) => {
//   res.json({
//     success: true,
//     message: "Logout successful (token should be removed on client)",
//   });
// };

// /**
//  * Verify JWT token
//  * @route GET /api/auth/verify
//  * @access Private
//  */
// exports.verifyToken = (req, res) => {
//   // If middleware passes, token is valid
//   res.json({
//     success: true,
//     message: "Token is valid",
//     user: {
//       id: req.user.id,
//     },
//   });
// };

// authController.js (ESM version)

import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// JWT secret key - should be in environment variables in production
const JWT_SECRET = "roomble-super-secret-key";
const JWT_EXPIRES_IN = "7d"; // Token expiry time

/**
 * User registration
 * @route POST /api/auth/signup
 * @access Public
 */
// export const signup = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//     } = req.body;

//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     await newUser.save();

//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };
export const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    console.log("Received files:", req.files);
    console.log("Received body:", req.body);
    let photoUrls = [];
    if (req.files && req.files.length > 0) {
      photoUrls = req.files.map((file) => `/uploads/${file.filename}`);
    }

    const {
      name,
      age,
      gender,
      occupation,
      mobile,
      aadhar,
      email, // Added email field
      linkedin,
      dob,
      city,
      area,
      password,
      houseOwner, // Added house owner status
      livingWith, // Added living preferences
      lookingFor, // Added looking for preference
      selectedPrompts, // Added selected prompts
      promptAnswers, // Added prompt answers
    } = req.body;

    // Check if user exists by mobile
    const existingUserByMobile = await User.findOne({ mobile });
    if (existingUserByMobile) {
      return res.status(400).json({
        success: false,
        message: "User with this mobile number already exists",
      });
    }

    // Check if user exists by aadhar
    const existingUserByAadhar = await User.findOne({ aadhar });
    if (existingUserByAadhar) {
      return res.status(400).json({
        success: false,
        message: "User with this Aadhar number already exists",
      });
    }

    // Check if user exists by email
    if (email) {
      const existingUserByEmail = await User.findOne({ email });
      if (existingUserByEmail) {
        return res.status(400).json({
          success: false,
          message: "User with this email already exists",
        });
      }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // // Create new user with all fields
    // const newUser = new User({
    //   name,
    //   age,
    //   gender,
    //   occupation,
    //   mobile,
    //   aadhar,
    //   email,
    //   linkedin,
    //   dob: dob ? new Date(dob) : undefined,
    //   city,
    //   area,
    //   password: hashedPassword,
    //   photos: photos || [],
    //   houseOwner: houseOwner || false,
    //   livingWith: livingWith || [],
    //   lookingFor: lookingFor || "",
    //   selectedPrompts: selectedPrompts || [],
    //   promptAnswers: promptAnswers || {},
    // });

    // Parse promptAnswers if it's a string
    let parsedPromptAnswers = {};
    if (promptAnswers) {
      if (typeof promptAnswers === "string") {
        try {
          parsedPromptAnswers = JSON.parse(promptAnswers);
        } catch (error) {
          console.error("Error parsing promptAnswers:", error);
          return res.status(400).json({
            success: false,
            message: "Invalid promptAnswers format",
          });
        }
      } else {
        parsedPromptAnswers = promptAnswers;
      }
    }

    const newUser = new User({
      name,
      age,
      gender,
      occupation,
      mobile,
      aadhar,
      email,
      linkedin,
      dob: dob ? new Date(dob) : undefined,
      city,
      area,
      password: hashedPassword,
      photos: photoUrls || [],
      houseOwner: houseOwner || false,
      livingWith: livingWith || [],
      lookingFor: lookingFor || "",
      selectedPrompts: selectedPrompts || [],
      promptAnswers: parsedPromptAnswers,
    });

    await newUser.save();

    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({
          success: true,
          message: "User registered successfully",
          token,
          user: {
            id: newUser._id,
            name: newUser.name,
            mobile: newUser.mobile,
            email: newUser.email,
          },
        });
      }
    );
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// export const signup = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       email,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       houseOwner,
//       livingWith,
//       lookingFor,
//       selectedPrompts,
//       promptAnswers,
//     } = req.body;

//     // Check if user exists by mobile
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     // Check if user exists by aadhar
//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Check if user exists by email
//     if (email) {
//       const existingUserByEmail = await User.findOne({ email });
//       if (existingUserByEmail) {
//         return res.status(400).json({
//           success: false,
//           message: "User with this email already exists",
//         });
//       }
//     }

//     // Process uploaded photos
//     const photoUrls = [];
//     if (req.files && req.files.length > 0) {
//       req.files.forEach(file => {
//         // Generate URL for each photo (adjust the path as needed for your server setup)
//         const photoUrl = `/uploads/${file.filename}`;
//         photoUrls.push(photoUrl);
//       });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user with all fields
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       email,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       photos: photoUrls, // Save the photo URLs
//       houseOwner: houseOwner || false,
//       livingWith: livingWith || [],
//       lookingFor: lookingFor || "",
//       selectedPrompts: selectedPrompts || [],
//       promptAnswers: promptAnswers || {},
//     });

//     await newUser.save();

//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//             email: newUser.email,
//             photos: newUser.photos, // Include photos in response
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// Function to format phone number for Twilio
// function formatPhoneNumber(phoneNumber) {
//   // Remove any non-digit characters
//   const digitsOnly = phoneNumber.replace(/\D/g, "");

//   // Make sure the number starts with a country code (add +1 for US if not present)
//   // You may need to adjust this logic based on your target country codes
//   if (digitsOnly.length === 10) {
//     return "+1" + digitsOnly; // US number format
//   } else if (digitsOnly.startsWith("1") && digitsOnly.length === 11) {
//     return "+" + digitsOnly;
//   } else if (digitsOnly.startsWith("+")) {
//     return digitsOnly;
//   } else {
//     // Add country code logic for other regions as needed
//     return "+" + digitsOnly; // Default: just add + if no other format matches
//   }
// }

// export const signup = async (req, res) => {
//   try {
//     const formattedPhoneNumber = formatPhoneNumber(req.body.mobile);

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     // Parse and prepare the incoming data
//     let {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       email,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       houseOwner,
//       livingWith,
//       lookingFor,
//       selectedPrompts,
//       promptAnswers,
//       isVerified,
//       ...otherFields
//     } = req.body;

//     // Convert livingWith to proper array format
//     if (typeof livingWith === "string") {
//       try {
//         livingWith = JSON.parse(livingWith);
//       } catch (e) {
//         livingWith = [livingWith];
//       }
//     } else if (!Array.isArray(livingWith)) {
//       livingWith = [];
//     }

//     // Parse promptAnswers if it's a string
//     if (typeof promptAnswers === "string") {
//       try {
//         promptAnswers = JSON.parse(promptAnswers);
//       } catch (e) {
//         promptAnswers = {};
//       }
//     }

//     // Check for existing users
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     if (email) {
//       const existingUserByEmail = await User.findOne({ email });
//       if (existingUserByEmail) {
//         return res.status(400).json({
//           success: false,
//           message: "User with this email already exists",
//         });
//       }
//     }

//     // Process uploaded photos
//     const photoUrls = [];
//     if (req.files && req.files.length > 0) {
//       req.files.forEach((file) => {
//         photoUrls.push(`/uploads/${file.filename}`);
//       });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user with properly formatted data
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile: formattedPhoneNumber,
//       aadhar,
//       email,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       photos: photoUrls,
//       houseOwner: houseOwner || false,
//       livingWith: Array.isArray(livingWith) ? livingWith : [],
//       lookingFor: lookingFor || "",
//       selectedPrompts: Array.isArray(selectedPrompts) ? selectedPrompts : [],
//       promptAnswers:
//         promptAnswers && typeof promptAnswers === "object" ? promptAnswers : {},
//       isVerified: false, // Explicitly set initial verification status
//       ...otherFields,
//     });

//     const verificationCode = generateRandomCode();
//     // Log the verification code for debugging
//     console.log(
//       `Sending verification code ${verificationCode} to ${formattedPhoneNumber}`
//     );

//     try {
//       // Send SMS regardless of environment
//       await twilioClient.messages.create({
//         body: `Your verification code is: ${verificationCode}`,
//         from: config.twilioPhoneNumber || "+18444361959", // Use config value if available
//         to: formattedPhoneNumber,
//       });
//       console.log("SMS sent successfully");
//     } catch (twilioError) {
//       console.error("Twilio SMS sending error:", twilioError);
//       // Return the specific Twilio error for better debugging
//       return res.status(400).json({
//         error: "Failed to send SMS",
//         details: twilioError.message,
//       });
//     }

//     user.verificationCode = verificationCode;

//     await newUser.save();

//     // Create JWT token
//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) {
//           console.error("JWT signing error:", err);
//           throw err;
//         }
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           verificationCode: verificationCode,
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//             email: newUser.email,
//             photos: newUser.photos,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//       stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
//     });
//   }
// };

// export const verify = async (req, res) => {
//   try {
//     // Format the phone number for consistency with what's stored
//     const formattedPhoneNumber = formatPhoneNumber(req.body.mobile);
//     const verificationCode = req.body.verificationCode;

//     console.log(
//       `Attempting to verify code ${verificationCode} for ${formattedPhoneNumber}`
//     );

//     const user = await User.findOne({ phoneNumber: formattedPhoneNumber });
//     if (!user) {
//       console.log("User not found with phone number:", formattedPhoneNumber);
//       res.status(404).json({ error: "User not found" });
//       return;
//     }

//     console.log(
//       "Found user:",
//       user._id,
//       "Current verification status:",
//       user.isVerified
//     );
//     console.log(
//       "Stored code:",
//       user.verificationCode,
//       "Received code:",
//       verificationCode
//     );

//     if (user.verificationCode === verificationCode) {
//       // Update verification status
//       console.log("Verification code matches. Setting isVerified to true");

//       // Use findByIdAndUpdate to ensure the update happens
//       const updatedUser = await User.findByIdAndUpdate(
//         user._id,
//         { isVerified: true },
//         { new: true } // Return updated document
//       );

//       console.log(
//         "Updated user:",
//         updatedUser._id,
//         "New verification status:",
//         updatedUser.isVerified
//       );

//       res.status(200).json({
//         message: "Verification successful",
//         verified: updatedUser.isVerified,
//       });
//     } else {
//       console.log("Verification code does not match");
//       res.status(400).json({ error: "Verification code is incorrect" });
//     }
//   } catch (error) {
//     console.error("Verification error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// export const verifyPhone = async (req, res) => {
//   try {
//     const formattedPhoneNumber = formatPhoneNumber(req.params.phoneNumber);
//     const user = await User.findOne({ phoneNumber: formattedPhoneNumber });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json({
//       isVerified: user.isVerified,
//       phoneNumber: user.phoneNumber,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // Add a route to check verification status

// function generateRandomCode() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }
// Create a temporary storage for OTP codes
// In a production environment, this should use Redis or another appropriate storage solution
// For simplicity, we'll use an in-memory Map here

/**
 * User login
 * @route POST /api/auth/login
 * @access Public
 */
// export const login = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { mobile, password } = req.body;

//     const user = await User.findOne({ mobile });
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { identifier, password, identifierType } = req.body;

//     // Create query based on identifier type
//     let query = {};
//     switch (identifierType) {
//       case "email":
//         query = { email: identifier };
//         break;
//       case "mobile":
//         query = { mobile: identifier };
//         break;
//       case "linkedin":
//         query = { linkedin: identifier };
//         break;
//       case "aadhar":
//         query = { aadhar: identifier };
//         break;
//       default:
//         return res.status(400).json({
//           success: false,
//           message: "Invalid identifier type",
//         });
//     }

//     const user = await User.findOne(query);
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//             email: user.email,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { identifier, password, identifierType } = req.body;

//     // Create query based on identifier type
//     let query = {};
//     switch (identifierType) {
//       case "email":
//         query = { email: identifier };
//         break;
//       case "mobile":
//         query = { mobile: identifier };
//         break;
//       case "linkedin":
//         query = { linkedin: identifier };
//         break;
//       case "aadhar":
//         query = { aadhar: identifier };
//         break;
//       default:
//         return res.status(400).json({
//           success: false,
//           message: "Invalid identifier type",
//         });
//     }

//     const user = await User.findOne(query);
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             email: user.email,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { identifier, password, identifierType } = req.body;

    // Create query based on identifier type
    let query = {};
    switch (identifierType) {
      case "email":
        query = { email: identifier };
        break;
      case "mobile":
        query = { mobile: identifier };
        break;
      case "linkedin":
        query = { linkedin: identifier };
        break;
      case "aadhar":
        query = { aadhar: identifier };
        break;
      default:
        return res.status(400).json({
          success: false,
          message: "Invalid identifier type",
        });
    }

    const user = await User.findOne(query);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          message: "Login successful",
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
          },
        });
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

/**
 * Get current user profile
 * @route GET /api/auth/me
 * @access Private
 */
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

/**
 * Change password (when logged in)
 * @route POST /api/auth/change-password
 * @access Private
 */
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

/**
 * Logout - Client-side only
 * @route GET /api/auth/logout
 * @access Public
 */
export const logout = (req, res) => {
  res.json({
    success: true,
    message: "Logout successful (token should be removed on client)",
  });
};

/**
 * Verify JWT token
 * @route GET /api/auth/verify
 * @access Private
 */
export const verifyToken = (req, res) => {
  res.json({
    success: true,
    message: "Token is valid",
    user: {
      id: req.user.id,
    },
  });
};

// controllers/authController.js

// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // JWT secret key - should be in environment variables in production
// const JWT_SECRET = process.env.JWT_SECRET || "roomble-super-secret-key";
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User registration
//  * @route POST /api/auth/signup
//  * @access Public
//  */
// const signup = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       // Other optional fields can be destructured here
//     } = req.body;

//     // Check if user already exists with the same mobile or aadhar
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       // Initialize other fields with default values if needed
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     // Save user to database
//     await newUser.save();

//     // Generate JWT token
//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// const login = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { mobile, password } = req.body;

//     // Find user by mobile
//     const user = await User.findOne({ mobile });
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Create and return JWT token
//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Get current user profile
//  * @route GET /api/auth/me
//  * @access Private
//  */
// const getCurrentUser = async (req, res) => {
//   try {
//     // req.user is set by auth middleware
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Get current user error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Change password (when logged in)
//  * @route POST /api/auth/change-password
//  * @access Private
//  */
// const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     // Find user by ID
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();

//     res.json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     console.error("Change password error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Logout - Client-side only (just clear the token)
//  * This is a helper endpoint that doesn't do anything on the server
//  * @route GET /api/auth/logout
//  * @access Public
//  */
// const logout = (req, res) => {
//   res.json({
//     success: true,
//     message: "Logout successful (token should be removed on client)",
//   });
// };

// /**
//  * Verify JWT token
//  * @route GET /api/auth/verify
//  * @access Private
//  */
// const verifyToken = (req, res) => {
//   // If middleware passes, token is valid
//   res.json({
//     success: true,
//     message: "Token is valid",
//     user: {
//       id: req.user.id,
//     },
//   });
// };

// // Export all functions as named exports
// export { signup, login, getCurrentUser, changePassword, logout, verifyToken };

// controllers/authController.js

// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // JWT secret key - should be in environment variables in production
// const JWT_SECRET = process.env.JWT_SECRET || "roomble-super-secret-key";
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User registration
//  * @route POST /api/auth/signup
//  * @access Public
//  */
// const signup = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       // Other optional fields can be destructured here
//     } = req.body;

//     // Check if user already exists with the same mobile or aadhar
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       // Initialize other fields with default values if needed
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     // Save user to database
//     await newUser.save();

//     // Generate JWT token
//     const payload = {
//       user: {
//         id: newUser._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// const login = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { mobile, password } = req.body;

//     // Find user by mobile
//     const user = await User.findOne({ mobile });
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Create and return JWT token
//     const payload = {
//       user: {
//         id: user._id,
//       },
//     };

//     jwt.sign(
//       payload,
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Get current user profile
//  * @route GET /api/auth/me
//  * @access Private
//  */
// const getCurrentUser = async (req, res) => {
//   try {
//     // req.user is set by auth middleware
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Get current user error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Change password (when logged in)
//  * @route POST /api/auth/change-password
//  * @access Private
//  */
// const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     // Find user by ID
//     const user = await User.findById(req.user.id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();

//     res.json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     console.error("Change password error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Logout - Client-side only (just clear the token)
//  * This is a helper endpoint that doesn't do anything on the server
//  * @route GET /api/auth/logout
//  * @access Public
//  */
// const logout = (req, res) => {
//   res.json({
//     success: true,
//     message: "Logout successful (token should be removed on client)",
//   });
// };

// /**
//  * Verify JWT token
//  * @route GET /api/auth/verify
//  * @access Private
//  */
// const verifyToken = (req, res) => {
//   // If middleware passes, token is valid
//   res.json({
//     success: true,
//     message: "Token is valid",
//     user: {
//       id: req.user.id,
//     },
//   });
// };

// // Export all functions as named exports
// export { signup, login, getCurrentUser, changePassword, logout, verifyToken };

// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // Use the environment variable exclusively
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User registration
//  * @route POST /api/auth/signup
//  * @access Public
//  */
// const signup = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       // Other optional fields can be destructured here
//     } = req.body;

//     // Check if user already exists with the same mobile or aadhar
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       // Initialize other fields with default values if needed
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     // Save user to database
//     await newUser.save();

//     // Generate JWT token - FIXED to match middleware expectations
//     const payload = {
//       userId: newUser._id,
//       name: newUser.name,
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id,
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// const login = async (req, res) => {
//   try {
//     console.log("Login attempt with:", req.body);

//     // Validate request body
//     if (!req.body.mobile || !req.body.password) {
//       console.log("Missing mobile or password in request");
//       return res.status(400).json({
//         success: false,
//         message: "Mobile and password are required",
//       });
//     }

//     const { mobile, password } = req.body;

//     // Find user by mobile
//     const user = await User.findOne({ mobile });
//     if (!user) {
//       console.log("User not found for mobile:", mobile);
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Password mismatch for user:", user._id);
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Create and return JWT token - FIXED to match middleware expectations
//     const payload = {
//       userId: user._id,
//       name: user.name,
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         console.log("Login successful for user:", user._id);
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id,
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Get current user profile
//  * @route GET /api/auth/me
//  * @access Private
//  */
// const getCurrentUser = async (req, res) => {
//   try {
//     // req.user is set by auth middleware
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Get current user error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Change password (when logged in)
//  * @route POST /api/auth/change-password
//  * @access Private
//  */
// const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     // Find user by ID
//     const user = await User.findById(req.user._id); // FIXED: using _id instead of id
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();

//     res.json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     console.error("Change password error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Logout - Client-side only (just clear the token)
//  * This is a helper endpoint that doesn't do anything on the server
//  * @route GET /api/auth/logout
//  * @access Public
//  */
// const logout = (req, res) => {
//   res.json({
//     success: true,
//     message: "Logout successful (token should be removed on client)",
//   });
// };

// /**
//  * Verify JWT token
//  * @route GET /api/auth/verify
//  * @access Private
//  */
// const verifyToken = (req, res) => {
//   // If middleware passes, token is valid
//   res.json({
//     success: true,
//     message: "Token is valid",
//     user: {
//       id: req.user._id, // FIXED: using _id instead of id
//     },
//   });
// };

// // Export all functions as named exports
// export { signup, login, getCurrentUser, changePassword, logout, verifyToken };

// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // Use the environment variable exclusively
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// const login = async (req, res) => {
//   try {
//     console.log("Login attempt body:", JSON.stringify(req.body));

//     // Validate request body
//     if (!req.body.mobile || !req.body.password) {
//       console.log("Missing mobile or password in request");
//       return res.status(400).json({
//         success: false,
//         message: "Mobile and password are required",
//       });
//     }

//     const { mobile, password } = req.body;
//     console.log(`Attempting to find user with mobile: ${mobile}`);

//     // Find user by mobile
//     const user = await User.findOne({ mobile: mobile });
//     console.log("User found:", user ? `ID: ${user._id}` : "No user found");

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Verify password
//     console.log("Comparing passwords");
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password match:", isMatch);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Create and return JWT token
//     const payload = {
//       userId: user._id.toString(), // Convert ObjectId to string
//       name: user.name,
//     };

//     console.log("Creating token with payload:", JSON.stringify(payload));

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) {
//           console.error("JWT sign error:", err);
//           throw err;
//         }
//         console.log(
//           "Login successful, token created:",
//           token ? "Token exists" : "No token"
//         );
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id.toString(),
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// // Export login function only for testing
// export { login };

// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";

// // Use the environment variable exclusively
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// /**
//  * User registration
//  * @route POST /api/auth/signup
//  * @access Public
//  */
// const signup = async (req, res) => {
//   try {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const {
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob,
//       city,
//       area,
//       password,
//       // Other optional fields can be destructured here
//     } = req.body;

//     // Check if user already exists with the same mobile or aadhar
//     const existingUserByMobile = await User.findOne({ mobile });
//     if (existingUserByMobile) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this mobile number already exists",
//       });
//     }

//     const existingUserByAadhar = await User.findOne({ aadhar });
//     if (existingUserByAadhar) {
//       return res.status(400).json({
//         success: false,
//         message: "User with this Aadhar number already exists",
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({
//       name,
//       age,
//       gender,
//       occupation,
//       mobile,
//       aadhar,
//       linkedin,
//       dob: dob ? new Date(dob) : undefined,
//       city,
//       area,
//       password: hashedPassword,
//       // Initialize other fields with default values if needed
//       photos: [],
//       houseOwner: false,
//       livingWith: [],
//       selectedPrompts: [],
//       promptAnswers: {},
//     });

//     // Save user to database
//     await newUser.save();

//     // Generate JWT token - FIXED to match middleware expectations
//     const payload = {
//       userId: newUser._id.toString(), // Convert ObjectId to string
//       name: newUser.name,
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.status(201).json({
//           success: true,
//           message: "User registered successfully",
//           token,
//           user: {
//             id: newUser._id.toString(),
//             name: newUser.name,
//             mobile: newUser.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * User login
//  * @route POST /api/auth/login
//  * @access Public
//  */
// // const login = async (req, res) => {
// //   try {
// //     console.log("Login attempt with body:", JSON.stringify(req.body));

// //     // Check if body is empty or not an object
// //     if (!req.body || typeof req.body !== "object") {
// //       console.log("Request body is empty or invalid");
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid request format",
// //       });
// //     }

// //     // Validate request body
// //     if (!req.body.mobile || !req.body.password) {
// //       console.log("Missing mobile or password in request");
// //       return res.status(400).json({
// //         success: false,
// //         message: "Mobile and password are required",
// //       });
// //     }

// //     const { mobile, password } = req.body;
// //     console.log(`Looking for user with mobile: ${mobile}`);

// //     // Find user by mobile
// //     const user = await User.findOne({ mobile });

// //     if (!user) {
// //       console.log(`No user found with mobile: ${mobile}`);
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid credentials",
// //       });
// //     }

// //     console.log(`User found: ${user._id}`);

// //     // Verify password
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       console.log("Password does not match");
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid credentials",
// //       });
// //     }

// //     console.log("Password verified successfully");

// //     // Create and return JWT token - FIXED to match middleware expectations
// //     const payload = {
// //       userId: user._id.toString(), // Convert ObjectId to string
// //       name: user.name,
// //     };

// //     console.log("Creating token with payload:", JSON.stringify(payload));
// //     console.log(
// //       "Using JWT_SECRET:",
// //       process.env.JWT_SECRET ? "EXISTS" : "MISSING"
// //     );

// //     jwt.sign(
// //       payload,
// //       process.env.JWT_SECRET,
// //       { expiresIn: JWT_EXPIRES_IN },
// //       (err, token) => {
// //         if (err) {
// //           console.error("JWT sign error:", err);
// //           throw err;
// //         }

// //         console.log("Token generated successfully");
// //         res.json({
// //           success: true,
// //           message: "Login successful",
// //           token,
// //           user: {
// //             id: user._id.toString(),
// //             name: user.name,
// //             mobile: user.mobile,
// //           },
// //         });
// //       }
// //     );
// //   } catch (error) {
// //     console.error("Login error:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Server error",
// //       error: error.message,
// //     });
// //   }
// // };

// const login = async (req, res) => {
//   try {
//     const { identifier, password, identifierType } = req.body;

//     if (!identifier || !password || !identifierType) {
//       return res.status(400).json({
//         success: false,
//         message: "Identifier, password, and identifier type are required",
//       });
//     }

//     const validTypes = ["mobile", "aadhar", "email", "linkedin"];
//     if (!validTypes.includes(identifierType)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid identifier type",
//       });
//     }

//     // Build dynamic query
//     const query = {};
//     query[identifierType] = identifier;

//     const user = await User.findOne(query);

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     const payload = {
//       userId: user._id.toString(),
//       name: user.name,
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN },
//       (err, token) => {
//         if (err) throw err;
//         res.json({
//           success: true,
//           message: "Login successful",
//           token,
//           user: {
//             id: user._id.toString(),
//             name: user.name,
//             mobile: user.mobile,
//           },
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Get current user profile
//  * @route GET /api/auth/profile
//  * @access Private
//  */
// const getCurrentUser = async (req, res) => {
//   try {
//     // req.user is set by auth middleware
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     console.error("Get current user error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Change password (when logged in)
//  * @route POST /api/auth/change-password
//  * @access Private
//  */
// const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     // Find user by ID
//     const user = await User.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Verify current password
//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     // Hash new password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     await user.save();

//     res.json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     console.error("Change password error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Logout - Client-side only (just clear the token)
//  * This is a helper endpoint that doesn't do anything on the server
//  * @route GET /api/auth/logout
//  * @access Public
//  */
// const logout = (req, res) => {
//   res.json({
//     success: true,
//     message: "Logout successful (token should be removed on client)",
//   });
// };

// /**
//  * Verify JWT token
//  * @route GET /api/auth/verify
//  * @access Private
//  */
// const verifyToken = (req, res) => {
//   // If middleware passes, token is valid
//   res.json({
//     success: true,
//     message: "Token is valid",
//     user: {
//       id: req.user._id.toString(), // Convert ObjectId to string
//     },
//   });
// };

// // Export all functions as named exports
// export { signup, login, getCurrentUser, changePassword, logout, verifyToken };
