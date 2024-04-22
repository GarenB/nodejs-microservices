const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    keycloak_id: String,
    id: { type: Number, index: true },
  },
  { timestamps: true }
);

userSchema.plugin(AutoIncrement, { id: "user_id_counter", inc_field: "id" });
module.exports = mongoose.model("User", userSchema);
