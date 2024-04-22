const { validate } = require("express-validation");
const { createTask } = require("../controllers/tasks/post");

const tryCatch = require("../errors/tryCatch");

//controllers

// validations

function tasksRoute(router) {
  router.post("/create", tryCatch(createTask));
  return router;
}

module.exports = tasksRoute;
