const { Router } = require("express");
const {
  addBookRouterGet,
  addBookRouterPost,
  viewBookGet,
} = require("../controllers/booksController");
const bookRouter = Router();

bookRouter.get("/add", addBookRouterGet);
bookRouter.post("/add", addBookRouterPost);

bookRouter.get("/:id/view", viewBookGet);

module.exports = bookRouter;
