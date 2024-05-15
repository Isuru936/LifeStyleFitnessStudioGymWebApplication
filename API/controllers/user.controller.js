import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import Quiz from "../models/quiz.model.js";
import generateToken from "../utils/generateTokens.js";
import dotenv from "dotenv";
import { randomInt } from "crypto";
dotenv.config();

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//@desc Auth user and set tokens
// route POST /api/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json(user._id);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const ConfirmPasswordAndChange = asyncHandler(async (req, res) => {
  const { userID, Oldpassword, NewPassword } = req.body;
  const user = await User.findById(userID);

  if (user && (await user.matchPassword(Oldpassword))) {
    user.password = NewPassword;
    await user.save();
    res.status(201).json({ message: "Password updated successfully" });
  } else {
    res.status(401).json({ message: "Invalid Current password" });
  }
});

const newPasswordChange = asyncHandler(async (req, res) => {
  const { mail, NewPassword } = req.body;
  const user = await User.findOne({ email: mail });

  if (user) {
    user.password = NewPassword;
    await user.save();
    res.status(201).json({ message: "Password updated successfully" });
  } else {
    res.status(401).json({ message: "No user Found" });
  }
});

//@desc Register new User
// route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    details: {
      fullName,
    },
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Logout User
// route POST /api/users/logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: "User logged out",
  });
});

//@desc Get User Profile
// route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch {
    (err) => {
      console.log(err);
      res.status(401).json(err.message);
    };
  }
});

//@desc Update user Profile
// route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.status(200).json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteProfile = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    const quizid = await Quiz.find({ userID: id });
    await Quiz.findByIdAndDelete(quizid);
    res.status(200).json({ message: "Account deleted" });
  } catch {
    (err) => {
      console.log(err);
    };
  }
});

const oneTimePassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const otp = randomInt(1000, 10000);
  console.log(otp);
  const userExists = await User.findOne({ email });

  if (userExists) {
    const msg = {
      to: email, // Change to your recipient
      from: "glitchblogger@gmail.com", // Change to your verified sender
      subject: "One Time Password From LSF",
      text: `Dont share your otp is ${otp}`,
      html: `<strong>Dont share your otp is ${otp}</strong>`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(201).json({ message: "Otp Send Successfully", OTP: otp });
  } else {
    res.status(401).json({ message: "No Email Found !" });
  }
});


export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  ConfirmPasswordAndChange,
  oneTimePassword,
  newPasswordChange,
  deleteProfile
};
