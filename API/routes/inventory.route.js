import express from "express";
import {
  addInventory,
  getInventory,
  deleteInventoryItem,
} from "../controllers/inventory.controller.js";

const router = express.Router();

router.post("/inventory", addInventory);
router.get("/inventory", getInventory);
router.delete("/inventory/:id", deleteInventoryItem);

export default router;
