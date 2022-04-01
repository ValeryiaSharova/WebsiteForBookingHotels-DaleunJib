const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumbr: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
