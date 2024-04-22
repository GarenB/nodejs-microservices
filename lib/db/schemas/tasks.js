const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: String,
    user_id: Number,
    id: { type: Number, index: true },
  },
  { timestamps: true }
);

taskSchema.plugin(AutoIncrement, { id: "task_id_counter", inc_field: "id" });
module.exports = mongoose.model("Task", taskSchema);
