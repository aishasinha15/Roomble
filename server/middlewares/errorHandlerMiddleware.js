// middlewares/errorHandlerMiddleware.js

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err); // Log the error (you can extend this to log to a file or service)

  const statusCode = err.statusCode || 500; // Default to 500 if no specific status code
  const message = err.message || "Internal Server Error"; // Default error message

  res.status(statusCode).json({ message });
};

export default errorHandlerMiddleware;
