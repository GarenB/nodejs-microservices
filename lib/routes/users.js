const { validate } = require("express-validation");

const tryCatch = require("../errors/tryCatch");

//controllers
const { getAllUsers, getUserById } = require("../controllers/users/get");

// validation
const {
  getAllUsers: getAllUsersValidation,
  getUserById: getUserByIdValidation,
} = require("../validation/schemas/users");

function usersRoute(router) {
  router.get("/", validate(getAllUsersValidation), tryCatch(getAllUsers));
  router.get("/:id", validate(getUserByIdValidation), tryCatch(getUserById));
  return router;
}

module.exports = usersRoute;
