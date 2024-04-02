const express = require("express");
const dotenv = require("dotenv").config({ silent: true });

// routes imports
const accountRoute = require("./lib/routes/account");
const usersRoute = require("./lib/routes/users");

const DefaultRouter = require("./lib/routers/default");
const AuthenticatedRouter = require("./lib/routers/authenticated");
const errorHandlerMiddleware = require("./lib/errors/errorHandlerMiddleware");

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// routes
app.use("/account", accountRoute(DefaultRouter()));
app.use("/users", usersRoute(AuthenticatedRouter()));

errorHandlerMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
