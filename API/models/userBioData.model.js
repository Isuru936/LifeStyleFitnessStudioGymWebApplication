import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    tele: {
      type: String,
      required: true,
    },
    smoker: {
      type: String,
      required: true,
    },
    alcoholic: {
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
    workoutplan: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
