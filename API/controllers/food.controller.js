import Food from "../models/food.model.js";

export const addFoodItem = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        food: newFood,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.status(200).json({
      status: "success",
      results: foodItems.length,
      data: {
        foodItems,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteFoodItem = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateFoodItem = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getFoodItemById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const searchByName = async (req, res) => {
  try {
    const regex = new RegExp(req.params.name, "i"); // Create a regular expression to match names starting with req.params.name
    const food = await Food.find({ name: regex }); // Find foods whose names match the regular expression

    res.status(200).json({
      status: "success",
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message.response,
    });
  }
};
