import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Age: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Height: {
      type: String,
      required: true,
    },
    Weight: {
      type: String,
      required: true,
    },
    Systolic_BP: {
      type: String,
      required: true,
    },
    Diastolic_BP: {
      type: String,
      required: true,
    },
    Cholesterol_lvl: {
      type: String,
      required: true,
    },
    Glucose_lvl: {
      type: String,
      required: true,
    },
    Smoker: {
      type: String,
      required: true,
    },
    Alcoholic: {
      type: String,
      required: true,
    },
    dietplan: [
      {
        name: {
          type: String,
          required: false,
        },
        imageData: {
          type: String,
          required: false,
        },
        protein: {
          type: String,
          required: false,
        },
        fat: {
          type: String,
          required: false,
        },
        carbs: {
          type: String,
          required: false,
        },
        calories: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
