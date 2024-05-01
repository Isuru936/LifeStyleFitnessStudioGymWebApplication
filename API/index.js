import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import workoutRoutes from './routes/workoutRoutes.js';
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Remove the express.json() middleware
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // Specify the status code for successful preflight requests
}));

// Configure body-parser middleware
app.use(bodyParser.json({ limit: '1000mb' }));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// routes
app.use('/api', workoutRoutes);

mongoose.connect("mongodb+srv://isurugayantha:aRVY9kSNFxDNywDF@cluster0.xeoryue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));
