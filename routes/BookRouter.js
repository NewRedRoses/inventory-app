const { Router } = require("express");
const {
  addBookRouterGet,
  addBookRouterPost,
  viewBookGet,
  editBookGet,
  editBookPost,
  deleteBookGet,
} = require("../controllers/booksController");
const bookRouter = Router();

bookRouter.get("/add", addBookRouterGet);
bookRouter.post("/add", addBookRouterPost);

bookRouter.get("/:id/view", viewBookGet);
bookRouter.get("/:id/edit", editBookGet);
bookRouter.post("/:id/edit", editBookPost);
bookRouter.get("/:id/delete", deleteBookGet);

module.exports = bookRouter;
