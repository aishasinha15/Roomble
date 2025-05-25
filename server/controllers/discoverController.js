import User from "../models/User.js";

// Fetch random profiles for discovery
export const discoverUsers = async (req, res) => {
  try {
    const currentUserId = req.user.userId; // Get the current user's ID from the JWT token

    // Fetch a random user who is not the current user
    const user = await User.aggregate([
      { $match: { _id: { $ne: currentUserId } } }, // Exclude the current user
      { $sample: { size: 1 } }, // Randomly sample 1 user
    ]);

    if (user.length === 0) {
      return res
        .status(404)
        .json({ message: "No users available for discovery" });
    }

    // Send the random user back to the client
    res.status(200).json(user[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching users" });
  }
};
