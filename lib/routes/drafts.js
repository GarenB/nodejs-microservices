const { validate } = require("express-validation");
const { createDraft } = require("../controllers/drafts/post");
const { deleteDraft } = require("../controllers/drafts/delete");

const tryCatch = require("../errors/tryCatch");

//controllers
const { getAllDraftsByUserId } = require("../controllers/drafts/get");

// validations

function draftsRoute(router) {
  router.get("/:id", tryCatch(getAllDraftsByUserId));
  router.post("/create", tryCatch(createDraft));
  router.delete("/:id", tryCatch(deleteDraft));
  return router;
}

module.exports = draftsRoute;
