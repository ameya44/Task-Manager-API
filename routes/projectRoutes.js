const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Get user's projects (returns all for simplicity)
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get user projects
 *     tags: [Projects]
 */
router.get('/projects', projectController.getProjects);

// Create new project
/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create new project
 *     tags: [Projects]
 */
router.post('/projects', projectController.createProject);

// Get project details
/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project details
 *     tags: [Projects]
 */
router.get('/projects/:id', projectController.getProjectById);

// Update project
/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Update project
 *     tags: [Projects]
 */
router.put('/projects/:id', projectController.updateProject);

// Delete project
/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Delete project
 *     tags: [Projects]
 */
router.delete('/projects/:id', projectController.deleteProject);

// Add team member
/**
 * @swagger
 * /api/projects/{id}/members:
 *   post:
 *     summary: Add team member
 *     tags: [Projects]
 */
router.post('/projects/:id/members', projectController.addMember);

// Remove member
/**
 * @swagger
 * /api/projects/{id}/members/{userId}:
 *   delete:
 *     summary: Remove member
 *     tags: [Projects]
 */
router.delete('/projects/:id/members/:userId', projectController.removeMember);

module.exports = router;
