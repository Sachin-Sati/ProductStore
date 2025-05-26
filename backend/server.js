// Import necessary modules
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from 'path';

// Import route handlers
import productRoutes from "./routes/product.route.js";

// Load environment variables from .env file
dotenv.config();

// Determine the environment (development or production)
const environment = process.env.NODE_ENV || 'development';
console.log(`Running in ${environment} mode`);

// Initialize Express app
const app = express();

// CORS - Express app allows requests from frontend
const cors = require("cors");

app.use(cors({
  origin: "https://product-store-frontend-pbjtnljbk-sachin-satis-projects.vercel.app/",
  credentials: true
}));


// Set the port from environment variable or use 5000 by default
const PORT = process.env.PORT || 5000;

// Get absolute path of the current directory (needed for static files)
const __dirname = path.resolve();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// // Serve static files from the frontend build folder if in production
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

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
