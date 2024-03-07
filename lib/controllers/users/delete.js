const { deleteUsersService } = require("../../services/users/delete");

async function deleteUser(req, res) {
  const { id } = req.params;

  await deleteUsersService(id);
  res.status(200).json({
    message: `Data of user with id ${id} has been successfully deleted!`,
  });
}

module.exports = { deleteUser };
