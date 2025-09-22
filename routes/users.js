// Importing the express library and creating a router instance
const express = require('express');
const router = express.Router();

// Array to store user data
let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        age:22,
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        age:23,
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        age:24,
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
    res.send(users); // Sending the array of users as the response
});

// GET by specific email request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
    const email = req.params.email; // Extracting the email parameter from the request URL
    let filtered_users = users.filter((user) => user.email === email); // Filtering users array to find the user with the matching email
    res.send(filtered_users); // Sending the filtered user(s) as the response
});


// POST request: Create a new user
router.post("/",(req,res)=>{
    users.push({ // Adding a new user object to the users array
        "firstName":req.query.firstName, // Extracting firstName from the query parameters of the request
        "lastName":req.query.lastName, // Extracting lastName from the query parameters of the request
        "email":req.query.email, // Extracting email from the query parameters of the request
        "age":req.query.age // Extracting age from the query parameters of the request
    });
    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!") // Sending a success message as response
});

// PUT request: Update user details by email
router.put("/:email", (req, res) => {
    const email = req.params.email; // Extracting the email parameter from the request URL
    let filtered_users = users.filter((user) => user.email === email); // Filtering users array to find the user with the matching email
    if (filtered_users.length > 0) { // If user with given email exists
        let filtered_user = filtered_users[0]; // Selecting the first user from the filtered array (assuming email is unique)
        let firstName = req.query.firstName; // Extracting firstName from the query parameters of the request
        let lastName = req.query.lastName; // Extracting lastName from the query parameters of the request
        let age = req.query.age; // Extracting age from the query parameters of the request
        
        if(firstName) { // If firstName is provided in the request
            filtered_user.firstName = firstName; // Update firstName
        }

        if(lastName){ // If lastName is provided in the request
            filtered_user.lastName = lastName; // Update lastName
        }

        if(age){ // If age is provided in the request
            filtered_user.age = age; // Update age
        }
        
        users = users.filter((user) => user.email != email); // Removing the old user object with given email from users array
        users.push(filtered_user); // Adding the updated user object to users array
        res.send(`User with the email  ${email} updated.`); // Sending a success message as response
    }
    else{
        res.send("Unable to find user!"); // Sending an error message as response if user not found
    }
});

// DELETE request: Delete user by email
router.delete("/:email", (req, res) => {
    const email = req.params.email; // Extracting the email parameter from the request URL
    users = users.filter((user) => user.email != email); // Filtering out the user with the specified email from the users array
    res.send(`User with the email  ${email} deleted.`); // Sending a success message as response
});

// Exporting the router to be used in other files
module.exports=router;
