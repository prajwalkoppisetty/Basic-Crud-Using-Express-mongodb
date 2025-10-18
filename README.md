🚀 CRUD User Management Server 🧑‍💻

Project Overview ✨

This is a foundational backend server built with Node.js, Express, and Mongoose (MongoDB) to demonstrate basic CRUD (Create, Read, Update, Delete) operations for a User entity. It provides simple routes for user registration, authentication, listing, updating, and deletion.

🛠️ Tech Stack & Prerequisites

Before running this server, ensure you have the following installed:

Tool

Version

Description

Node.js

>= 18.x

JavaScript runtime environment.

npm

Latest

Node package manager.

MongoDB

Latest

The database system used for persistence.

Express

Included

Minimalist web framework for Node.js.

Mongoose

Included

MongoDB object data modeling (ODM) library.

Installation

Clone the repository (if applicable) or ensure the index.js file is in a project directory.

Install dependencies (assuming you are using express and mongoose):

npm init -y
npm install express mongoose


Start the MongoDB Server: Ensure your local MongoDB instance is running (usually on port 27017).

Run the Server:

node index.js


You should see the confirmation: Server is running on port 3000 and Connected To MongoDb 🚀.

🔑 Key Features (The CRUD Operations)

This API exposes the following five core routes:

Operation

Route

Method

Description

Create

/Signup

POST

Registers a new user with required credentials.

Read All

/users

GET

Fetches a list of all registered users.

Read/Auth

/login

POST

Authenticates a user by email and password.

Update

/update/:id

PUT

Updates user details using the MongoDB _id.

Delete

/delete/:id

DELETE

Permanently removes a user record by _id.

🌐 API Endpoints Details

All endpoints run on the base URL: http://localhost:3000

1. User Registration (Create)

Registers a new user in the database.

Endpoint: /Signup

Method: POST

Request Body Example:

{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": 9876543210,
    "password": "securepassword123" 
}


Success Response: 201 Created

2. Fetch All Users (Read All)

Retrieves all user records from the database. Note: In a real application, this route should be protected.

Endpoint: /users

Method: GET

Success Response: 200 OK (Returns a list of user objects)

3. User Login (Read / Authentication)

Authenticates the user credentials.

Endpoint: /login

Method: POST

Request Body Example:

{
    "email": "john.doe@example.com",
    "password": "securepassword123" 
}


Success Response: 200 OK

Failure Response: 401 Unauthorized

4. Update User Details (Update)

Updates an existing user's details based on their unique MongoDB _id.

Endpoint: /update/:id (e.g., /update/65f4d8e87c0a6b001f8e1234)

Method: PUT

Request Body Example (Partial Update):

{
    "name": "John D. Smith",
    "password": "newsecurepassword"
}


Success Response: 200 OK

5. Delete User (Delete)

Permanently removes a user record based on their unique MongoDB _id.

Endpoint: /delete/:id (e.g., /delete/65f4d8e87c0a6b001f8e1234)

Method: DELETE

Request Body: None required.

Success Response: 200 OK (with deletion message)

Failure Response: 404 Not Found (if ID does not exist)

⚠️ Important Note on Security

For learning purposes, your code currently stores and verifies user passwords as plain text.

🔥 Professional Recommendation: For any production or portfolio project, you must implement password hashing using a library like bcrypt to securely store and compare passwords.
