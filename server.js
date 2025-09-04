// Import express
const express = require("express");

// Create an express app
const app = express();

// Set a port
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Server is running...");
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});