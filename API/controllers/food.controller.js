import Food from "../models/food.model.js";
import multer from "multer";

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  },
});

// Set up multer upload configuration
const upload = multer({ storage: storage });

// Controller function to add a new food item to the database
const addFoodItem = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, calories, protein, carbs, fat } = req.body;
    const imageData = req.file.filename; // Get the filename of the uploaded image
    console.log(req.body);
    // Create a new Food object using the provided data
    const newFood = new Food({
      name,
      calories,
      protein,
      carbs,
      fat,
      imageData,
    });

    // Save the new food item to the database
    const savedFood = await newFood.save();

    // Respond with the saved food item
    res.status(201).json(savedFood);
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message, data: req.body });
  }
};

export { addFoodItem, upload };
