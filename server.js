const express = require("express");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/messageRoutes");
const cors = require("cors"); // Import cors

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Allow all origins (open access)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mount your routes
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
