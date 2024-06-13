const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const TypeSchema = new Schema({
  id: { type: Number, required: true },
  description: { type: String, required: true },
});

const draftSchema = new Schema(
  {
    title: { type: String, required: true },
    type: {
      type: TypeSchema,
      required: true,
    },
    content: { type: String, required: true },
    user_id: { type: Number, required: true },
    id: { type: Number, index: true, required: false },
  },
  { timestamps: true }
);

draftSchema.plugin(AutoIncrement, { id: "draft_id_counter", inc_field: "id" });
module.exports = mongoose.model("Draft", draftSchema);
