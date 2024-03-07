const { signUpService } = require("../../services/account/auth");

async function signUp(req, res) {
  const { firstName, lastName, email, password, username } = req.body;

  await signUpService({ firstName, lastName, email, password, username });
  res.status(200).json({
    message: `New user successfully created!`,
  });
}

module.exports = { signUp };
