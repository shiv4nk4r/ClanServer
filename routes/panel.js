const routerPanel = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");

routerPanel.get("/", verify, async (req, res) => {
  const token = req.cookies["token"];
  decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  const user = await User.findOne({ _id: decoded._id });
  if (user.Admin == -1) {
    res.render("404");
  }
  if (user.Admin == 0) {
    res.render("underReview");
  }
  res.render("panel");
});
module.exports = routerPanel;
