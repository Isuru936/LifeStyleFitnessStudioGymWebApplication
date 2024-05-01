const Workout = require('../models/Workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    const { name, description, imageUrl, category } = req.body;
    const workout = new Workout({ name, description, imageUrl, category });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    console.error('Error creating workout:', error);
    res.status(500).json({ error: 'Could not create workout' });
  }
};

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Could not fetch workouts' });
  }
};

// Get a single workout by ID
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Error fetching workout:', error);
    res.status(500).json({ error: 'Could not fetch workout' });
  }
};

// Update a workout by ID
exports.updateWorkoutById = async (req, res) => {
  try {
    const { name, description, imageUrl, category } = req.body;
    const workout = await Workout.findByIdAndUpdate(req.params.id, { name, description, imageUrl, category }, { new: true });
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Error updating workout:', error);
    res.status(500).json({ error: 'Could not update workout' });
  }
};

// Delete a workout by ID
exports.deleteWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ error: 'Could not delete workout' });
  }
};
