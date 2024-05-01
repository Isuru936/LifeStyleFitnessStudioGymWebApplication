// Import necessary modules and models
import express from "express";
const router = express.Router();
import Workout from '../models/workout.models.js';

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

export default router;
