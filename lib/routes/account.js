const { signUp } = require("../controllers/account/auth");

function accountRoute(router) {
  router.post("/signup", signUp);
  return router;
}

module.exports = accountRoute;
