const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3009;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "react", "dist")));

// Route for serving the index.html file (or any other SPA-related routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "react", "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
