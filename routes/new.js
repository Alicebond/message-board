const express = require("express");
const router = express.Router();

/* Get form page */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

module.exports = router;
