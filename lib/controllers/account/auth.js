const { signUpService, signInService } = require("../../services/account/auth");

async function signIn(req, res) {
  const { password, username } = req.body;

  const token = await signInService({ password, username });

  res.status(200).json({
    message: `User successfully signed in!`,
    token,
  });
}

async function signUp(req, res) {
  const { firstName, lastName, email, password, username } = req.body;

  await signUpService({ firstName, lastName, email, password, username });
  res.status(200).json({
    message: `New user successfully created!`,
  });
}

module.exports = { signUp, signIn };
