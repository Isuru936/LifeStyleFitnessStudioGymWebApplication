import mongoose from "mongoose";

// Define the Inventory schema
const InventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "available",
  },
});

// Create and export the Inventory model
const Inventory = mongoose.model("Inventory", InventorySchema);

export default Inventory;