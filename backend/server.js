// Import necessary modules
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cors from "cors";
import productRoutes from "./routes/product.route.js";

// Load environment variables from .env file
dotenv.config();

// Determine the environment (development or production)
const environment = process.env.NODE_ENV || 'development';
console.log(`Running in ${environment} mode`);

// Initialize Express app
const app = express();

// CORS - Express app allows requests from frontend
const corsOptions = {
  origin: ['http://localhost:5173', 'https://product-store-frontend-pr2csfbe8-sachin-satis-projects.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};
app.use(cors(corsOptions));

// Set the port from environment variable or use 5000 by default
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// Connect to MongoDB, then start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started at http://localhost:" + PORT);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit if DB connection fails
    });
