const { Router } = require("express");
const { indexRouterGet } = require("../controllers/booksController");
const indexRouter = Router();

indexRouter.get("/", indexRouterGet);

module.exports = indexRouter;
