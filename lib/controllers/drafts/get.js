const Draft = require("../../db/schemas/draft");

const getAllDraftsByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const drafts = await Draft.find({ user_id: id });
    res.json(drafts);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

module.exports = { getAllDraftsByUserId };
