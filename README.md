Joke Management System

Project Description

Joke Management System is a RESTful API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication. It allows users to register, login, and perform CRUD (Create, Read, Update, Delete) operations on jokes. Protected routes are secured using JSON Web Tokens (JWT).

Features

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Add Joke
* Get All Jokes
* Get Joke By ID
* Update Joke
* Delete Joke
* MongoDB Atlas Integration

 Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* Thunder Client 

 Project Structure

Joke-Management-System

├── config

├── controllers

├── middleware

├── models

├── routes

├── .gitignore

├── index.js

├── package.json

└── package-lock.json

 Installation

Clone the repository:

git clone https://github.com/Ramyasree143/Joke-Management-System.git

Move into the project folder:

cd Joke-Management-System

Install dependencies:

npm install

Create a .env file:

PORT=5000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run the server:

node index.js

 Authentication Routes

Register User

POST /auth/register

 Login User

POST /auth/login

 Joke Routes

 Add Joke

POST /jokes/add

 Get All Jokes

GET /jokes/all

Get Joke By ID

GET /jokes/:id

 Update Joke

PUT /jokes/:id

 Delete Joke

DELETE /jokes/:id

Sample Joke

{
"joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
"category": "Programming"
}

API Testing

The API can be tested using:

* Thunder Client
* Postman

  Author

Ramya Sree Keerthi

B.Tech CSE

SRM University AP

License

This project is developed for educational and learning purposes.
