const { signUpService, signInService } = require("../../services/account/auth");
const { getUserIdFromToken } = require("../../utils/token");
const { getUserByKeycloakId } = require("../../utils/users");
const User = require("../../db/schemas/users");

async function signIn(req, res) {
  const { password, username } = req.body;

  const token = await signInService({ password, username });
  const userId = getUserIdFromToken(token);
  const user = await getUserByKeycloakId(userId);

  console.log(`User ${username} successfully signed in!`);

  res.status(200).json({
    message: `User successfully signed in!`,
    token,
    id: user?.id,
  });
}

async function signUp(req, res) {
  const { firstName, lastName, email, password, username } = req.body;

  // create user on keycloak
  const userData = await signUpService({
    firstName,
    lastName,
    email,
    password,
    username,
  });

  const data = {
    keycloak_id: userData.id,
    firstName,
    lastName,
    email,
    username,
  };

  // create user on mongodb
  await User.create(data);

  console.log(`New user successfully created with username ${username}`);

  res.status(200).json({
    message: `New user successfully created!`,
  });
}

module.exports = { signUp, signIn };
