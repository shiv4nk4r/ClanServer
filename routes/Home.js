const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("home");
});

module.exports = router;
