const { validate } = require("express-validation");
const { signUp } = require("../controllers/account/auth");
const tryCatch = require("../errors/tryCatch");

const { signUp: singUpValidation } = require("../validation/schemas/account");

function accountRoute(router) {
  router.post("/signup", validate(singUpValidation), tryCatch(signUp));
  return router;
}

module.exports = accountRoute;
