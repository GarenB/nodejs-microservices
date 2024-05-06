const { getUserIdFromToken } = require("../../utils/token");
const { getUserById } = require("../../utils/users");

// check if user id and token match
async function isUserIdAndTokenValid(userId, token) {
  const user = await getUserById(userId);

  const userIdFromToken = getUserIdFromToken(token);

  return userIdFromToken && userIdFromToken === user.keycloak_id;
}

module.exports = { isUserIdAndTokenValid };
