# Product Store - MERN Stack Application

A full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage products with CRUD operations.

## Features

- 📝 Create new products with name, price, and image URL
- 📖 View all products in a responsive grid layout
- ✏️ Update existing product details
- 🗑️ Delete products
- 🌓 Dark/Light mode toggle
- 💪 Responsive design for all screen sizes

## Tech Stack

### Frontend
- React.js with Vite
- Chakra UI for styling
- React Router for navigation
- Zustand for state management
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

## Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies for both backend and frontend
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB URI
```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

4. Run the development server
```bash
# Run backend and frontend concurrently
npm run dev
```

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

```
mern-crash-course/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── .env
└── package.json
```

## Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the frontend for production
- `npm start` - Start the production server

## Contributing

Feel free to open issues and pull requests!