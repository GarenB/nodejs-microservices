const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const validateToken = require("../utils/auth");
const tryCatch = require("../errors/tryCatch");

const AuthenticatedRouter = function () {
  const router = new express.Router();
  router.use(cors());
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json({ limit: "5mb" }));
  router.use(express.static("public"));

  router.all("/*", tryCatch(validateToken));

  return router;
};

module.exports = AuthenticatedRouter;
