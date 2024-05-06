const isEmpty = require("lodash/isEmpty");

const User = require("../db/schemas/users");

const getUserById = async (id) => {
  const user = await User.findOne({ id });

  if (isEmpty(user)) throw new Error(`user with id ${id} not found`);

  return user;
};

const getUserByKeycloakId = async (keycloak_id) => {
  const user = await User.findOne({
    keycloak_id,
  });

  if (isEmpty(user))
    throw new Error(`user with keycloak id ${keycloak_id} not found`);

  return user;
};

module.exports = {
  getUserById,
  getUserByKeycloakId,
};
