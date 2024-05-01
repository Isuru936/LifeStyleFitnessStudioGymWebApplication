import { get } from "mongoose";
import UserBioData from "../models/userBioData.model.js";

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
export const getBioDataByUserId = async (req, res) => {
  try {
    console.log("Requested userId:", req.params.userId);
    const userId = ObjectId.createFromHexString(req.params.userId);
    console.log("Converted userId to ObjectId:", userId);

    const bioData = await UserBioData.findOne({ userID: userId });
    console.log("Retrieved bioData:", bioData);

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
