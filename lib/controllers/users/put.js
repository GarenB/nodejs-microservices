const { editUserService } = require("../../services/users/put");

async function editUser(req, res) {
  const { firstName, lastName, email, password, username } = req.body;
  const { id } = req.params;

  await editUserService({
    firstName,
    lastName,
    email,
    password,
    username,
    userId: id,
  });
  res.status(200).json({
    message: `Data of user with id ${id} has been successfully updated!`,
  });
}

module.exports = { editUser };
