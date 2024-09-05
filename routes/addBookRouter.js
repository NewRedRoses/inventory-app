const { Router } = require("express");
const { addBookRouterGet } = require("../controllers/booksController");
const addBookRouter = Router();

addBookRouter.get("/", addBookRouterGet);

module.exports = addBookRouter;
