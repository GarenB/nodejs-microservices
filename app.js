const express = require("express");
const dotenv = require("dotenv").config({ silent: true });

// routes imports
const accountRoute = require("./lib/routes/account");
const usersRoute = require("./lib/routes/users");

const defaultRouter = require("./lib/routers/default");
const errorHandlerMiddleware = require("./lib/errors/errorHandlerMiddleware");

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// routes
app.use("/account", accountRoute(defaultRouter()));
app.use("/users", usersRoute(defaultRouter()));

errorHandlerMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
