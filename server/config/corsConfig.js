// middlewares/corsConfig.js

const corsConfig = (req, res, next) => {
  // Allow requests from your frontend
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");

  // Allow specific headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Allow specific HTTP methods
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
};

export default corsConfig;
