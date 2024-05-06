// Import necessary modules and models
import express from "express";
const router = express.Router();
import Workout from '../models/workout.models.js';
import quizzes from "../models/userBioData.model.js";

// Route to add a new workout
router.post('/workouts', async (req, res) => {
  try {
    const { name, description, imageUrl, category } = req.body;
    const workout = new Workout({ name, description, imageUrl, category });
    await workout.save();
    res.status(201).send(workout);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to get all workouts by category
router.get('/workouts/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const workouts = await Workout.find({ category });
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to get all unique workout categories
router.get('/workouts/categories', async (req, res) => {
  try {
    const categories = await Workout.distinct("category");
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to fetch a single workout by ID
router.get('/workouts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).send('Workout not found');
    }
    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to update a workout by ID
router.put('/workouts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, imageUrl, category } = req.body;
    const updatedWorkout = await Workout.findByIdAndUpdate(id, { name, description, imageUrl, category }, { new: true });
    if (!updatedWorkout) {
      return res.status(404).send('Workout not found');
    }
    res.json(updatedWorkout);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to delete a workout by ID
router.delete('/workouts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWorkout = await Workout.findByIdAndDelete(id);
    if (!deletedWorkout) {
      return res.status(404).send('Workout not found');
    }
    res.json({ message: 'Workout deleted successfully', workout: deletedWorkout });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/saveWorkouts', async (req, res) => {
  try {
    const { userId, workouts } = req.body;

    console.log('User ID:', userId); // Log the userID

    // Find the document by userId
    const user = await quizzes.findOne({ userID: userId });

    console.log('User:', user); // Log the user object

    // If user is not found, return 404 error
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Clear the existing workoutplan array
    user.workoutplan = [];

    // Add the new workouts to the workoutplan array
    user.workoutplan.push(...workouts);

    // Save the updated user document
    const result = await user.save();

    // Send success response with updated data
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error saving workout data:', error);
    // Send error response if there's an error
    res.status(500).json({ success: false, error: 'Error saving workout data' });
  }
});


router.get('/workoutplan/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    console.log('User ID:', userId); // Log the userID

    // Find the document by userId
    const user = await quizzes.findOne({ userID: userId });

    console.log('User:', user); // Log the user object

    // If user is not found, return 404 error
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Extract workoutplan array from user document
    const workoutPlan = user.workoutplan;

    // Send success response with workout plan data
    res.status(200).json({ success: true, data: workoutPlan });
  } catch (error) {
    console.error('Error fetching workout plan:', error);
    // Send error response if there's an error
    res.status(500).json({ success: false, error: 'Error fetching workout plan' });
  }
});





export default router;
