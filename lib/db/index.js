const mongoose = require("mongoose");

const {
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_HOST,
  MONGODB_PORT,
  MONGODB_DATABASE,
} = process.env;

const connect = () => {
  const auth = MONGODB_USERNAME
    ? `${MONGODB_USERNAME}:${MONGODB_PASSWORD}@`
    : "";

  mongoose.connect(
    `mongodb://${auth}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = { connect };
