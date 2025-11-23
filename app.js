require('dotenv').config(); //Load environment variables from .env file
const express = require('express'); // Import express framework
const path = require('path'); // Built-in path module (used for file paths)
const mongoose = require('mongoose'); // Import mongoose to connect to MongoDB

const workoutRoutes = require('./routes/workoutRoutes');

const app = express(); //Creating the express app

app.use(express.urlencoded({ extended: true})); //Allowing the server to read form data (POST requests)
app.use('/workouts', workoutRoutes);
app.use(express.static(path.join(__dirname, 'public'))); //Making the "public" folder available for css, images, etc

app.set('view engine', 'ejs'); //Setting EJS as the template/view engine

mongoose.connect(process.env.MONGODB_URI) //Connecting to MongoDB using the URI stored in .env
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => { //Home page route > Loads home.ejs
    res.render('home');
});

const PORT = process.env.PORT || 3000; //Starting the server on port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));