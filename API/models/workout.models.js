import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String, // Store the URL or reference to the image file
  category: String // Add category field
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
