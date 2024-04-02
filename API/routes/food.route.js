import express from "express";
import { addFoodItem } from "../controllers/food.controller.js";

const router = express.Router();

router.post("/addFood", addFoodItem);

export default router;
