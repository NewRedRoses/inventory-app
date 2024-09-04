const { Router } = require("express");

const addBookRouter = Router();

addBookRouter.get("/", (req, res) => {
  res.end();
});

module.exports = addBookRouter;
