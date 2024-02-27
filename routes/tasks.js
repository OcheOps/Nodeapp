const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a new task
router.post('/newt', taskController.createTask);

// Get all tasks
router.get('/allt', taskController.getAllTasks);

// Get a task by ID
router.get('/taskg:id', taskController.getTaskById);

// Update a task by ID
router.put('/tasku:id', taskController.updateTaskById);

// Delete a task by ID
router.delete('/taskd:id', taskController.deleteTaskById);

module.exports = router;
