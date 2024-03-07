const { validate } = require("express-validation");

const tryCatch = require("../errors/tryCatch");

//controllers
const { getAllUsers, getUserById } = require("../controllers/users/get");
const { editUser } = require("../controllers/users/put");
const { deleteUser } = require("../controllers/users/delete");

// validations
const {
  getAllUsers: getAllUsersValidation,
  getUserById: getUserByIdValidation,
} = require("../validation/schemas/users/get");
const {
  editUser: editUserValidation,
} = require("../validation/schemas/users/put");
const {
  deleteUser: deleteUserValidation,
} = require("../validation/schemas/users/delete");

function usersRoute(router) {
  router.get("/", validate(getAllUsersValidation), tryCatch(getAllUsers));
  router.get("/:id", validate(getUserByIdValidation), tryCatch(getUserById));
  router.put("/:id", validate(editUserValidation), tryCatch(editUser));
  router.delete("/:id", validate(deleteUserValidation), tryCatch(deleteUser));
  return router;
}

module.exports = usersRoute;
