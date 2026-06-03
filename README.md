# Scalable REST API with Authentication & Role-Based Access Control

## Overview

This project is a full-stack Task Management System built using Node.js, Express.js, MySQL, Sequelize, React, and JWT Authentication. It demonstrates scalable backend architecture, secure authentication, role-based authorization, CRUD operations, API documentation, and frontend integration.

The application allows users to register, log in, manage their tasks, and access protected resources. Administrators have additional privileges through role-based access control.

---

## Features

### Authentication & Security

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes
* Role-Based Authorization (User/Admin)
* Request Validation using express-validator

### Task Management

* Create Task
* View All Tasks
* View Single Task
* Update Task Status
* Delete Task
* User-specific task ownership

### API Features

* RESTful API Design
* API Versioning (`/api/v1`)
* Centralized Error Handling
* Input Validation
* Swagger API Documentation

### Frontend

* React + Vite
* Login & Registration Pages
* Protected Dashboard
* Task Management UI
* JWT Token Storage
* Axios API Integration

### Database

* MySQL
* Sequelize ORM
* User & Task Relationships

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MySQL
* Sequelize
* JWT
* bcryptjs
* express-validator
* Swagger

### Frontend

* React.js
* Vite
* React Router DOM
* Axios

### Tools

* Git
* GitHub
* Postman
* Swagger UI

---

## Project Structure

```text
scalable-rest-api
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── validators
│   │   ├── docs
│   │   └── utils
│   │
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── routes
│   │   └── components
│
│   └── vite.config.js
│
└── README.md
```

---

## Database Schema

### User

| Field    | Type       |
| -------- | ---------- |
| id       | Integer    |
| name     | String     |
| email    | String     |
| password | String     |
| role     | user/admin |

### Task

| Field       | Type                          |
| ----------- | ----------------------------- |
| id          | Integer                       |
| title       | String                        |
| description | Text                          |
| status      | pending/in-progress/completed |
| userId      | Integer                       |

---

## API Endpoints

### Authentication

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | /api/v1/auth/register |
| POST   | /api/v1/auth/login    |
| GET    | /api/v1/auth/profile  |

### Admin

| Method | Endpoint                |
| ------ | ----------------------- |
| GET    | /api/v1/admin/dashboard |

### Tasks

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/v1/tasks     |
| GET    | /api/v1/tasks     |
| GET    | /api/v1/tasks/:id |
| PUT    | /api/v1/tasks/:id |
| DELETE | /api/v1/tasks/:id |

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd scalable-rest-api
```

### Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=scalable_api
DB_USER=root
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

Start backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Swagger Documentation

Access Swagger UI:

```text
http://localhost:5000/api-docs
```

---

## Security Features

* Password hashing using bcryptjs
* JWT-based authentication
* Role-based access control
* Protected API routes
* Request validation
* User-specific resource ownership

---

## Future Improvements

* Docker Deployment
* Redis Caching
* Refresh Tokens
* Email Verification
* Password Reset
* CI/CD Pipeline
* Unit & Integration Testing
* Cloud Deployment (AWS/Azure/GCP)

---

## Learning Outcomes

This project demonstrates:

* Backend API Development
* Authentication & Authorization
* Database Design
* REST API Architecture
* Full-Stack Integration
* Secure Coding Practices
* Scalable Project Structure

---

