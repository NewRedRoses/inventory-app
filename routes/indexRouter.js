const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.end();
});

module.exports = indexRouter;
