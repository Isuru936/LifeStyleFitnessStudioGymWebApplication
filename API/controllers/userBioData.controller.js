import UserBioData from "../models/userBioData.model.js";
import calculateNutrientLevels from "../utils/nutrientCalc.js";
import { ObjectId } from "mongodb";

export const getBioData = async (req, res) => {
  try {
    const bioData = await UserBioData.find();
    res.status(200).json({
      status: "success",
      results: bioData.length,
      data: {
        bioData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getBioDataByUserIdClient = async (req, res) => {
  try {
    console.log("Requested userId:", req.params.userId);
    const userID = req.params.userId;

    const bioData = await UserBioData.findOne({ userID });
    console.log("Retrieved bioData:", bioData);

    if (!bioData) {
      return res.status(404).json({
        status: "fail",
        message: "BioData not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        bioData,
      },
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const getBioDataByUserId = async (req, res) => {
  try {
    console.log("Requested userId:", req.params.userId);
    const userId = ObjectId.createFromHexString(req.params.userId);
    console.log("Converted userId to ObjectId:", userId);

    const bioData = await UserBioData.findOne({ userID: userId });
    console.log("Retrieved bioData:", bioData);

    const nutrientLevels = calculateNutrientLevels(
      bioData.weight,
      bioData.gender,
      bioData.height,
      bioData.age,
      bioData._id
    );

    console.log(nutrientLevels);

    if (!bioData) {
      return res.status(404).json({
        status: "fail",
        message: "No bio data found with that userId",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        bioData,
        nutrientLevels,
      },
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const updateDietPlanByUserId = async (req, res) => {
  const updatedDietPlan = req.body.dietplan; // Assuming req.body contains the updated diet plan array
  console.log(req.body.dietplan);
  try {
    // Find the document with the given userId
    const existingBioData = await UserBioData.findById(req.params.id);

    if (!existingBioData) {
      return res.status(404).json({ message: "Bio data not found" });
    }

    // Update the dietplan field with the new data
    existingBioData.dietplan = updatedDietPlan;

    // Save the updated bio data
    const result = await existingBioData.save();

    return res
      .status(200)
      .json({ message: "Diet plan updated successfully", data: result });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
