import express from "express";
import {
  addFood,
  getFood,
  deleteFood,
} from "../controllers/food.controller.js";

const router = express.Router();

router.post("/food", addFood);
router.get("/food", getFood);
router.delete("/food/:id", deleteFood);

export default router;
