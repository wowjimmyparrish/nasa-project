// This file is the entry point of the server application. It creates an HTTP server and listens on the port specified in the environment variable PORT. If the environment variable is not set, it defaults to port 8000.

const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000;

//createServer is a built-in function in the http module that creates a new HTTP server object.
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
