const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /project
router.post('/task', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;