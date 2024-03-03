const errorHandler = require("errorhandler");

const errorHandlerMiddleware = function (app) {
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
