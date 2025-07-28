const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Get tasks for a project
/**
 * @swagger
 * /api/projects/{id}/tasks:
 *   get:
 *     summary: Get tasks for a project
 *     tags: [Tasks]
 */
router.get('/projects/:id/tasks', taskController.getProjectTasks);

// Create new task
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create new task
 *     tags: [Tasks]
 */
router.post('/tasks', taskController.createTask);

// Get task details
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get task details
 *     tags: [Tasks]
 */
router.get('/tasks/:id', taskController.getTaskById);

// Update task
/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 */
router.put('/tasks/:id', taskController.updateTask);

// Delete task
/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 */
router.delete('/tasks/:id', taskController.deleteTask);

// Add comment to task
/**
 * @swagger
 * /api/tasks/{id}/comments:
 *   post:
 *     summary: Add comment to task
 *     tags: [Tasks]
 */
router.post('/tasks/:id/comments', taskController.addComment);

module.exports = router;
