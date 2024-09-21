const { Router } = require("express");
const {
  categoriesRouterGet,
  addCategoryPost,
} = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", categoriesRouterGet);

categoriesRouter.post("/add", addCategoryPost);

module.exports = categoriesRouter;
