const express = require("express");
const dotenv = require("dotenv").config({ silent: true });

const accountRoute = require("./lib/routes/account");
const defaultRouter = require("./lib/routers/default");
const errorHandlerMiddleware = require("./lib/errors/errorHandlerMiddleware");

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

app.use("/account", accountRoute(defaultRouter()));

errorHandlerMiddleware(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
