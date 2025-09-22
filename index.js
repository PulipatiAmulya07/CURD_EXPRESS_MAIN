// Importing the express library to create our server
const express = require('express');

// Importing the routes defined in the users.js file
const routes = require('./routes/users.js');

// Creating an instance of the express application
const app = express();

// Setting the port number for the server to listen on
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mounting the user routes to the "/user" endpoint
app.use("/user", routes);

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log("Server is running at port " + PORT));
