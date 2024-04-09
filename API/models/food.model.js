import mongoose from "mongoose";

// Define the schema for the user model
const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  fats: {
    type: Number,
    required: true,
  },
  proteins: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  uploadImage: {
    type: Buffer,
    required: false,
  },
});

const Food = mongoose.model("Food", foodSchema);
export default Food;
