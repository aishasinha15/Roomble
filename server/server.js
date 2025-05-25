// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes); // Protect chat routes
// app.use("/api/match", authMiddleware, matchRoutes); // Protect match routes
// app.use("/api/profile", profileRoutes); // Protect profile routes
// app.use("/api/messages", authMiddleware, messageRoutes); // Protect message routes

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port
// const PORT = process.env.PORT || 8080;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes); // Protect chat routes
// app.use("/api/match", authMiddleware, matchRoutes); // Protect match routes
// app.use("/api/profile", authMiddleware, profileRoutes); // Added authMiddleware to protect all profile routes
// app.use("/api/messages", authMiddleware, messageRoutes); // Protect message routes

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port
// const PORT = process.env.PORT || 8080;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend origin
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes);
// app.use("/api/match", authMiddleware, matchRoutes);
// app.use("/api/profile", profileRoutes); // We'll handle auth in profileRoutes.js
// app.use("/api/messages", authMiddleware, messageRoutes);

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port - explicitly set to 5001
// const PORT = process.env.PORT || 5001;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// import authMiddleware from "./middlewares/authMiddleware.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend origin
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes);
// app.use("/api/match", authMiddleware, matchRoutes);
// app.use("/api/profile", authMiddleware, profileRoutes); // Apply authMiddleware here
// app.use("/api/messages", authMiddleware, messageRoutes);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port - explicitly set to 5001
// const PORT = process.env.PORT || 5001;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2";
import session from "express-session"; // Add this import
import cookieParser from "cookie-parser"; // Add this import
import axios from "axios"; // You'll need to install this: npm install axios
import crypto from "crypto";
import qs from "querystring";
import twilio from "twilio";
import express from "express";
import nodemailer from "nodemailer";
import randomstring from "randomstring";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import authMiddleware from "./middlewares/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const twilioClient = require("twilio")(accountSid, authToken);
const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(express.json());
app.use(cookieParser()); // Add cookie parser

// Configure session middleware - MUST be before passport initialization
app.use(
  session({
    secret:
      process.env.SESSION_SECRET || "your-secret-key-change-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//mobile-otp
const otpStorage = new Map();

function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // Make sure the number starts with a country code (add +1 for US if not present)
  if (digitsOnly.length === 10) {
    return "+1" + digitsOnly; // US number format
  } else if (digitsOnly.startsWith("1") && digitsOnly.length === 11) {
    return "+" + digitsOnly;
  } else if (digitsOnly.startsWith("+")) {
    return digitsOnly;
  } else {
    // Add country code logic for other regions as needed
    return "+" + digitsOnly; // Default: just add + if no other format matches
  }
}

function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post("/api/send-otp", async (req, res) => {
  try {
    const { mobile } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(mobile);

    // Generate a new verification code
    const verificationCode = generateRandomCode();

    // Store the code with the phone number (with a 10-minute expiry)
    const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes from now
    otpStorage.set(formattedPhoneNumber, {
      code: verificationCode,
      expiry: expiryTime,
    });

    // Log the verification code for debugging
    console.log(
      `Sending verification code ${verificationCode} to ${formattedPhoneNumber}`
    );

    try {
      // Send SMS
      await twilioClient.messages.create({
        body: `Your verification code is: ${verificationCode}`,
        from: process.env.TWILIO_PHONE_NUMBER || "+18444361959", // Use config value if available
        to: formattedPhoneNumber,
      });
      console.log("SMS sent successfully");

      res.status(200).json({
        success: true,
        message: "Verification code sent successfully",
      });
    } catch (twilioError) {
      console.error("Twilio SMS sending error:", twilioError);
      // Return the specific Twilio error for better debugging
      return res.status(400).json({
        success: false,
        error: "Failed to send SMS",
        details: twilioError.message,
      });
    }
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

// Verify OTP route - standalone verification
app.post("/api/verify-otp", async (req, res) => {
  try {
    const { mobile, verificationCode } = req.body;
    const formattedPhoneNumber = formatPhoneNumber(mobile);

    console.log(
      `Attempting to verify code ${verificationCode} for ${formattedPhoneNumber}`
    );

    // Get the stored OTP information
    const otpInfo = otpStorage.get(formattedPhoneNumber);

    if (!otpInfo) {
      return res.status(400).json({
        success: false,
        error: "No verification code found for this number or code has expired",
      });
    }

    // Check if the code has expired
    if (Date.now() > otpInfo.expiry) {
      // Remove expired code
      otpStorage.delete(formattedPhoneNumber);

      return res.status(400).json({
        success: false,
        error: "Verification code has expired. Please request a new one.",
      });
    }

    // Check if the code matches
    if (otpInfo.code === verificationCode) {
      // Remove the code after successful verification
      otpStorage.delete(formattedPhoneNumber);

      res.status(200).json({
        success: true,
        message: "Verification successful",
        isVerified: true,
      });
    } else {
      console.log("Verification code does not match");
      res.status(400).json({
        success: false,
        error: "Verification code is incorrect",
      });
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Check if there's an active OTP for a given number
app.get("/api/otp-status/:mobile", async (req, res) => {
  const { mobile } = req.params;
  const formattedPhoneNumber = formatPhoneNumber(mobile);

  // Check if there's an active OTP for this number
  const otpInfo = otpStorage.get(formattedPhoneNumber);

  if (otpInfo && Date.now() <= otpInfo.expiry) {
    return res.status(200).json({
      success: true,
      message: "Verification code is active",
      hasActiveCode: true,
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "No active verification code",
      hasActiveCode: false,
    });
  }
});

//email-otp
const otpCacheEmail = {};

function generateOTPEmail() {
  return randomstring.generate({ length: 4, charset: "numeric" });
}

function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: "aishasinha316@gmail.com", // Your sending email address
    to: email,
    subject: "OTP Verification",
    text: `Your OTP for verification is: ${otp}`,
  };

  // Create transporter with correct credentials
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "aishasinha316@gmail.com", // Replace with your actual Gmail address
      pass: "gbpngdiabkopbzin", // Replace with your app password (not your Gmail password)
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error);
    } else {
      console.log("OTP Email sent successfully:", info.response);
    }
  });
}

app.post("/api/reqOTPEmail", (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTPEmail();
    otpCacheEmail[email] = otp; // Store OTP in cache

    console.log(otpCacheEmail);
    // Send OTP via email
    sendOTPEmail(email, otp);
    res.cookie("otpCache", otpCacheEmail, { maxAge: 30000, httpOnly: true });
    console.log("OTP sent");

    // Send response back to client
    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in reqOTPEmail:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

app.post("/api/verifyOTPEmail", (req, res) => {
  const { email, otp } = req.body;

  // Check if email exists in the cache
  if (!otpCacheEmail.hasOwnProperty(email)) {
    return res.status(400).json({ message: "Email not found" });
  }

  // Check if OTP matches the one stored in the cache
  if (otpCacheEmail[email] === otp.trim()) {
    // Remove OTP from cache after successful verification
    delete otpCacheEmail[email];
    return (
      res.status(200).json({ message: "OTP verified" }) &&
      console.log("OTP verified")
    );
  } else {
    return (
      res.status(200).json({ message: "Invalid OTP" }) &&
      console.log("Invalid OTP")
    );
  }
});

//linkedin-verification
// For storing verification tokens temporarily
const linkedInVerificationCache = {};

// Function to exchange code for access token
const getLinkedInAccessToken = async (code) => {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    client_id: process.env.LINKEDIN_CLIENT_ID,
    client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    redirect_uri: "http://localhost:5001/api/linkedin/callback",
  });

  const response = await fetch(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    }
  );

  if (!response.ok) {
    throw new Error(
      `LinkedIn token error: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
};

// Function to verify user exists on LinkedIn
const verifyLinkedInUser = async (accessToken) => {
  const response = await fetch("https://api.linkedin.com/v2/userinfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `LinkedIn API error: ${response.status} ${response.statusText}`
    );
  }

  // Just check if we can get user data
  const userData = await response.json();
  return !!userData.sub; // Return true if user exists
};

// LinkedIn verification callback
app.get("/api/linkedin/callback", async (req, res) => {
  try {
    const { code, state } = req.query;

    if (!code) {
      return res.redirect(
        "http://localhost:5173/signup?linkedin=failed&error=No_authorization_code"
      );
    }

    // The state parameter contains the unique identifier
    if (!state) {
      return res.redirect(
        "http://localhost:5173/signup?linkedin=failed&error=Missing_state"
      );
    }

    // Get access token
    const tokenData = await getLinkedInAccessToken(code);

    if (!tokenData || !tokenData.access_token) {
      return res.redirect(
        "http://localhost:5173/signup?linkedin=failed&error=Invalid_token"
      );
    }

    // Verify user exists on LinkedIn
    const exists = await verifyLinkedInUser(tokenData.access_token);

    if (!exists) {
      return res.redirect(
        "http://localhost:5173/signup?linkedin=failed&error=Verification_failed"
      );
    }

    // Store verification in cache with state as key
    linkedInVerificationCache[state] = {
      verified: true,
      timestamp: Date.now(),
    };

    // Redirect back to signup page with success
    return res.redirect(
      `http://localhost:5173/signup?linkedin=verified&state=${state}`
    );
  } catch (error) {
    console.error("LinkedIn verification error:", error);
    return res.redirect(
      `http://localhost:5173/signup?linkedin=failed&error=${encodeURIComponent(
        error.message
      )}`
    );
  }
});

// Check LinkedIn verification status
app.post("/api/checkLinkedInVerification", (req, res) => {
  const { state } = req.body;

  if (!state || !linkedInVerificationCache[state]) {
    return res.status(400).json({
      verified: false,
      message: "No verification found",
    });
  }

  const verificationData = linkedInVerificationCache[state];

  // Check if verification is too old (1 hour)
  const oneHour = 60 * 60 * 1000;
  if (Date.now() - verificationData.timestamp > oneHour) {
    delete linkedInVerificationCache[state];
    return res.status(400).json({
      verified: false,
      message: "Verification expired",
    });
  }

  // Successfully verified
  return res.status(200).json({
    verified: true,
    message: "LinkedIn account verified",
  });
});

// Cleanup expired verifications periodically
setInterval(() => {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;

  Object.keys(linkedInVerificationCache).forEach((key) => {
    if (now - linkedInVerificationCache[key].timestamp > oneHour) {
      delete linkedInVerificationCache[key];
    }
  });
}, 15 * 60 * 1000); // Run every 15 minutes

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", authMiddleware, chatRoutes);
app.use("/api/match", authMiddleware, matchRoutes);
app.use("/api/profile", authMiddleware, profileRoutes); // Apply authMiddleware here
app.use("/api/messages", authMiddleware, messageRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error handling middleware
app.use(errorHandlerMiddleware);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Define server port - explicitly set to 5001
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// // Import Cloudinary config
// import cloudinary from "./config/cloudinaryConfig.js";

// // Import middlewares
// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend origin
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes);
// app.use("/api/match", authMiddleware, matchRoutes);
// app.use("/api/profile", authMiddleware, profileRoutes); // Apply authMiddleware here
// app.use("/api/messages", authMiddleware, messageRoutes);

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port - explicitly set to 5001
// const PORT = process.env.PORT || 5001;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// // Import Multer config
// import multer from "multer";
// import path from "path";

// // Import middlewares
// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();

// // Set up multer storage for file uploads
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/"); // Store files in the 'uploads' directory
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

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend origin
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes);
// app.use("/api/match", authMiddleware, matchRoutes);
// app.use("/api/profile", authMiddleware, profileRoutes); // Apply authMiddleware here
// app.use("/api/messages", authMiddleware, messageRoutes);

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port - explicitly set to 5001
// const PORT = process.env.PORT || 5001;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// // Import routes
// import authRoutes from "./routes/authRoutes.js";
// import chatRoutes from "./routes/chatRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";

// // Import middlewares
// import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
// import authMiddleware from "./middlewares/authMiddleware.js";

// dotenv.config();

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Set up multer storage for file uploads
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/"); // Store files in the 'uploads' directory
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

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend origin
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/chat", authMiddleware, chatRoutes);
// app.use("/api/match", authMiddleware, matchRoutes);
// app.use("/api/profile", authMiddleware, profileRoutes); // Apply authMiddleware here
// app.use("/api/messages", authMiddleware, messageRoutes);

// // Error handling middleware
// app.use(errorHandlerMiddleware);

// // MongoDB connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Define server port - explicitly set to 5001
// const PORT = process.env.PORT || 5001;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
