import express from "express";
import {
  getBioDataByUserId,
  getBioDataByUserIdClient,
  updateDietPlanByUserId,
} from "../controllers/userBioData.controller.js";

const router = express.Router();

router.get("/getUserBioDataById/:userId", getBioDataByUserIdClient); //when fetching bioData for the User Side use this Route
router.get("/bioDataById/:userId", getBioDataByUserId);
router.put("/bioDataUpdate/:id", updateDietPlanByUserId);

export default router;
