const express = require("express");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await User.find();
    res.status(200).send(list);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error has occurred on the server. Try later" });
  }
});

module.exports = router;
