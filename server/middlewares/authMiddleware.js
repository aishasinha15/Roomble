// // middleware/authMiddleware.js

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// // JWT secret key - should be in environment variables in production
// const JWT_SECRET = process.env.JWT_SECRET || "roomble-super-secret-key";

// /**
//  * Authentication middleware to protect routes
//  * Verifies the JWT token from the request header and attaches the user ID to the request object
//  */
// const protect = async (req, res, next) => {
//   try {
//     let token;

//     // Get token from Authorization header
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       // Format: "Bearer [token]"
//       token = req.headers.authorization.split(" ")[1];
//     }

//     // Check if token exists
//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Not authorized, no token provided",
//       });
//     }

//     try {
//       // Verify token
//       const decoded = jwt.verify(token, JWT_SECRET);

//       // Attach user to request object
//       req.user = decoded.user;

//       // Check if user exists in database
//       const userExists = await User.findById(decoded.user.id).select(
//         "-password"
//       );
//       if (!userExists) {
//         return res.status(401).json({
//           success: false,
//           message: "User associated with this token no longer exists",
//         });
//       }

//       next();
//     } catch (error) {
//       if (error.name === "TokenExpiredError") {
//         return res.status(401).json({
//           success: false,
//           message: "Token expired",
//         });
//       }

//       return res.status(401).json({
//         success: false,
//         message: "Not authorized, invalid token",
//       });
//     }
//   } catch (error) {
//     console.error("Auth middleware error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// /**
//  * Optional auth middleware
//  * Verifies the token if present but doesn't reject the request if no token is provided
//  * Useful for routes that can work for both authenticated and non-authenticated users
//  */
// const optionalAuth = async (req, res, next) => {
//   try {
//     let token;

//     // Get token from Authorization header
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       // Format: "Bearer [token]"
//       token = req.headers.authorization.split(" ")[1];

//       try {
//         // Verify token
//         const decoded = jwt.verify(token, JWT_SECRET);

//         // Attach user to request object
//         req.user = decoded.user;

//         // Check if user exists in database
//         const userExists = await User.findById(decoded.user.id).select(
//           "-password"
//         );
//         if (!userExists) {
//           req.user = null;
//         }
//       } catch (error) {
//         // If token verification fails, set user to null
//         req.user = null;
//       }
//     } else {
//       // No token provided
//       req.user = null;
//     }

//     next();
//   } catch (error) {
//     console.error("Optional auth middleware error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// module.exports = { protect, optionalAuth };

// middlewares/authMiddleware.js

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({ message: "Authentication token is missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user data to the request object
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// export default authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Verify the token
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded; // Add the decoded user info to the request object
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res
//         .status(401)
//         .json({ message: "Invalid or expired token", error: error.message });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res
//       .status(500)
//       .json({
//         message: "Server error in authentication",
//         error: error.message,
//       });
//   }
// };

// export default authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("---- Auth Middleware Start ----");

//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     console.log("Auth header present:", !!authHeader);

//     if (!authHeader) {
//       console.log("No authorization header found");
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       console.log("Invalid token format - not a Bearer token");
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     console.log("Token extracted:", !!token);

//     if (!token) {
//       console.log("No token found after Bearer prefix");
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Check for JWT_SECRET
//     if (!process.env.JWT_SECRET) {
//       console.log("JWT_SECRET environment variable is not set");
//       return res.status(500).json({ message: "Server configuration error" });
//     }

//     // Verify the token
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Token verified successfully. User data:", decoded);

//       if (!decoded.userId) {
//         console.log("Token is valid but doesn't contain userId");
//         return res
//           .status(401)
//           .json({ message: "Invalid token structure: missing userId" });
//       }

//       req.user = {
//         _id: decoded.userId, // Map userId ➔ _id
//         ...decoded,
//       };

//       console.log("User added to request:", req.user);
//       console.log("---- Auth Middleware End ----");
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res.status(401).json({
//         message: "Invalid or expired token",
//         error: error.message,
//       });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(500).json({
//       message: "Server error in authentication",
//       error: error.message,
//     });
//   }
// };

// export default authMiddleware;

//middlewares/authMiddleware.js
// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("---- Auth Middleware Start ----");

//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     console.log("Auth header present:", !!authHeader);

//     if (!authHeader) {
//       console.log("No authorization header found");
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       console.log("Invalid token format - not a Bearer token");
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     console.log("Token extracted:", !!token);

//     if (!token) {
//       console.log("No token found after Bearer prefix");
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Check for JWT_SECRET
//     if (!process.env.JWT_SECRET) {
//       console.log("JWT_SECRET environment variable is not set");
//       return res.status(500).json({ message: "Server configuration error" });
//     }

//     // Verify the token
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Token verified successfully. User data:", decoded);

//       if (!decoded.userId) {
//         console.log("Token is valid but doesn't contain userId");
//         return res
//           .status(401)
//           .json({ message: "Invalid token structure: missing userId" });
//       }

//       req.user = {
//         _id: decoded.userId, // Map userId ➔ _id
//         ...decoded,
//       };

//       console.log("User added to request:", req.user);
//       console.log("---- Auth Middleware End ----");
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res.status(401).json({
//         message: "Invalid or expired token",
//         error: error.message,
//       });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(500).json({
//       message: "Server error in authentication",
//       error: error.message,
//     });
//   }
// };

// export default authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("---- Auth Middleware Start ----");

//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     console.log("Auth header present:", !!authHeader);

//     if (!authHeader) {
//       console.log("No authorization header found");
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       console.log("Invalid token format - not a Bearer token");
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     console.log("Token extracted:", !!token);

//     if (!token) {
//       console.log("No token found after Bearer prefix");
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Set JWT secret key with fallback
//     const JWT_SECRET = process.env.JWT_SECRET || "roomble-super-secret-key";

//     // Verify the token
//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
//       console.log("Token verified successfully. User data:", decoded);

//       // Match the structure from authController which uses user.id
//       if (!decoded.user || !decoded.user.id) {
//         console.log("Token is valid but doesn't contain user.id");
//         return res
//           .status(401)
//           .json({ message: "Invalid token structure: missing user.id" });
//       }

//       // Set req.user to match what the controller functions expect
//       req.user = {
//         id: decoded.user.id, // This structure matches what getCurrentUser expects
//       };

//       console.log("User added to request:", req.user);
//       console.log("---- Auth Middleware End ----");
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res.status(401).json({
//         message: "Invalid or expired token",
//         error: error.message,
//       });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(500).json({
//       message: "Server error in authentication",
//       error: error.message,
//     });
//   }
// };

// export default authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("---- Auth Middleware Start ----");

//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     console.log("Auth header present:", !!authHeader);

//     if (!authHeader) {
//       console.log("No authorization header found");
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       console.log("Invalid token format - not a Bearer token");
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     console.log("Token extracted:", !!token);

//     if (!token) {
//       console.log("No token found after Bearer prefix");
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Check for JWT_SECRET
//     if (!process.env.JWT_SECRET) {
//       console.log("JWT_SECRET environment variable is not set");
//       return res.status(500).json({ message: "Server configuration error" });
//     }

//     // Verify the token
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Token verified successfully. User data:", decoded);

//       if (!decoded.userId) {
//         console.log("Token is valid but doesn't contain userId");
//         return res
//           .status(401)
//           .json({ message: "Invalid token structure: missing userId" });
//       }

//       req.user = {
//         _id: decoded.userId,
//         ...decoded,
//       };

//       console.log("User added to request:", req.user);
//       console.log("---- Auth Middleware End ----");
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res.status(401).json({
//         message: "Invalid or expired token",
//         error: error.message,
//       });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(500).json({
//       message: "Server error in authentication",
//       error: error.message,
//     });
//   }
// };

// export default authMiddleware;

// import jwt from "jsonwebtoken";

// const JWT_SECRET = "roomble-super-secret-key";
// const JWT_EXPIRES_IN = "7d"; // Token expiry time

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("---- Auth Middleware Start ----");

//     // Get the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     console.log("Auth header present:", !!authHeader);

//     if (!authHeader) {
//       console.log("No authorization header found");
//       return res
//         .status(401)
//         .json({ message: "No authorization token provided" });
//     }

//     // Check if it's a Bearer token
//     if (!authHeader.startsWith("Bearer ")) {
//       console.log("Invalid token format - not a Bearer token");
//       return res.status(401).json({ message: "Invalid token format" });
//     }

//     // Extract the token
//     const token = authHeader.split(" ")[1];
//     console.log("Token extracted:", !!token);

//     if (!token) {
//       console.log("No token found after Bearer prefix");
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // Check for JWT_SECRET
//     if (!JWT_SECRET) {
//       console.log("JWT_SECRET environment variable is not set");
//       return res.status(500).json({ message: "Server configuration error" });
//     }

//     // Verify the token
//     console.log("JWT_SECRET at verify time:", JWT_SECRET);

//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
//       console.log("Token verified successfully. User data:", decoded);

//       if (!decoded.userId || !decoded.id) {
//         console.log("Token is valid but doesn't contain userId or id");
//         return res.status(401).json({
//           message: "Invalid token structure: missing user identifier",
//         });
//       }

//       // Handle both id and userId formats
//       // req.user = {
//       //   _id: decoded.userId || decoded.id, // Use either userId or id
//       //   ...decoded,
//       // };

//       req.user = {
//         _id: decoded.user.id, // Access the id inside the user object
//         ...decoded,
//       };

//       console.log("User added to request:", req.user);
//       console.log("---- Auth Middleware End ----");
//       next(); // Continue to the next middleware or route handler
//     } catch (error) {
//       console.error("JWT Verification Error:", error);
//       return res.status(401).json({
//         message: "Invalid or expired token",
//         error: error.message,
//       });
//     }
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(500).json({
//       message: "Server error in authentication",
//       error: error.message,
//     });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const JWT_SECRET = "roomble-super-secret-key"; // You might be using dotenv for the secret

const authMiddleware = (req, res, next) => {
  try {
    console.log("---- Auth Middleware Start ----");

    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    console.log("Auth header present:", !!authHeader);

    if (!authHeader) {
      console.log("No authorization header found");
      return res
        .status(401)
        .json({ message: "No authorization token provided" });
    }

    // Check if it's a Bearer token
    if (!authHeader.startsWith("Bearer ")) {
      console.log("Invalid token format - not a Bearer token");
      return res.status(401).json({ message: "Invalid token format" });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];
    console.log("Token extracted:", !!token);

    if (!token) {
      console.log("No token found after Bearer prefix");
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify the token
    console.log("JWT_SECRET at verify time:", JWT_SECRET);

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("Token verified successfully. User data:", decoded);

      // Correctly extract the user ID from the token
      if (!decoded.user || !decoded.user.id) {
        console.log("Token is valid but doesn't contain user.id");
        return res.status(401).json({
          message: "Invalid token structure: missing user identifier",
        });
      }

      // Add the user data to the request
      req.user = {
        _id: decoded.user.id, // Access user.id
        ...decoded,
      };

      console.log("User added to request:", req.user);
      console.log("---- Auth Middleware End ----");
      next(); // Continue to the next middleware or route handler
    } catch (error) {
      console.error("JWT Verification Error:", error);
      return res.status(401).json({
        message: "Invalid or expired token",
        error: error.message,
      });
    }
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(500).json({
      message: "Server error in authentication",
      error: error.message,
    });
  }
};

export default authMiddleware;
