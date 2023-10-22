# Multi-step-form-with-Backend

The **Multi-step-form-with-Backend** is a Node.js app that allows you to create a user after a multi step from process. It's built using Express.js and MongoDB. The frontend is from another project i made: [Multi-step Form](https://github.com/GeorgeStampou/Multi-step-form). The new user are now saved at a database.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features
- **Step-by-Step Registration**: The form is divided into multiple steps, ensuring users provide necessary details one step at a time.

- **Input Validation**: All input fields are validated to ensure the accuracy and completeness of data.

- **Terms of Service**: Users are required to accept the platform's Terms of Service to complete the registration.

- **Passwords saved Securely**: Passwords are securely hashed and stored in the database.

## Prerequisites
Before you get started, make sure you have the following installed:

- Node.js
- MongoDB (create an account at mongodb.com and create a database)
- Git (optional)

## Installation

To use the NotesApp-with-Backend locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GeorgeStampou/Multi-step-form-with-Backend.git

2. Open the project directory:
   
   ```bash
   cd Multi-step-form-with-Backend-main

3. Install the project dependencies:

   ```bash
   npm install
4. Create a `.env` file in the project root and add your environment variables, e.g.:
   ```env
   PORT = some port number (like 3000 or 5000)
   MONGO_URI = your string to connect to the database

## Usage

1. Start the server:
   ```bash
   node app.js
2. The app will be available at `http://localhost:whatever port you add at the .env file` when you see a message at your command window like: `Server is listening on port port_number...`
3. You can now interact with the app. After you register a new user, informations are now kept at your database.
