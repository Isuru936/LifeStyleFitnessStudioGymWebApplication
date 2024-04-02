import User from "../models/user.model.js";

// export const addUser = async (req, res) => {
//   try {
//     // Extract user data from request body
//     const {
//       username,
//       email,
//       password,
//       fullName,
//       age,
//       gender,
//       height,
//       weight,
//       dietPlan,
//       workoutPlan,
//       profileImage,
//     } = req.body;

//     // Split the base64 string into chunks and store them in an array
//     const imageChunks = profileImage
//       .match(/.{1,8192}/g)
//       .map((chunk) => Buffer.from(chunk, "base64"));

//     // Check if username or email already exists
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ message: "Username or email already exists" });
//     }

//     // Create new user object
//     const newUser = new User({
//       username,
//       email,
//       password,
//       fullName,
//       age,
//       gender,
//       height,
//       weight,
//       dietPlan,
//       workoutPlan,
//       profileImage: imageChunks, // Store the image chunks array
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: "User added successfully", user: newUser });
//   } catch (error) {
//     console.error("Error adding user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export const addUser = async (req, res) => {
  try {
    // Extract user data from request body
    const {
      username,
      email,
      password,
      fullName,
      age,
      gender,
      height,
      weight,
      dietPlan,
      workoutPlan,
      profileImage,
    } = req.body;

    // Decode the base64 string to a buffer
    const imageBuffer = Buffer.from(profileImage, "base64");

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Create new user object
    const newUser = new User({
      username,
      email,
      password,
      fullName,
      age,
      gender,
      height,
      weight,
      dietPlan,
      workoutPlan,
      profileImage: imageBuffer, // Store the image as a single buffer
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Import the User model
export const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Convert image buffers to base64 strings
    const usersWithBase64Images = users.map((user) => {
      if (user.profileImage) {
        const base64Image = Buffer.from(user.profileImage).toString("base64");
        return {
          ...user.toJSON(),
          profileImage: `data:image/jpeg;base64,${base64Image}`,
        };
      } else {
        return user.toJSON();
      }
    });

    res.status(200).json({ users: usersWithBase64Images });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to get user details by ID
export const getUserById = async (req, res) => {
  try {
    // Extract user ID from request parameters
    const { id } = req.params;

    // Find user by ID in the database
    const user = await User.findById(id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If user exists, return user details
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
