const { Router } = require("express");
const {
  addBookRouterGet,
  addBookRouterPost,
  viewBookGet,
  deleteBookGet,
} = require("../controllers/booksController");
const bookRouter = Router();

bookRouter.get("/add", addBookRouterGet);
bookRouter.post("/add", addBookRouterPost);

bookRouter.get("/:id/view", viewBookGet);
bookRouter.get("/:id/delete", deleteBookGet);

module.exports = bookRouter;
