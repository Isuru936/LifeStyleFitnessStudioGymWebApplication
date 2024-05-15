// routes/users.js

import express from 'express';
import AdminUser from '../models/adminuser.model.js';

const router = express.Router();

// POST /api/admin/users
router.post('/', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    // Check if user already exists
    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create new user using AdminUser model
    const newUser = new AdminUser({ email, password, username });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('User registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
