import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  ConfirmPasswordAndChange,
  oneTimePassword,
  newPasswordChange,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/:id", getUserProfile);
router.put("/changepassword", ConfirmPasswordAndChange);
router.put("/newpassword", newPasswordChange);
router.post("/SendOTP", oneTimePassword);

export default router;
