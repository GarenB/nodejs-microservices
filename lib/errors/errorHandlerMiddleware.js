const errorHandler = require("errorhandler");
const { ValidationError } = require("express-validation");

const errorHandlerMiddleware = function (app) {
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      console.error(JSON.stringify(err.details));
    }
    next(err);
  });

  if (process.env.ENV === "dev") {
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!");
    });
  }
};

module.exports = errorHandlerMiddleware;
