import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

import productRoutes from "./routes/product.route.js";

dotenv.config();

const environment = process.env.NODE_ENV || 'development';
console.log(`Running in ${environment} mode`);

const app = express();

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());    // allows us to accept json data in req.body

app.use("/api/products", productRoutes);

// if env -> production, set dist folder as static folder
if (process.env.NODE_ENV === 'production') {
    const frontendBuildPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(frontendBuildPath));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendBuildPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});

// JKtw64nl4B1W2I4R - MongoDB Cluster Password