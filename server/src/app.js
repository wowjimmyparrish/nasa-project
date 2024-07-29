//This is the same middleware code as the previous one, but it is now in a separate file. The app.js file is used to define the express app. The server.js file is used to create the server and start it. This separation of concerns makes the code more modular and easier to maintain.

const express = require('express');

const app = express();
app.use(express.json());

module.exports = app;
