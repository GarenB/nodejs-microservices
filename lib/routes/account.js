const { signUp } = require("../controllers/account/auth");
const tryCatch = require("../errors/tryCatch");

function accountRoute(router) {
  router.post("/signup", tryCatch(signUp));
  return router;
}

module.exports = accountRoute;
