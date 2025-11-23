//Importing express so we can create a router
const express = require('express');
const router = express.Router();

//Importing the workout controller functions
const workoutController = require('../controllers/workoutController');

//Show list of all workouts
router.get('/', workoutController.listWorkouts);

//Show the form to create a new workout
router.get('/new', workoutController.showCreateForm);

//Route to show the edit form for a specific workout
router.get('/:id/edit', workoutController.showEditForm);

//Route to handle the form submission and update the workout in the database
router.post('/:id/edit', workoutController.updateWorkout);

//Handle the form submission for creating a workout
router.post('/', workoutController.createWorkout);

//Showing the delete confirmation page
router.get('/:id/delete', workoutController.showDeleteConfirm);

//Handle the delete after confirmation
router.post('/:id/delete', workoutController.deleteWorkout);

//Exporting the router so app.js can use it
module.exports = router;