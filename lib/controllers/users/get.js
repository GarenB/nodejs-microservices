const {
  getAllUsersService,
  getUserByIdService,
} = require("../../services/users/get");

async function getAllUsers(req, res) {
  const users = await getAllUsersService();
  res.status(200).json(users);
}

async function getUserById(req, res) {
  const { id } = req.params;

  const user = await getUserByIdService(id);
  res.status(200).json(user);
}

module.exports = { getAllUsers, getUserById };
