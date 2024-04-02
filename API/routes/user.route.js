import express from "express";

import {
  addUser,
  getUsers,
  getUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/users", addUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);

export default router;
