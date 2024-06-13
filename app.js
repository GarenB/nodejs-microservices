const express = require("express");
const dotenv = require("dotenv").config({ silent: true });

// routes imports
const accountRoute = require("./lib/routes/account");
const usersRoute = require("./lib/routes/users");
const tasksRoute = require("./lib/routes/tasks");
const draftsRoute = require("./lib/routes/drafts");

const DefaultRouter = require("./lib/routers/default");
const AuthenticatedRouter = require("./lib/routers/authenticated");
const errorHandlerMiddleware = require("./lib/errors/errorHandlerMiddleware");

const { connect } = require("./lib/db");

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Create mongodb connection
connect();

// routes
app.use("/account", accountRoute(DefaultRouter()));
app.use("/users", usersRoute(AuthenticatedRouter()));
app.use("/tasks", tasksRoute(AuthenticatedRouter()));
app.use("/drafts", draftsRoute(AuthenticatedRouter()));

errorHandlerMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
