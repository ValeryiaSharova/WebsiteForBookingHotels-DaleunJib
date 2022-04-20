const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const list = await Product.find();
      res.status(200).send(list);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newProduct = await Product.create({ ...req.body });
      res.status(200).send(newProduct);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  });

router
  .route("/:id")
  .delete(auth, async (req, res) => {
    try {
      const { id } = req.params;
      const removedProduct = await Product.findById(id);
      await removedProduct.remove();
      res.status(200).send(null);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  })
  .patch(auth, async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(updatedProduct);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  });

module.exports = router;
