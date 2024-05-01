import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
});

const quizzes = mongoose.model("quizzes", quizzesSchema);

export default quizzes;
