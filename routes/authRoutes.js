const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user
router.post('/auth/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user (simple email/password check)
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout (placeholder)
router.post('/auth/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

// Get current user (expects userId header or query)
router.get('/auth/me', async (req, res) => {
  try {
    const userId = req.header('userId') || req.query.userId;
    if (!userId) return res.status(400).json({ error: 'No userId provided' });
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
