const Draft = require("../../db/schemas/draft");
const { isUserIdAndTokenValid } = require("../../services/tasks/get");

async function deleteDraft(req, res) {
  const { user_id } = req.body;
  const { id } = req.params;

  const isUserValid = await isUserIdAndTokenValid(
    user_id,
    req.headers.authorization.split(" ")[1]
  );

  if (!isUserValid) {
    return res.status(403).json({
      message: `User id and token do not match`,
    });
  }

  if (id) {
    const draft = await Draft.findOne({ id, user_id });

    if (draft) {
      await Draft.deleteOne({ id, user_id });

      return res.status(200).json({
        message: `Draft successfully deleted!`,
      });
    } else {
      return res.status(404).json({
        message: `Draft not found!`,
      });
    }
  }

  return res.status(400).json({
    message: `Draft id is required`,
  });
}

module.exports = { deleteDraft };
