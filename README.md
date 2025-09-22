# User Management API

## :computer: Project Overview
This project is a RESTful API for managing user data built using Node.js and Express. It offers endpoints to perform CRUD (Create, Read, Update, Delete) operations on user records stored in-memory. The API follows the principles of RESTful architecture, providing a simple and intuitive interface for interacting with user data.

## :dart: Objectives
- **Build a RESTful API**: Develop a web service adhering to RESTful principles for efficient data management.
- **Practice Node.js and Express**: Enhance skills in server-side development using Node.js and Express framework.
- **Implement CRUD operations**: Create, Read, Update, and Delete user records using HTTP methods.
- **Learn API testing**: Utilize cURL commands and Postman for testing and validating API endpoints.
- **Gain middleware and routing knowledge**: Understand Express middleware and routing concepts for request handling.


## :page_with_curl: Code Explanation
### 1. `server.js`
This file sets up the Express server and defines the routes for handling user-related requests. It initializes the Express application, configures middleware for parsing JSON requests, and mounts the user routes defined in the `routes/users.js` file.

### 2. `routes/users.js`
This file contains route handlers for user management operations. It defines the logic for handling GET, POST, PUT, and DELETE requests related to user data. The routes interact with an in-memory array `users` to store and manipulate user records.

## :hammer_and_wrench: Testing API Using Curl Commands and  Postman

---------------------------------------------------------------------------------------
1. **Retrieve all users**:
   ```bash
   curl localhost:5000/user
   ```




![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/40b4c497-a597-45f1-8763-7ffce9d5def9)



![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/a31d55e8-eb57-4897-bed5-8386d5659393)



---------------------------------------------------------------------------------------
2. **Retrieve a single user by email**:
   ```bash
   curl localhost:5000/user/johnsmith@gamil.com
   ```


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/31d09a3e-dc9d-4500-8416-5b457f5d0733)



![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/5106da8c-cd80-4e06-a86a-4310abdfb45d)


---------------------------------------------------------------------------------------
3. **Create a new user**:
   ```bash
   curl --request POST 'localhost:5000/user?firstName=Jon&lastName=Lovato&email=jonlovato@theworld.com&age=33'
   ```

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/a4f99527-d697-4bae-a207-c9b9918c72d8)


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/dc8da83b-768b-493f-a0a5-a5af4a8f6e39)


---------------------------------------------------------------------------------------

4. **Update an existing user**:
   ```bash
   curl --request PUT 'localhost:5000/user/johnsmith@gamil.com?age=40'
   ```


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/8a44ce0b-9090-400b-aa11-16a1685ac630)


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/bf54d053-e652-412a-abfb-c35a1482e91f)

---------------------------------------------------------------------------------------

5. **Delete a user**:
   ```bash
   curl --request DELETE 'localhost:5000/user/johnsmith@gamil.com'
   ```


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/1fb684c7-d9b0-41a7-b159-3d2d0e94ed24)


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS/assets/84027648/4307c2cb-9ff0-4984-8eb7-81ad64f8babc)



---------------------------------------------------------------------------------------

## :bulb: Learning Outcomes
- **Understanding of RESTful principles**: Grasp the fundamentals of RESTful architecture and design.
- **Proficiency in Node.js and Express**: Gain practical experience in building web applications using Node.js and Express.
- **Hands-on experience with HTTP methods**: Learn how to handle different types of HTTP requests and their purposes.
- **Knowledge of API testing**: Practice testing API endpoints for functionality and reliability using cURL and Postman.
- **Understanding of middleware and routing**: Gain insights into Express middleware and routing mechanisms for request processing.
