// Importing the workout model so we can talk to the database
const Workout = require('../models/workout');

// Showing a list of all the workouts
exports.listWorkouts = async (req, res) => {
    try {
        // Finding all the workouts and sorting by the date (newest first)
        const workouts = await Workout.find().sort({ date: -1 });

        // Rendering the list view and passing the workouts to the page
        res.render('workouts/list', { workouts });
    } catch (err) {
        console.error('Error fetching workouts: ', err);
        res.status(500).send('Error fetching workouts');
    }
};

// Showing the form to create a new workout
exports.showCreateForm = (req, res) => {
    res.render('workouts/new');
};

// Handling the form submit to create a new workout
exports.createWorkout = async (req, res) => {
    try {
        // Creating a new workout using data given from the form
        const workout = new Workout({
            workoutName: req.body.workoutName,
            workoutType: req.body.workoutType,
            durationMinutes: req.body.durationMinutes,
            date: req.body.date,
            intensity: req.body.intensity,
            notes: req.body.notes
        });

        // Save the workout in the database
        await workout.save();

        // Redirect back to the workout list
        res.redirect('/workouts');
    } catch (err) {
        console.error('Error creating workout:', err);
        res.status(500).send('Error creating workout');
    }
};

// Show a delete confirmation page
exports.showDeleteConfirm = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);

        if (!workout) {
            return res.status(404).send('Workout not found');
        }

        // Rendering a simple confirmation page
        res.render('workouts/delete', { workout });
    } catch (err) {
        console.error('Error loading workout for delete: ', err);
        res.status(500).send('Error loading workout');
    }
};

// Actually deleting the workout after confirmation
exports.deleteWorkout = async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.redirect('/workouts');
    } catch (err) {
        console.error('Error deleting a workout:', err);
        res.status(500).send('Error deleting workout');
    }
};

//Showing the form to edit an existing workout
exports.showEditForm = async (req, res) => {
    try{
        //FInding the workout by its ID
        const workout = await Workout.findById(req.params.id);

        if (!workout) {
            return res.status(404).send('Workout not found');
        }

        // Rendering the edit form and passing the workout data
        res.render('workouts/edit', {workout});
    } catch (err) {
        console.error('Error loading workout for edit: ', err);
        res.status(500).send('Error loading workout for edit');
    }
};


//Showing the form to edit an existing workout
exports.showEditForm = async (req, res) => {
    try{
        //Looking up the workout by its ID from the url
        const workout = await Workout.findById(req.params.id);

        //If no workout is found then we return a 404 response
        if (!workout) {
            return res.status(404).send('Workout not found');
        }

        //Render the edit form and passing the existing workout data
        res.render('workouts/edit', {workout});
    } catch (err) {
        console.error('Error loading workout for edit:', err);
        res.status(500).send('Error loading workout');
    }
};

//Handling edit form submission and updating the workout
exports.updateWorkout = async (req, res) => {
    try{
        //Updating the workout in MongoDB with the values from the form
        await Workout.findByIdAndUpdate(
            req.params.id, 
            {
                workoutName: req.body.workoutName,
                workoutType: req.body.workoutType,
                durationMinutes: req.body.durationMinutes,
                date: req.body.date,
                intensity: req.body.intensity,
                notes: req.body.notes
            },
            { new: true}
        );

        //After saving, returning back to the workout list
        res.redirect('/workouts');
    }catch (err) {
        console.error('Error updating workout:', err);
        res.status(500).send('Error updating workout');
    }
};