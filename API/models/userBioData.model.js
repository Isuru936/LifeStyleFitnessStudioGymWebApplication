import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema({
  Weight: {
    type: Number,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  Cholesterol_lvl: {
    type: Number,
    required: true,
  },
  Glucose_lvl: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  healthCondition: {
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
  workoutplan: [
    {
      name: {
        type: String,
        required: false,
      },
      description: {
        type: String,
      },
      imageUrl: String, // Store the URL or reference to the image file
      category: String,
    },
  ],
});

const quizzes = mongoose.model("quizzes", quizzesSchema);

export default quizzes;
