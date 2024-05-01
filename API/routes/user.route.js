import express from "express";
import {
  getAllUsers,
  getUser,
  searchByEmail,
} from "../controllers/user.controller.js";
import { getBioDataByUserId } from "../controllers/userBioData.controller.js";
const router = express.Router();

router.get("/getUsers", getAllUsers);
router.get("/searchByEmail/:email", searchByEmail);
router.get("/getUser/:id", getUser);

router.get("/bioDataById/:userId", getBioDataByUserId);

export default router;
