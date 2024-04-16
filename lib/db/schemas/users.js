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
  },
  { timestamps: true }
);

userSchema.plugin(AutoIncrement, { inc_field: "id" });
module.exports = mongoose.model("User", userSchema);
