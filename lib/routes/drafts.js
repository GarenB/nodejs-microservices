const { validate } = require("express-validation");
const { createDraft } = require("../controllers/drafts/post");

const tryCatch = require("../errors/tryCatch");

//controllers
const { getAllDraftsByUserId } = require("../controllers/drafts/get");

// validations

function draftsRoute(router) {
  router.get("/:id", tryCatch(getAllDraftsByUserId));
  router.post("/create", tryCatch(createDraft));
  return router;
}

module.exports = draftsRoute;
