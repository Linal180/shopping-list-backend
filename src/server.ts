import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import * as dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import listRoutes from "./routes/listRoutes";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allowed all origins for now
app.use(cors({
    origin: ["*"]
}));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/shoppingDB", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err: Error) => console.log(err));

app.use("/auth", authRoutes);
app.use("/list", listRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});