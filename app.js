// index.js

// Import required modules
const express = require("express");

const accountRoute = require("./lib/routes/account");
const defaultRouter = require("./lib/routers/default");

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

app.use("/account", accountRoute(defaultRouter()));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
