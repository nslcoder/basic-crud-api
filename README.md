# Basic CRUD API in Node, Express and MongoDB with Mongoose

It's a simple CRUD API built using Node, Express and MongoDB with Mongoose. It follows the REST architecture.

## What I Learned:

- How to use the Dotenv module and load environment variables from a .env file
- How to connect to MongoDB using Mongoose, a object data modeling (ODM) tool
- How to create schema and model
- How to create, read, update and delete documents in MongoDB using Mongoose
- What the async/await pattern is

## Prerequisites: 

- Node
- npm
- MongoDB
- Text editor (VS Code, Atom, Brackets, etc)
- API client (Postman, Insomnia, etc)

## Dependencies: 

- Express
- Dotenv
- Mongoose

## Endpoints:

HTTP Method | URL | Description
--- | --- | ---
POST | /apis | Creates a post
GET | /apis | Gets all the posts
GET | /apis/:id | Gets a post by its id
PUT | /apis/:id | Updates a post by its id
DELETE | /apis/:id | Deletes a post by its id

## How to Install and Run:

1. Clone the repo:
        
        git clone https://github.com/nslcoder/basic-crud-api        

2. Go inside the local copy:
        
        cd basic-crud-api
        
3. Install the dependencies: 
        
        npm install
        
4. Create a `.env` file and specify the MongoDB database URL:
        
        DB_URL="mongodb://127.0.0.1/yourDatabaseName"
        
5. Start the server:
        
        node app.js

## Blog Post:
If you want to learn how to create this API from scratch, please read [my post](https://nslpad.netlify.app/basic-crud-api/).

## License
This project uses [the MIT License](https://github.com/nslcoder/basic-crud-api/blob/main/LICENSE.md).