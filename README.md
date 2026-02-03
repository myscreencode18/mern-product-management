## MERN Product Management Application

## Overview

This is a full-stack **MERN (MongoDB, Express, React, Node.js)** product management application built as a technical assignment. The application provides a **public product viewing experience** and a **secure admin panel** for managing products.

The system is designed with **real-world best practices**, including JWT authentication, protected routes, role-based access (admin-only CRUD), validation, and a modern responsive UI using Material-UI.

---

## Key Features

### Public Features

* Home page with hero section
* Product listing page
* Product detail page
* Image gallery with clickable thumbnails (slider)
* Rich text product description rendering

### Admin Features

* Secure admin login (JWT-based authentication)
* One-time admin signup (only first admin allowed)
* Protected admin routes (frontend + backend)
* Admin dashboard with product list
* Add new product
* Edit existing product
* Delete product with confirmation
* Snackbar/toast notifications for actions

---

## Tech Stack

### Backend

* Node.js
* Express.js (ES Modules)
* MongoDB + Mongoose
* JWT Authentication
* express-validator (field validation)
* Helmet.js (basic security headers)

### Frontend

* React.js (Vite)
* React Router DOM
* Axios (API calls)
* Material-UI (MUI)
* CKEditor (Rich text editor)

---

## Application Architecture

### Authentication Flow

1. First admin signs up (only once allowed)
2. Admin logs in and receives JWT token
3. Token stored in localStorage
4. Token automatically attached to all API requests using Axios interceptor
5. Protected routes validated on frontend and backend

---

##  Route Protection

### Frontend

* Implemented using `ProtectedRoute`
* Redirects unauthenticated users to `/login`

### Backend

* JWT middleware verifies admin token
* Only authenticated admin can access product CRUD APIs

---

## Product Management (CRUD)

### Create Product

* Admin-only
* Validated fields:

  * Meta title
  * Product name
  * Slug
  * Gallery images
  * Price
  * Discounted price
  * Description (rich text)

### Read Products

* Public: product list & product detail
* Admin: product list in dashboard

### Update Product

* Admin-only
* PATCH request with partial updates
* Separate validation rules for update

### Delete Product

* Admin-only
* Confirmation dialog before deletion
* Snackbar feedback after action

---

## Image Slider (Product Detail Page)

* Displays product gallery images
* Thumbnail click updates main image
* Fully responsive

---

## Forms & Validation

### Frontend

* Controlled components using `useState`
* CKEditor integrated as controlled input

### Backend

* Validation implemented using `express-validator`
* Separate validation rules for create and update

---

##  User Feedback

* Material-UI Snackbar & Alert
* Used for:

  * Product creation
  * Product update
  * Product deletion
  * Error handling

---

## API Integration

* Axios used for all async operations
* Centralized Axios instance
* JWT token injected via interceptor

---

## Responsiveness & Accessibility

* Material-UI Grid system
* Responsive layouts for mobile & desktop
* Accessible buttons, forms, and alerts

---

## How to Run the Project

### Backend

```bash
npm install
npm run dev
```

### Frontend

```bash
npm install
npm run dev
```

---

## Assignment Requirements Coverage

| Requirement      | Status |
| ---------------- | ------ |
| React setup      | ✅      |
| Routing          | ✅      |
| UI components    | ✅      |
| Forms            | ✅      |
| Image slider     | ✅      |
| Async CRUD       | ✅      |
| Validation       | ✅      |
| Auth (JWT)       | ✅      |
| Protected routes | ✅      |
| Responsive UI    | ✅      |

---

## Conclusion

This project demonstrates a complete MERN stack application with secure authentication, admin-only product management, modern UI/UX practices, and clean frontend-backend integration. The architecture and implementation closely follow real-world production standards.


