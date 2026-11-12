# MERN Product Store

A full-stack product catalogue built with the MERN stack: users register and log in, then browse, create, edit and delete products.

## Features

- **Authentication:** register and login with hashed passwords (bcryptjs) and **JWT** tokens; protected routes through an auth middleware.
- **Products CRUD:** REST API to list, create, update and delete products (name, price, image).
- **Input validation** with express-validator.
- **React front end:** home page with product cards, create page, login and register pages, light/dark mode.
- **State management** with Zustand.

## Tech stack

**Back end:** Node.js · Express · MongoDB · Mongoose · JWT · bcryptjs · express-validator
**Front end:** React 19 · Vite · Chakra UI · React Router · Zustand

## Project structure

```
backend/
  config/db.js          MongoDB connection
  models/               Product, User
  controllers/          product and user logic
  routes/               /api/products, /api/auth
  middleware/           JWT auth check
  server.js
frontend/
  src/pages/            HomePage, CreatePage, LoginPage, RegisterPage
  src/components/       Navbar, ProductCard
  src/store/product.js  Zustand store
```

## Run it locally

Requirements: Node.js 18+ and MongoDB.

```bash
cp .env.example .env      # then set MONGO_URI, PORT and JWT_SECRET
npm install
npm run dev               # API on http://localhost:5000

cd frontend
npm install
npm run dev               # React app on http://localhost:5173
```

## Author

Ridha Lezzar · [LinkedIn](https://linkedin.com/in/ridha-lezzar-8322222b5)
