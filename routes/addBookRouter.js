const { Router } = require("express");
const {
  addBookRouterGet,
  addBookRouterPost,
} = require("../controllers/booksController");
const addBookRouter = Router();

addBookRouter.get("/", addBookRouterGet);
addBookRouter.post("/", addBookRouterPost);

module.exports = addBookRouter;
