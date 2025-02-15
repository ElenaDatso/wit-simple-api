### Overview
A simple REST API using Node.js with Express for the back-end.

## Features

- **Backend:** Node.js with Express, providing a RESTful API.
- **Database:** Firebase Firestore.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ElenaDatso/wit-simple-api.git
   cd Assignment-ReactandNode

### Install dependencies:
bash
Copy code
npm install

### Start the development server:
nodemon app.js

### API Endpoints
GET /api/todos - Retrieve all to-do items.
POST /api/todos - Create a new to-do item.
PUT /api/todos/:id - Update an existing to-do item.
DELETE /api/todos/:id - Delete a to-do item.

### Technologies Used
Backend: Node.js, Express
Database: Firebase Firestore


### Backend (Node.js with Express)
      API Endpoints: The backend provides a set of RESTful API endpoints for managing to-do items. These include:
            GET /api/todos: Fetches all to-do items from the database.
            POST /api/todos: Adds a new to-do item to the database.
            PUT /api/todos/:id: Updates an existing to-do item by its ID.
            DELETE /api/todos/:id: Deletes a to-do item by its ID.
# Routing: 
          The Express framework handles routing for the API endpoints, processing HTTP requests from the frontend and sending back responses.
# Middleware: 
          The backend uses middleware to handle tasks such as parsing JSON request bodies, handling CORS (if needed), and serving static files.
# Database Interaction: 
          The backend connects to a MongoDB Atlas database using Mongoose (a MongoDB object modeling tool). It performs CRUD (Create, Read, Update, Delete) operations on the to-do items stored in the database.
          Database (MongoDB Atlas)
# Persistent Storage: 
          MongoDB Atlas stores all to-do items persistently. Each to-do item is stored as a document in a MongoDB collection.

### Workflow
#User Interaction:
Users interact with the frontend through forms and buttons to manage their to-do items.
When a user submits a form to add or edit a to-do item, a corresponding API call is made to the backend.

## API Requests:
  The React frontend sends HTTP requests to the Express backend, depending on the user action (e.g., adding a new to-do item).
The backend processes these requests, interacts with the MongoDB Atlas database to perform the required operation, and sends back a response.

## Data Management:
The backend retrieves, adds, updates, or deletes to-do items in the MongoDB database.
The frontend updates the UI based on the response from the backend, reflecting the current state of the to-do list.

## Navigation:
The application uses React Router for navigation between different pages (e.g., the homepage, the edit page). For instance, after successfully adding a new to-do item, the user is redirected to the homepage.
## Error Handling
The program includes basic error handling. If an API request fails (e.g., due to a network issue or server error), the application logs the error to the console and may display an error message to the user.

## Development and Deployment
Development Server: Developers can run a local development server for both the frontend and backend. This allows for live reloading and easy testing during development.
Production Build: The frontend can be built into a production-ready bundle using Webpack or a similar tool, which is then served by the Node.js backend.
### Summary
  In summary, this program provides a fully functional to-do list application with a robust backend, a user-friendly frontend, and persistent storage. It enables users to manage their tasks effectively, with features like CRUD 
  operations and keyword search, all while ensuring seamless communication between the frontend and backend.
Colla