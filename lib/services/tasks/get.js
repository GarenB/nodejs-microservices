const isEmpty = require("lodash/isEmpty");
const jwt = require("jsonwebtoken");

const User = require("../../db/schemas/users");

// check if user id and token match
async function isUserIdAndTokenValid(userId, token) {
  const user = await User.findOne({ id: userId });

  if (isEmpty(user)) throw new Error(`user with id ${userId} not found`);

  const decodedToken = jwt.decode(token);

  const userIdFromToken = decodedToken.sub;

  return userIdFromToken && userIdFromToken === user.keycloak_id;
}

module.exports = { isUserIdAndTokenValid };
