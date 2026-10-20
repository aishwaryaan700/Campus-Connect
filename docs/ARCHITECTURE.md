# Campus Connect — Architecture

## 1. Overview

Campus Connect is planned as a web application with a separate frontend, backend, and database.

## 2. Components

### Frontend
Location: `frontend/`

Technologies: HTML, CSS, JavaScript.

Responsibility: Display pages, collect user input, perform basic interface validation, and communicate with backend APIs.

### Backend
Location: `backend/`

Technologies: Java, Spring Boot.

Responsibility: Validate requests, apply business rules, enforce permissions, and expose REST APIs that exchange JSON.

### Database
Location: `database/`

Technology: MySQL and SQL.

Responsibility: Store structured campus data such as students, educators, courses, attendance, and marks.

## 3. Request Flow

1. A user interacts with a frontend page.
2. JavaScript sends an HTTP request to a backend API.
3. Spring Boot processes the request.
4. The backend accesses MySQL when data needs to be stored or retrieved.
5. The backend returns an HTTP response, commonly containing JSON.
6. The frontend displays the result.

## 4. Development Approach

Each feature will be implemented incrementally, tested, and documented before being considered complete.

## 5. Current Status

Architecture documented. Frontend, backend, and database implementation are not yet complete.