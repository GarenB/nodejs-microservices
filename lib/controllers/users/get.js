const { getAllUsersService } = require("../../services/users/get");

async function getAllUsers(req, res) {
  const users = await getAllUsersService();
  res.status(200).json(users);
}

module.exports = { getAllUsers };
