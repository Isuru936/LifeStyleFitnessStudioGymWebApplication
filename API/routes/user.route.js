import express from "express";
import {
  getAllUsers,
  getUser,
  searchByEmail,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/getUsers", getAllUsers);
router.get("/searchByEmail/:email", searchByEmail);
router.get("/getUser/:id", getUser);

export default router;
