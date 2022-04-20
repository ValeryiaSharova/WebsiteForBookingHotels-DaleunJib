const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/category", require("./category.routes"));
router.use("/products", require("./product.routes"));
router.use("/question", require("./question.routes"));
router.use("/cart", require("./cart.routes"));

module.exports = router;
