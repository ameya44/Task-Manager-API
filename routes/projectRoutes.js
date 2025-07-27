const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// POST /project
router.post('/project', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;