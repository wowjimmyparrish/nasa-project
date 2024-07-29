//This is the same middleware code as the previous one, but it is now in a separate file. The app.js file is used to define the express app. The server.js file is used to create the server and start it. This separation of concerns makes the code more modular and easier to maintain.

const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
