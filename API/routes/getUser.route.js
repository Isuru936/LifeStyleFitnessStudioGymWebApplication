import express from "express";
import { getAllUsers } from "../controllers/getUser.controller.js";
const router = express.Router();

router.get("/getUsers", getAllUsers);

export default router;
