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
  age: {
    type: Number,
    required: true,
  },
  healthCondition: {
    type: String,
    required: true,
  },
});

const quizzes = mongoose.model("quizzes", quizzesSchema);

export default quizzes;
