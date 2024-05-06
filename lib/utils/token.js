const jwt = require("jsonwebtoken");

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.decode(token);

  return decodedToken.sub;
};

module.exports = {
  getUserIdFromToken,
};
