import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from 'path';

import productRoutes from "./routes/product.route.js";

dotenv.config();

const environment = process.env.NODE_ENV || 'development';
console.log(`Running in ${environment} mode`);

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());    // allows us to accept json data in req.body

app.use("/api/products", productRoutes);

// if env -> production, set dist folder as static folder
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Connect to DB first, then start server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server started at http://localhost:"+PORT);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1);
      });