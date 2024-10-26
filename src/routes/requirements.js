const express = require('express');
const { 
  createRequirement, 
  getClientRequirements, 
  getRequirementById, 
  updateRequirement, 
  updateRequirementAssignment,
  deleteRequirement 
} = require('../controller/requirementController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming JWT authentication

const router = express.Router();

// Create a new requirement
router.post('/', authMiddleware, createRequirement);

// Get all requirements for a client
router.get('/', authMiddleware, getClientRequirements);

// Get a specific requirement by ID
router.get('/:id', authMiddleware, getRequirementById);

// Update a requirement
router.post('/:id', authMiddleware, updateRequirement);

// Delete a requirement
router.delete('/:id', authMiddleware, deleteRequirement);

// Assign profiles to a requirement
router.post('/:id/assign-profiles', updateRequirementAssignment);

module.exports = router;
