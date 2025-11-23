//Import mongoose so we can create a schema and model
const mongoose = require('mongoose');

//Defining the structure for a workout doc
const workoutSchema = new mongoose.Schema({
    //The workout name such as for example "Shoulders & Arms"
    workoutName:{
        type: String,
        required: true,
        trim: true
    },

    // The type of workout such as for example "Strength training"
    workoutType: {
        type: String,
        required: true,
        trim: true
    },

    // The duration of the workout in terms of minutes
    durationMinutes: {
        type: Number,
        required: true,
        min: 1
    },

    //The date of the workout
    date: {
        type: Date,
        required: true
    },

    //The description regarding the intensity such as for example "Low", "Medium", "High"
    intensity: {
        type: String,
        required: true,
        trim: true
    },

    //Extra notes regarding the workout
    notes: {
        type: String,
        trim: true
    }
});

//Creating the workout model using the schema
const Workout = mongoose.model('Workout', workoutSchema)

//Exporting the model so it can be used in other files
module.exports = Workout;