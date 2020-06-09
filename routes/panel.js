const routerPanel = require("express").Router();

routerPanel.get("/", (req, res) => {
  res.render("panel");
});
module.exports = routerPanel;
