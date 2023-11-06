import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Configure middleware (body-parser, cors, etc.)

// Add routes (listRoutes, sharedListRoutes, authRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
