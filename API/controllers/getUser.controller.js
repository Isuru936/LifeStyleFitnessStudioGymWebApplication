import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const searchByEmail = async (req, res) => {
  try {
    const regex = new RegExp(req.params.email, "i"); // Case-insensitive regex
    const users = await User.find({ email: regex }).select("-password");
    if (users.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No users found with the provided email",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        users,
        keyword: req.params.email,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "No user found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
