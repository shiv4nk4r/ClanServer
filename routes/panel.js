const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("PanelPage");
});

module.exports = router;
