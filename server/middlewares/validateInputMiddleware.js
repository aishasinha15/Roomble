// middlewares/validateInputMiddleware.js

const validateInputMiddleware = (req, res, next) => {
  const { body } = req;

  // Example validation: Check if all required fields are present in the body
  if (!body.name || !body.email || !body.password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Example of more specific validation (like email format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (body.email && !emailRegex.test(body.email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // If validation passes, proceed to the next middleware or route
  next();
};

export default validateInputMiddleware;
