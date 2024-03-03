const Joi = require("joi");

const signUp = {
  body: Joi.object()
    .keys({
      username: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    })
    .unknown(false),
};

module.exports = { signUp };
