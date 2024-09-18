const { Router } = require("express");
const {
  addBookRouterGet,
  addBookRouterPost,
} = require("../controllers/booksController");
const bookRouter = Router();

bookRouter.get("/add", addBookRouterGet);
bookRouter.post("/add", addBookRouterPost);

module.exports = bookRouter;
