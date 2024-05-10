const { validate } = require("express-validation");
const { createTask } = require("../controllers/tasks/post");

const tryCatch = require("../errors/tryCatch");

//controllers
const { getAllTasks } = require("../controllers/tasks/get");

// validations

function tasksRoute(router) {
  router.get("/", tryCatch(getAllTasks));
  router.post("/create", tryCatch(createTask));
  return router;
}

module.exports = tasksRoute;
