import express from "express";
import {
  getBioDataByUserId,
  updateDietPlanByUserId,
} from "../controllers/userBioData.controller.js";

const router = express.Router();

router.get("/bioDataById/:userId", getBioDataByUserId);
router.put("/bioDataUpdate/:id", updateDietPlanByUserId);

export default router;
