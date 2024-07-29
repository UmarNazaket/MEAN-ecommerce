# MEAN E-commerce Application

This project is a full-stack e-commerce application built with the MEAN (MongoDB, Express, Angular, Node.js) stack. It includes both backend and frontend parts.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [License](#license)

## Features

- User authentication (login, registration)
- Product listing
- Shopping cart functionality
- Order management
- Responsive design

## Technologies

- **Frontend**: Angular
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: SCSS

## Setup

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/mean-ecommerce.git
   cd mean-ecommerce
   ```

2. **Backend Setup**

   ```sh
   cd backend
   npm install
   ```

3. **Frontend Setup**

   ```sh
   cd ../client
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the `backend` directory and add your MongoDB URI and other environment variables:

   ```env
   MONGO_URI=your_mongo_db_uri
   PORT=5000
   ```

## Usage

1. **Start MongoDB**

   Make sure your MongoDB server is running.

2. **Start the Backend Server**

   ```sh
   cd backend
   npm start
   ```

   The backend server will start on `http://localhost:5000`.

3. **Start the Frontend Server**

   ```sh
   cd ../client
   npm start
   ```

   The frontend application will start on `http://localhost:4200`.

## Folder Structure

```
mean-ecommerce/
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── node_modules/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── sql_dump.sql
├── client/
│   ├── e2e/
│   ├── node_modules/
│   ├── src/
│   ├── .browserslistrc
│   ├── .editorconfig
│   ├── .gitignore
│   ├── angular.json
│   ├── karma.conf.js
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   ├── tslint.json
│   ├── 1.gif
│   └── 2.gif
├── .gitignore
└── README.md
```

## Scripts

### Backend

- `npm start`: Starts the backend server in production mode.
- `npm run dev`: Starts the backend server in development mode with nodemon.

### Frontend

- `npm start`: Starts the Angular development server.
- `npm run build`: Builds the Angular application for production.
- `npm test`: Runs the unit tests.
- `npm run lint`: Runs the linter.

Customize it further according to your project's specifics and requirements.
