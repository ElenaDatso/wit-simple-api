# Simple REST API

## Overview

A simple REST API built using Node.js and Express.
This REST API is available online at [https://wit-simple-api.onrender.com/](https://wit-simple-api.onrender.com/)

## Features

- **Backend:** Node.js with Express, providing a RESTful API.
- **Database:** Firebase Firestore for persistent data storage.

## Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ElenaDatso/wit-simple-api.git
   cd wit-simple-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   nodemon index.js
   ```

## API Endpoints

### '/'
- **GET `/`** - General information.

### Users
- **GET `/users`** - Retrieve all users.
- **POST `/users`** - Add a new user.
- **PUT `/users/:id`** - Update an existing user by ID.
- **DELETE `/users/:id`** - Delete a user by ID.

### Expenses
- **GET `/expenses`** - Retrieve all expenses.
- **POST `/expenses`** - Add a new expense.
- **PUT `/expenses/:id`** - Update an existing expense by ID.
- **DELETE `/expenses/:id`** - Delete an expense by ID.

### Income
- **GET `/income`** - Retrieve all income.
- **POST `/income`** - Add a new income.
- **PUT `/income/:id`** - Update an existing income by ID.
- **DELETE `/income/:id`** - Delete an income by ID.

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** Firebase Firestore

## Backend Overview

### API Routing
The backend is built with Express and provides RESTful API endpoints for managing users, expenses, and income.

### Middleware
- JSON request body parsing
- CORS handling
- Custom validation middleware
- Global error handling

### Database Interaction
The backend connects to **Firebase Firestore** for data storage, ensuring persistence of users, expenses, and income records.

## Workflow

1. **User Interaction**  
   Users interact with the API via HTTP requests to retrieve, add, update, or delete data.

2. **API Requests**  
   The client sends HTTP requests (GET, POST, PUT, DELETE) to the Express backend, which processes the request and interacts with Firebase Firestore.

3. **Data Management**  
   The backend retrieves, modifies, or removes records from Firestore, then sends a response back to the client.

4. **Error Handling**  
   The backend includes a global error handler that logs errors and returns appropriate HTTP status codes.

## Development and Deployment

### Local Development
Run a local server using:
```bash
nodemon index.js
```

### Production Build
For production, use:
```bash
node index.js
```

## Summary
This project provides a simple REST API with a well-structured backend using Node.js, Express, and Firebase Firestore. It allows users to manage users, expenses, and income efficiently with full CRUD operations.
