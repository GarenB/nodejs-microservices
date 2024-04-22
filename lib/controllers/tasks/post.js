const Task = require("../../db/schemas/tasks");
const { isUserIdAndTokenValid } = require("../../services/tasks/get");

async function createTask(req, res) {
  const { user_id, title } = req.body;

  const data = {
    user_id,
    title,
  };

  const isUserValid = await isUserIdAndTokenValid(
    user_id,
    req.headers.authorization.split(" ")[1]
  );

  if (!isUserValid) {
    throw new Error(`user id and token do not match`);
  }

  // create task on mongodb
  await Task.create(data);

  res.status(200).json({
    message: `New task successfully created!`,
  });
}

module.exports = { createTask };
