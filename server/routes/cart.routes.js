const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .route("/:id")
  .get(auth, async (req, res) => {
    const { id } = req.params;
    try {
      const userCart = await Cart.find({ user: id });
      res.status(200).send(userCart);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  })
  .patch(auth, async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.body);
      const updatedCart = await Cart.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(updatedCart);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { id } = req.params;
      const removedItem = await Cart.findById(id);
      res.status(200).send(null);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on the server. Try later" });
    }
  });

module.exports = router;
