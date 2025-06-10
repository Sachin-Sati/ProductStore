# Product Store - MERN Stack Application

A full-stack e-commerce application built with MongoDB, Express.js, React.js, Node.js that allows users to manage products with CRUD operations. 

Live demo: [Product Store](https://productstorebackend.onrender.com)

## Features

- 📝 Create new products with name, price, and image URL
- 📖 View all products in a responsive grid layout
- ✏️ Update existing product details
- 🗑️ Delete products
- 🌓 Dark/Light mode toggle
- 💪 Responsive design for all screen sizes
- 🚀 Deployed on Render.com

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
- CORS for cross-origin resource sharing

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

3. Create environment files:

Root directory `.env`:
```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

Frontend directory `.env`:
```env
VITE_APP_API_URL=https://productstorebackend.onrender.com
```

4. Run the development server
```bash
# Run backend
npm run dev

# Run frontend (in a separate terminal)
cd frontend
npm run dev
```

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

```
product-store/
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
│   ├── .env
│   └── package.json
├── .env
└── package.json
```

## Scripts

- `npm run dev` - Run the development server with nodemon
- `npm run build` - Build the frontend for production
- `npm start` - Start the production server
- `npm run preview` - Preview the production build locally

## Deployment

The application is deployed on Render.com with the following configuration:

1. Backend Service:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     - `NODE_ENV=production`
     - `MONGO_URI=your_mongodb_uri`
     - `PORT=10000`

2. Frontend Static Site:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Environment Variables:
     - `VITE_APP_API_URL=https://productstorebackend.onrender.com`

## Contributing

Feel free to open issues and pull requests!

## License

ISC