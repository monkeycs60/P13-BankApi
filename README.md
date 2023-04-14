# Project #13 - Argent Bank API

![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-%23404d59?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-%23282C34?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-%23000000?style=for-the-badge&logo=vite&logoColor=white)

![Author](https://img.shields.io/badge/Author-Cl%C3%A9ment%20Serizay-blue?style=for-the-badge)

This project aims to use a bank API using Node.js, Express and MongoDB and connect it to a React front-end using Vite.
It uses basic create, read and update operations. User can login, navigate on profile page, update his profile and logout.

Sign In is not implemented yet. The user can log in with the following credentials:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [API Documentation](#api-documentation)

## Installation

- Backend installation:

  ```bash
  cd Project-10-Bank-API
  ```

  ```bash
  # Install dependencies
  npm install

  # Start local dev server
  npm run dev:server

  # Populate database with two users
  npm run populate-db
  ```

  The backend runs on port 3001.

  ```bash
  # Then, as the database is updated, shut down the server with Ctrl+C
  ```

- Frontend installation:

  ```bash
  cd front-end
  ```

  ```bash
  npm install
  ```

- Run the app (using concurrently):

  Run the following command in the root of the project:

  ```bash
  npm run start
  ```

  Open your preferred web browser and navigate to

  ```bash
  http://127.0.0.1:5173/
  ```

  **Vite** will automatically open the browser for you

  ## Prerequisites

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

  ## API Documentation

  The API documentation is available locally [here](http://localhost:3001/api-docs/).

  ## Authors

  - [@ClementSerizay](https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/ "Clement Serizay's LinkedIn profile")
