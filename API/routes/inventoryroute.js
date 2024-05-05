// inventoryRoutes.js
import express from "express";
import { addInventory, deleteInventoryItem, getInventory, updateInventoryItem } from "../controllers/inventory.controller.js";

const router = express.Router();

router.post("/add", addInventory);
router.get("/", getInventory);
router.delete("/:id", deleteInventoryItem);
router.put("/:id", updateInventoryItem)
// router.put("/update/:id", updateInventoryById);

export default router;
