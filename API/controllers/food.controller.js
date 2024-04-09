import Food from "../models/food.model.js";

export const addFood = async (req, res) => {
  try {
    // Extract food data from request body
    const { foodname, calories, fats, proteins, carbs, uploadImage } = req.body;

    // Create new food object
    const newFood = new Food({
      foodname,
      calories,
      fats,
      proteins,
      carbs,
      uploadImage: Buffer.from(uploadImage, "base64"), // Convert base64 image to buffer
    });

    // Save the food item to the database
    await newFood.save();

    res.status(201).json({ message: "Food added successfully", food: newFood });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getFood = async (req, res) => {
  try {
    // Fetch all food items from the database
    const foods = await Food.find();

    res.status(200).json({ foods });
  } catch (error) {
    console.error("Error fetching food data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res
      .status(200)
      .json({ message: "Food deleted successfully", food: deletedFood });
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
