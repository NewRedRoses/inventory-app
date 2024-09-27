const { Router } = require("express");
const {
  categoriesRouterGet,
  categoriesRouterPost,
  addCategoryPost,
} = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", categoriesRouterGet);
categoriesRouter.post("/", categoriesRouterPost);

categoriesRouter.post("/add", addCategoryPost);

module.exports = categoriesRouter;
