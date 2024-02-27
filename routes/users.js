// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/newu', userController.createUser);

// Get all users
router.get('/newa', userController.getAllUsers);

// Get a user by ID
router.get('/userg:id', userController.getUserById);

// Update a user by ID
router.put('/userp:id', userController.updateUserById);

// Delete a user by ID
router.delete('/userd:id', userController.deleteUserById);

module.exports = router;
