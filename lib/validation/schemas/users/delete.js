const Joi = require("joi");

const deleteUser = {
  body: Joi.object().unknown(false),
};

module.exports = { deleteUser };
