const Draft = require("../../db/schemas/draft");
const { isUserIdAndTokenValid } = require("../../services/tasks/get");

async function createDraft(req, res) {
  const { user_id, title, type, content = "", id } = req.body;

  const data = {
    user_id,
    title,
    type,
    content,
  };

  const isUserValid = await isUserIdAndTokenValid(
    user_id,
    req.headers.authorization.split(" ")[1]
  );

  if (!isUserValid) {
    throw new Error(`user id and token do not match`);
  }

  if (id) {
    const updatedDraft = await Draft.findOneAndUpdate({ id }, data, {
      new: true,
    });

    return res.status(200).json({
      message: `Draft successfully updated!`,
      draft: updatedDraft,
    });
  }

  // create task on mongodb
  await Draft.create(data);

  return res.status(200).json({
    message: `New draft successfully created!`,
  });
}

module.exports = { createDraft };
