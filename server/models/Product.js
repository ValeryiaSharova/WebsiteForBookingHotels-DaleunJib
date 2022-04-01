const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    description: String,
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
