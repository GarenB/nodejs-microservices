const { validate } = require("express-validation");

const tryCatch = require("../errors/tryCatch");

//controllers

// validations

function tasksRoute(router) {
  router.post("/create", validate(), tryCatch(createTask));
  return router;
}

module.exports = tasksRoute;
