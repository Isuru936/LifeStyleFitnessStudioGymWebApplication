import Inventory from "../models/inventory.model.js";

export const addInventory = async (req, res) => {
  try {
    const { itemName, description, status } = req.body;

    // Create a new inventory item
    const newInventory = new Inventory({
      itemName,
      description,
      status,
    });

    // Save the new inventory item to the database
    await newInventory.save();

    res.status(201).json({
      message: "Inventory item added successfully",
      inventory: newInventory,
    });
  } catch (error) {
    console.error("Error adding inventory item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json({ inventory });
  } catch (error) {
    console.error("Error fetching inventory:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteInventoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the inventory item by ID and delete it
    const deletedItem = await Inventory.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json({ message: "Inventory item deleted successfully" });
  } catch (error) {
    console.error("Error deleting inventory item:", error);
    res.status(500).json({ message: "Failed to delete inventory item" });
  }
};
