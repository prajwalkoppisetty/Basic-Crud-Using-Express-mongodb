# 🚀 CRUD User Management Server (Node + Express + MongoDB)

A foundational backend server built with **Node.js**, **Express**, and **Mongoose** demonstrating basic **CRUD (Create, Read, Update, Delete)** operations for a User entity — including **signup, login, list users, update, delete** functionality.

---

## 🛠 Tech Stack & Prerequisites

| Tool     | Version  | Description |
|----------|----------|-------------|
| Node.js  | ≥ 18.x   | JavaScript runtime environment |
| npm      | Latest   | Node package manager |
| MongoDB  | Latest   | Database used for persistence |
| Express  | Included | Web framework for Node |
| Mongoose | Included | MongoDB ODM library |

---

## 📦 Installation & Setup


# Initialize project (if not done)
npm init -y

# Install dependencies
npm install express mongoose
✅ Start MongoDB Server
Make sure MongoDB is running locally (default port 27017).

✅ Start the Server
bash
Copy code
node index.js
✅ You should see: Server is running on port 3000 and Connected To MongoDb 🚀.

🔑 CRUD API Endpoints
Base URL: http://localhost:3000

Operation	Route	Method	Description
Create	/Signup	POST	Registers a new user
Read All	/users	GET	Fetches all users
Read/Auth	/login	POST	Authenticates a user
Update	/update/:id	PUT	Updates user details
Delete	/delete/:id	DELETE	Deletes a user by ID

1. User Registration (Create)
POST /Signup

json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "mobilenumber": 9876543210,
  "password": "securepassword123"
}

2. Fetch All Users (Read All)
GET /users
→ Returns list of all users

3. User Login (Authentication)
POST /login

{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}

4. Update User
PUT /update/:id

Copy code
{
  "name": "John D. Smith",
  "password": "newsecurepassword"
}

5. Delete User
DELETE /delete/:id

⚠️ Security Note
Passwords are currently stored as plain text — suitable only for learning/demo purposes.

🔒 Professional Recommendation:
Use bcrypt to hash and compare passwords before storing them in MongoDB.

Made with 💻 & ☕️ — Happy Coding!

yaml
Copy code
