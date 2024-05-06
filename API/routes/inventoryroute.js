// inventoryRoutes.js
import express from "express";
import { addInventory, deleteInventoryItem, getInventory, getInventoryById, searchInventoryByItemName, updateInventoryItem } from "../controllers/inventory.controller.js";

const router = express.Router();

router.post("/add", addInventory);
router.get("/", getInventory);
router.get("/:id", getInventoryById)
router.delete("/:id", deleteInventoryItem);
router.put("/:id", updateInventoryItem);

router.get('/search/:itemName', searchInventoryByItemName);
// router.put("/update/:id", updateInventoryById);

export default router;
