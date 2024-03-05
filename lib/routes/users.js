const { validate } = require("express-validation");
const { getAllUsers } = require("../controllers/users/get");
const tryCatch = require("../errors/tryCatch");
const {
  getAllUsers: getAllUsersValidation,
} = require("../validation/schemas/users");

function usersRoute(router) {
  router.get("/", validate(getAllUsersValidation), tryCatch(getAllUsers));
  return router;
}

module.exports = usersRoute;
