# Person Management REST API

A Node.js REST API for managing person records.

<p id='readme-top'></p>

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [Create a New Person](#create-a-new-person)
  - [Get a Person by ID or Name](#get-a-person-by-id-or-name)
  - [Update a Person](#update-a-person)
  - [Delete a Person](#delete-a-person)
- [Request and Response Formats](#request-and-response-formats)
- [Error Handling](#error-handling)
- [Contribution](#Contribution)
- [Deployment](#deployment)

## Introduction

This Node.js REST API project allows you to perform CRUD operations on person records. You can create, retrieve, update, and delete person records with ease. The API is built using Express.js and uses a MongoDB database for data storage.

## Getting Started

To run this application on your local machine, follow the steps below.

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js
- MongoDB (either locally or on a remote server)
- Git

### Installation

Clone the repository to your local machine (or download and unzip the ZIP file):

```bash
git clone https://github.com/hi-heavens/person-data-api.git
cd person-data-api
```

Install the required dependencies using npm:

`npm install`

Set up environment variables:

- Create a .env file in the project root and configure the following environment variables:
- PORT (Optional): Port for the server to listen on. Default is 3000.
- DATABASE (Required): MongoDB connection string or `mongodb://127.0.0.1:27017/person-data-api`
- PASSWORD (Optional): If you are using the production MONGO URI

Start the server:

```bash
node server.js
```

## Project Structure

The project follows a structured layout:

- config/database.js: MongoDB connection setup
- server.js: Entry point for the Node.js server.
- src/app.js: Express.js application setup.
- person/person.model.js: Mongoose schema for person records.
- person/person.route.js: API routes for person CRUD operations.
- person/person.controller.js: Controller functions for handling CRUD operations.
- services/: Folder containing utility functions and error handling middleware.

The API will be available at http://localhost:3000.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API Endpoints

### Create a New Person

<p><strong>Endpoint:</strong> POST /api/person</p>
<p>This endpoint create a new person record in the database.</p>

<p><strong>Request Body:</strong></p>

```json
{
  "name": "Alice",
  "age": 30,
  "gender": "female",
  "occupation": "Engineer",
  "employmentStatus": "employed"
}
```

<p><strong>Response:</strong> A JSON object with the created person record.</p>

### Get a Person by ID or Name

<p><strong>Endpoint:</strong> GET /api/:identifier</p>
<p>This endpoint retrieve a person's details by either their user ID or name saved in the database.
</p>
<p><strong>Response:</strong> A JSON object with a person record matching the provided ID or name.</p>

```json
{
  "status": true,
  "person": {
    "name": "Mike Essien",
    "age": 26,
    "gender": "male",
    "occupation": "Engineer",
    "employmentStatus": "self-employed"
  }
}
```

### Update a Person

<p><strong>Endpoint:</strong> PUT /api/:identifier</p>
<p>This endpoint update an existing person's details by either their user ID or name saved in the database.
</p>
<p><strong>Parameters:</strong> :identifier can be either the user ID or the person name saved in the database.</p>
<p><strong>Response:</strong> A JSON object with the updated person record.</p>

<p><strong>Request Body:</strong></p>

```json
{
  "name": "Abosede",
  "age": 27
}
```

<p><strong>Response Body:</strong></p>

```json
{
  "status": true,
  "updatedPerson": {
    "name": "Abosede",
    "age": 27,
    "gender": "female",
    "occupation": "20",
    "employmentStatus": "employed"
  }
}
```

### Delete a Person

<p><strong>Endpoint:</strong> DELETE /api/:identifier</p>
<p>This endpoint delete an existing person's record from the database.
</p>
<p><strong>Parameters:</strong> :identifier can be either the user ID or the person name saved in the database.</p>
<p><strong>Response:</strong> Returns a success message.</p>

### Request and Response Formats

- Request and response bodies should be in JSON format.
- Valid gender values: 'male', 'female', 'other'.
- Valid employmentStatus values: 'employed', 'unemployed', 'self-employed', 'student'.

### Error Handling

<p>The API handles errors gracefully and provides meaningful error messages for different scenarios.</p>

## Contribution

- Olaitan Adedokun
- Contributions are welcome! If you find any issues or want to add improvements, feel free to fork the repository and create a pull request.

## Deployment

The application has been deployed and is accessible at [baseURL](https://person-data-api.onrender.com/). When testing the deployed version, don't forget to add `api/` to the baseURL for accessing the API endpoints.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
