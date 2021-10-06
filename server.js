//___________________
//DEPENDENCIES
//___________________
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const methodOverride = require('method-override');
require('dotenv').config()
const Instructor = require('./models/instructor');
const Review = require('./models/review');


//___________________
//DATABASE===========
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;


// Connect to Mongo & Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }
);

// Error / Success for mongo
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

//___________________
//MIDDLEWARE=========
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body- if no data from forms will return an empty object {}
// extended: false - does not allow nested objects in query strings
app.use(express.urlencoded({ extended: false }));
// returns middleware that only parses JSON - may or may not need it depending on your project
app.use(express.json());

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
/////ROUTES==========
//___________________
const instructorRouter = require('./routes/instructors');
const reviewRouter = require('./routes/reviews');

//replace app with instructorRouter
app.use('/rate-my-instructor', instructorRouter);
app.use('/reviews', reviewRouter);

//___________________
//PORT & LISTENER====
// Allow use of Heroku's port or your own local port, depending on the environment
//___________________
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express is listening on:', PORT));