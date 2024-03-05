const Joi = require("joi");

const getAllUsers = {
  body: Joi.object().unknown(false),
};

module.exports = { getAllUsers };
