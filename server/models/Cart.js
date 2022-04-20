const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        amount: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cart", schema);
