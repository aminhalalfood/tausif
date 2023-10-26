const express = require("express");
const app = express();
const path = require("path");

// Serve static files (assets folder)
app.use(express.static(path.join(__dirname, "assets")));

// Route 1
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route 2
app.get("/______birthday________", (req, res) => {
  res.sendFile(path.join(__dirname, "birthday.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
