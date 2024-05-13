const Task = require("../../db/schemas/tasks");

const getAllTasksByUserId = (req, res) => {
  const { id } = req.params;

  Task.find({ user_id: id }, (err, tasks) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ error: "Error fetching tasks" });
    }
    res.json(tasks);
  });
};

module.exports = { getAllTasksByUserId };
