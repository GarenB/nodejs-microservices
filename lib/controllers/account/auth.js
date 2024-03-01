const signUpService = require("../../services/account/auth");

async function signUp(req, res) {
  const { firstName, lastName, email, password, username } = req.body;

  await signUpService({ firstName, lastName, email, password, username });
  res.statusCode = 200;
  res.end();
}

module.exports = { signUp };
